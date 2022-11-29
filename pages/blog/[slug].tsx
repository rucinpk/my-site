import dayjs from "dayjs";
import React from "react";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getSlug, getArticleFromSlug } from "../../src/utils/mdx";
import { SectionTitle, Text } from "../../data/components/mdx-components";
import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Title from "../../components/Title/Title";

export default function Blog({ post: { source, frontmatter } }: any) {
  let title = frontmatter.title + " | My blog";
  return (
    <Layout title={title} currentRoute={Paths.BLOG}>
      <section className="section dark:bg-gray-900 bg-gray-200">
        <div className="pt-12 mt-12">
          <Title text={frontmatter.title} title="Blog" highlightedText="" />
        </div>

        <p className="text-center py-2">
          {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
          {frontmatter.readingTime}
        </p>
        <div className="sm:w-11/12 md:w-3/5 px-4 m-auto text-xl py-8 mb-8">
          <MDXRemote {...source} components={{ Image, SectionTitle, Text }} />
        </div>
      </section>
    </Layout>
  );
}
// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}
