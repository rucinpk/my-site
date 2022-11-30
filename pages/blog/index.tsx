import { getAllArticles } from "../../src/utils/mdx";
import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";
import Title from "../../components/Title/Title";

export default function BlogPage({ posts }: any) {
  let [filters, setFilters] = useState<string[]>([]);
  const updateFilters = (tag: string) => {};
  return (
    <Layout title="Blog | CodiCrypt" currentRoute={Paths.BLOG}>
      <section className={`section dark:bg-violet-800 bg-violet-400 pt-8`}>
        <Title text="My" title="My Blogs" highlightedText="Blogs" />
        <div className="blogs-content">
          <div className="grid gap-9 mt-12 grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:py-8 pb-8 md:py-8 mt-12 sm:w-3/5 lg:w-3/4  md:w-11/12 m-auto">
            {posts.map((frontMatter: any, key: number) => {
              return (
                <Link key={key} href={`/blog/${frontMatter.slug}`} passHref>
                  {" "}
                  <div className="[&:hover>img]:shadow-[0px_4px_15px_rgba(0,0,0,0.8)] hover:-translate-y-5 ease-in-out duration-300 hover:shadow-lg relative bg-gray-800 rounded-sm shadow-sm  [&:hover>img]:scale-110 [&:hover>img]:grayscale-0">
                    <Image
                      className="bg-violet-500 w-full h-60 object-scale-down ease-in-out duration-300 grayscale "
                      src={frontMatter.cover_image}
                      width={400}
                      height={400}
                      alt=""
                    />
                    <div>
                      <div className="dark:border-white border-black border-t-8 -mt-1 p-4 bg-white dark:bg-black">
                        <div className="ease-in-out duration-300 mb-3 text-xl hover:text-violet-800">
                          {frontMatter.title}
                        </div>
                        <p className="text-gray-400 pb-4 leading-8">
                          {frontMatter.excerpt}
                        </p>
                        <p className="date leading-8">
                          {dayjs(frontMatter.publishedAt).format(
                            "MMMM D, YYYY"
                          )}{" "}
                          &mdash; {frontMatter.readingTime}
                        </p>
                        <div className="flex flex-row gap-2">
                          {frontMatter?.tags?.map((tag: string) => (
                            <div
                              onClick={() => {
                                updateFilters(tag);
                              }}
                              className="bg-gray-400 rounded-sm p-1 hover:bg-gray-800 ease-in-out duration-300"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
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
    .sort((a: any, b: any) => {
      if (a.publishedAt > b.publishedAt) return 1;
      if (a.publishedAt < b.publishedAt) return -1;
      return 0;
    })
    .map((article: any) => article.data);
  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
