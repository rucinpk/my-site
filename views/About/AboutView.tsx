import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";

type Props = {};

const AboutView = ({}: Props) => {
  return (
    <div className="section bg-green-400 dark:bg-green-900 grid sm:grid-cols-1 md:grid-cols-2 sm:pb-16 md:p-0 min-h-screen">
      <div className="flex relative items-center  sm:row-start-2 md:row-start-1 md:col-start-1 sm:col-start-1">
        <div className="h-shape bg-violet-500 dark:bg-violet-800 sm:hidden md:block h-full"></div>
        <div className="image rounded-large h-1/2 w-3/5 sm:m-auto md:ml-16 flex justify-center items-end bg-black z-10">
          <Image
            className="object-cover grayscale hover:grayscale-0 ease-in-out duration-300"
            src="/images/me.png"
            quality={100}
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center sm:items-center md:items-baseline px-5 sm:pb-20 sm:row-start-1 md:row-start-1 md:col-start-2 sm:col-start-1">
        <div className="name md:pt-0 sm:pt-12">
          Hi, I'm <span className="text-violet-600">Patryk.</span>
          <br />A Software Engineer.
        </div>
        <p className="py-4">
          I love creating Web3, AI and Computer Vision Apps. <br />
          Me and my team can create it for you!
        </p>
        <Button
          text="Download CV"
          onClick={() => {
            location.href = "/api/getCV";
          }}
          icon={faDownload}
        />
      </div>
    </div>
  );
};

export default AboutView;
