import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { getProviders, getSession, GetSessionParams, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from '../atoms/modalAtom';
import  Widgets from "../components/Widgets";
import React from 'react';

type Props = {
  trendingResults: [],
  followResults:[],
  session: [],
  providers: [
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    }

],

}

 const Home : NextPage<Props> = ({ trendingResults,followResults, providers }) => {
    const {data:session } = useSession();
    const [isOpen, setIsOpen] = useRecoilState(modalState);

   if(!session) return <Login  providers={providers} />

  return (
    <div className="">
      <Head>
        <title>Twitter clone </title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
       <Sidebar />
       <Feed />
       <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

       {isOpen && <Modal /> }      
    </main>
    </div>
  );
}

export default Home;

//Used for dynamic content
export async function getServerSideProps(context: GetServerSidePropsContext){
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

 return  { 
    props : {
      trendingResults,
      followResults,
      providers,
      session,

 }
   
 };
      
    
}
        
    


/**   trendingResults:trendingResults ,
           followResults:followResults,
           providers:providers,
           session:session,
           
           
           */


  