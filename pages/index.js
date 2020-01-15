import React from 'react'
import Link from "next/link";
import Title from '../components/title'
 

const Home = () => (
  <div>
     <Title>ProbeDream</Title> 
     <div><Link href="/page1"><a>go to page1!</a></Link></div>
     <div><Link href="/page2"><a>go to page2!</a></Link></div>
  </div>
)

export default Home
