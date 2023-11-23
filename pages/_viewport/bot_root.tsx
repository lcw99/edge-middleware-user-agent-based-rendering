import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head'

type Repo = {
  title: string
  author: string
  photo: string
  pub_date: string
  article: string
  abstracts: string
}

type Html = {
  html: string
}

const BotRoot: React.FunctionComponent<Html> = (repostr) => {
  var aa:any = []
  console.log(repostr.html)
  return <>
    <Head>
      <title>새로운선택</title>
      <meta name="description" content="새로운선택" />
      <meta property="og:title" content="새로운선택" />
      <meta property="og:description" content="새로운선택"/>
      <meta property="og:image" content="https:/newparty.kr/icons/newparty.jpg"/>
      <meta property="og:type" content="website"/>
    </Head>
    <div dangerouslySetInnerHTML={{__html: repostr.html}} />
  </>
};

export default BotRoot;

export async function getServerSideProps(context: any) {
  // console.log(context.query.md)
  const articles:Repo[] = await fetch(`https://lcw99.github.io/newparty-cms/article/articles.json`).then((res) => res.json())
  var html = ""
  articles.forEach(function (repo) {
    const url = `https://www.newparty.kr/home/document/article-${repo.article}`
    const imageUrl = `https://lcw99.github.io/newparty-cms/article/photo/${repo.photo}`
    html += `<div>
      <a href=${url}>${repo.title}</a>
      <div>${repo.author}</div>
      <div>${repo.pub_date}</div>
      <img src=${imageUrl}></img>
      <div>${repo.abstracts}</div>
    </div>`;
  })
  return { props: {html: html} };
}