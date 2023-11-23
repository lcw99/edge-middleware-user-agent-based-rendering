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

type Doc = {
  title: string
  document: string
  content: string
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
      <meta property="og:image" content="https://newparty.kr/icons/newparty.jpg"/>
      <meta property="og:type" content="website"/>
    </Head>
    <div dangerouslySetInnerHTML={{__html: repostr.html}} />
  </>
};

export default BotRoot;

export async function getServerSideProps(context: any) {
  const articles:Repo[] = await fetch(`https://lcw99.github.io/newparty-cms/article/articles.json`).then((res) => res.json())
  const docs:Doc[] = await fetch(`https://lcw99.github.io/newparty-cms/documents.json`).then((res) => res.json())
  var html = "<h1>새로운선택</h1>"
  docs.forEach(function (doc) {
    const url = `https://www.newparty.kr/home/document/${doc.document}`
    html += `<div>
      <h2><a href=${url}>${doc.title}</a></h2>
      <div>${doc.content}</div>
      <div>---</div>
    </div>`;
  })
  html += "<h1>새로운선택에 바란다</h1>"
  articles.forEach(function (repo) {
    const url = `https://www.newparty.kr/home/document/article-${repo.article}`
    const imageUrl = `https://lcw99.github.io/newparty-cms/article/photo/${repo.photo}`
    html += `<div>
      <h2><a href=${url}>${repo.title}</a></h2>
      <div>${repo.author}</div>
      <div>${repo.pub_date}</div>
      <a href=${url}><img src=${imageUrl}></img></a>
      <div>${repo.abstracts}</div>
      <div>---</div>
    </div>`;
  })
  return { props: {html: html} };
}