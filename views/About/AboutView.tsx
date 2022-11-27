import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const AboutView = ({}: Props) => {
  return (
    <div className="section bg-green-900 header-content grid grid-cols-2 min-h-screen">
      <div className="left-header">
        <div className="h-shape"></div>
        <div className="image">
          <Image
            src="/images/me.png"
            quality={100}
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
      <div className="right-header">
        <h1 className="name">
          Hi, I'm <span>Patryk.</span>
          <br />A Software Engineer.
        </h1>
        <p>I love creating Web3, AI and Computer Vision Apps.</p>
        <div className="flex self-start">
          <a
            href=""
            className="rounded-large font-semibold relative border-2 border-violet-800 flex self-start items-center overflow-hidden"
          >
            <span className="px-6 py-0 text-amber-200 z-10">Download CV</span>
            <span className="btn-icon bg-violet-700 flex items-center justify-center rounded-full p-4 z-10">
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
