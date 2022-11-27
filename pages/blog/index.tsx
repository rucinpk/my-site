import { getAllArticles } from "../../src/utils/mdx";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";

export default function BlogPage({ posts }: any) {
  return (
    <Layout title="Blog | CodiCrypt" currentRoute={Paths.BLOG}>
      <section className={`section bg-green-800`}>
        <div className="text-center">
          <div className="relative uppercase text-5xl z-10 font-bold">
            My <span>Blogs</span>
            <span className="absolute font-black -z-10 text-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
              My Blogs
            </span>
          </div>
        </div>

        <div className="blogs-content">
          <div className="blogs">
            {posts.map((frontMatter: any, key: number) => {
              return (
                <Link key={key} href={`/blog/${frontMatter.slug}`} passHref>
                  <div className="blog">
                    <div className="blog-text">
                      <h4>{frontMatter.title}</h4>
                      <p>{frontMatter.excerpt}</p>
                      <p className="date">
                        {dayjs(frontMatter.publishedAt).format("MMMM D, YYYY")}{" "}
                        &mdash; {frontMatter.readingTime}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
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
