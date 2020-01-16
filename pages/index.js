import React from 'react';
import Link from 'next/link';
import Title from '../components/title';
import Router from 'next/router';

const Home = () => {
  const goToPage5 = () => {
    Router.push({
      pathname: '/page5',
      query: {
        name: 'John'
      }
    });
  };

  const goToPage6 = ()=>{
    Router.push({pathname:"/page6",query:{name:"Amy"}});
  }
  Router.events.on('routeChangeStart', (...args) => {
    console.log(`1.routeChangeStart路由发生变化的时候,参数为:${args}`);
  });

  Router.events.on('routeChangeComplete', (...args) => {
    console.log(`2.routeChangeComplete路由结束变化的时候,参数为:${args}`);
  });

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log(`3.beforeHistoryChange浏览器History出发之前,参数为:${args}`);
  });

  Router.events.on('routeChangeError', (...args) => {
    console.log(`4.routeCHangeError路由器跳转错误的时候,参数为:${args}`);
  });

  Router.events.on('hashChangeStart', (...args) => {
    console.log(`5.hashChangeStart跳转开始时触发,参数为:${args}`);
  });

  Router.events.on('hashChangeComplete', (...args) => {
    console.log(`6.hashChangeComplete跳转完成时触发,参数为:${args}`);
  });

  return (
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

      <button
        onClick={() => {
          Router.push('/page1');
        }}
      >
        goA
      </button>
      <button
        onClick={() => {
          Router.push('/page2');
        }}
      >
        goB
      </button>
      <br />
      <Link href="/page3?name=小p">
        <a>他是小p</a>
      </Link>
      <br />
      <Link href={{ pathname: '/page5', query: { name: 'Julia' } }}>
        <a>Hello Julia!</a>
      </Link>
      <br />
      <Link href="/page5?name=Joe">
        <a>Hello Joe!</a>
      </Link>
      <br/>
      <button onClick={goToPage5}>goToPage5</button>
      <br/>
      <button onClick={()=>{Router.push({pathname:"/page6",query:{name:"Amy"}})}}>goToPage6</button>
      
    </div>
  );
};

export default Home;
