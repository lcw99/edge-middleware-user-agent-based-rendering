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

const Detail: React.FunctionComponent<Repo> = (repo) => {
  // const product = await fetch(`https://lcw99.github.io/newparty-cms/article/articles.json`).then((res) => res.json())
  // console.log(repo)
  const imageUrl = `https://lcw99.github.io/newparty-cms/article/photo/${repo.photo}`
  return <>
    <Head>
      <title>{repo.title}</title>
      <meta name="description" content={repo.abstracts} />
      <meta property="og:title" content={repo.title}/>
      <meta property="og:description" content={repo.abstracts}/>
      <meta property="og:image" content={imageUrl}/>
      <meta property="og:type" content="website"/>
    </Head>
    <div>
      {repo.title}<br/>
      {repo.author}<br/>
      {imageUrl}<br/>
      {repo.pub_date}<br/>
      {repo.abstracts}
    </div>
  </>;
};

export default Detail;

export async function getServerSideProps(context: any) {
  // console.log(context.query.md)
  const articles = await fetch(`https://lcw99.github.io/newparty-cms/article/articles.json`).then((res) => res.json())
  const article = context.query.md
  var repo = {title: "새로운선택", author: "새로운선택", pub_date: "2000-1-1 11:11", article: "새로운선택", abstracts: "새로운선택"}
  for (let a of articles) {
    if (a.article == article.replace("article-", "")) {
      // console.log('found')
      repo = a
    }
  }
  // console.log(repo)
  return { props: repo };
}