import Image from "next/image";
import { faCode, faInfo, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PORTFOLIO_ITEMS } from "../../constants/portfolio";
import Tooltip from "../../components/Tooltip";
import Title from "../../components/Title/Title";

type Props = {};

const PortfolioView = ({}: Props) => {
  return (
    <section className={`section dark:bg-blue-800 bg-blue-300 pt-8`}>
      <Title text="My" title=" My Work" highlightedText="Portfolio" />

      <p className="text-center py-14">
        Here is some of my most fascinating projects
      </p>
      <div className="grid sm-grid-cols-1 md:grid-cols-3 gap-8 sm:py-8 pb-8 md:py-8 mt-12 sm:w-3/5 lg:w-3/4  md:w-11/12 m-auto">
        {PORTFOLIO_ITEMS.map((portfolioItem) => (
          <div
            key={portfolioItem.name}
            className="relative rounded-md portfolio-item px-2"
          >
            <div>
              <Image
                className={`w-full rounded-lg h-60 object-scale-down bg-black`}
                src={portfolioItem.image.source}
                width={portfolioItem.image.width}
                height={portfolioItem.image.height}
                alt=""
              />
            </div>
            <div className="hover-items opacity-0 s duration-300 w-full h-full text-white absolute left-0 top-0 bg-violet-800 flex flex-col items-center justify-center rounded-lg">
              <div className="font-bold mb-6 text-xl text-center">
                {portfolioItem.name}
              </div>
              <div className="flex items-center justify-center gap-4 ">
                <Tooltip tooltipText="Source code" orientation="bottom">
                  <a
                    href="#"
                    className="bg-gray-800 rounded-full flex items-center justify-center mx-1 mx-1 w-10 h-10 hover:bg-green-800 ease-in-out duration-300"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                </Tooltip>
                <Tooltip tooltipText="Case Study" orientation="bottom">
                  <a
                    href="#"
                    className="bg-gray-800 rounded-full flex items-center justify-center mx-1 mx-1 w-10 h-10 hover:bg-green-800 ease-in-out duration-300"
                  >
                    <FontAwesomeIcon icon={faInfo} />
                  </a>
                </Tooltip>
                <Tooltip tooltipText="Project URL" orientation="bottom">
                  <a
                    href="#"
                    className="bg-gray-800 rounded-full flex items-center justify-center mx-1 mx-1 w-10 h-10 hover:bg-green-800 ease-in-out duration-300"
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioView;
