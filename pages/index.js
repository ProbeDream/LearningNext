import React from 'react';
import Link from 'next/link';
import Title from '../components/title';
import Router from "next/router";
import page3 from './page3';

const Home = () => (
  <div>
    <Title>ProbeDream</Title>
    <div>
      <Link href="/page1">
        <a>go to page1!</a>
      </Link>
    </div>
    <div>
      <Link href="/page2">
        <a>go to page2!</a>
      </Link>
    </div>

    <button onClick={()=>{Router.push("/page1")}}>goA</button>
    <button onClick={()=>{Router.push("/page2")}}>goB</button>
    <br/>
    <Link href="/page3?name=小p"><a>他是小p</a></Link>
 
  </div>
);

export default Home;
