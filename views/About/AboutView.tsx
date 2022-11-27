import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const AboutView = ({}: Props) => {
  return (
    <div className="section bg-green-900 header-content">
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
        <div className="btn-con">
          <a href="" className="main-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
