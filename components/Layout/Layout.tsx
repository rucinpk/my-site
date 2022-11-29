import React, { ReactNode } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTROL_ICONS } from "../../constants/icons";
import Link from "next/link";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
type Props = {
  children?: ReactNode;
  currentRoute: string;
  title?: string;
};

const Layout = ({
  children,
  title = "CodiCrypt | CodiCrypt",
  currentRoute,
}: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="CodiCrypt - Cryptography, Web3, Blockchain, Computer Vision, Programming, Security, AI"
        />
        <meta
          name="og:title"
          content="CodiCrypt - Software Security Software House"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="facebook-domain-verification"
          content="p20xpxuhvcrpng72otxopzltgzynk6"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <div className="fixed z-50 sm:left-1/2 md:left-auto sm:w-full md:w-auto  sm:bottom-0 md:bottom-auto sm:top-auto md:top-1/2 sm:right-auto md:right-20 flex sm:flex-row md:flex-col items-center justify-center -translate-y-1/2 sm:-translate-x-1/2 md:-translate-x-0 sm:gap-5 md:gap-0">
        <>
          {CONTROL_ICONS.map((icon, index) => (
            <Link
              href={icon.key}
              passHref
              key={index}
              className={`control ease-in-out duration-300 p-1  w-14 h-14 rounded-full flex justify-center items-center mx-0 my-2  ${
                icon.key === currentRoute ? "bg-violet-800" : "bg-gray-800"
              }`}
            >
              {" "}
              <FontAwesomeIcon
                className={`text-xl ${
                  icon.key === currentRoute ? "text-gray-400" : "text-gray-100"
                } pointer-events-none`}
                icon={icon.icon}
              />
            </Link>
          ))}
        </>
      </div>
      <div
        className="theme-btn z-50 top-10 right-4 w-20 h-20 rounded-full dark:bg-gray-300 bg-gray-800 dark:text-gray-800 text-gray-200"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <FontAwesomeIcon icon={faAdjust} />
      </div>
    </>
  );
};

export default Layout;
