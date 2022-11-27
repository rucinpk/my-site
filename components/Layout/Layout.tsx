import React, { ReactNode } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTROL_ICONS } from "../../constants/icons";
import Link from "next/link";
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

      <div className="controlls">
        <>
          {CONTROL_ICONS.map((icon, index) => (
            <Link
              href={icon.key}
              passHref
              key={index}
              className={`control control-${index} ${
                icon.key === currentRoute ? "active-btn" : ""
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
    </>
  );
};

export default Layout;
