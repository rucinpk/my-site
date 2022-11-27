import { getAllArticles } from "../../src/utils/mdx";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";

export default function BlogPage({ posts }: any) {
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div className="flex p-3 m-3 content-center justify-center flex-wrap gap-10">
        {posts.map((frontMatter: any, key: number) => {
          return (
            <div className="flex flex-col gap-5 justify-center content-center shrink-0 basis-1/4 ">
              <Link key={key} href={`/blog/${frontMatter.slug}`} passHref>
                <h1 className="font-bold">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format("MMMM D, YYYY")}{" "}
                  &mdash; {frontMatter.readingTime}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
