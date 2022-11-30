import { faSuitcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title/Title";
import { SKILLS } from "../../constants/skills";
import { TIMELINE } from "../../constants/timeline";
import Button from "../../components/Button/Button";
import { ABOUT_ITEMS } from "../../constants/aboutItems";

type Props = {};

const HomeView = ({}: Props) => {
  return (
    <section className="section bg-gray-300 w-full sm:py-8 md:py-3 sm:px-3 md:px-8 dark:bg-gray-900">
      <Title text="About" title="my stats" highlightedText="me" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 pt-14 pb-20">
        <div className="sm:pr-0 md:pr-20">
          <div className="text-4xl uppercase">Information About me</div>
          <p className="leading-8 md:p-4 sm:p-0 sm:py-4">
            I am software engineer experienced in FinTech and CyberSecurity
            Domains. I am technology geek, loving blockchain AR and AI. . <br />{" "}
            <br /> I love learning and trying new things. In my free time I dive
            🤿, learn natural (日本語, Русский) and programming languages, read
            business and science books, play piano 🎹, guitar 🎸 and computer
            games 🎮.
          </p>
          <Button text="Download CV" onClick={() => {}} icon={faDownload} />
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {ABOUT_ITEMS.map((item) => (
            <div className="border-2 cursor-default rounded-lg shadow-md border-gray-600 ease-in-out duration-300 hover:shadow-lg hover:border-gray-100 hover:-translate-y-5 ">
              <div className="p-7 flex flex-col md:items-baseline sm:items-center">
                <p className="text-5xl font-bold">{item.number}</p>
                <p className="text-xl  sm:text-center md:text-left sm:pl-0 md:pl-12 sm:pt-1 md:pt-0 relative uppercase tracking-wide before:content-[''] before:absolute before:left-0 before:top-8 before:bg-gray-600 before:w-10 md:before:h-px">
                  {item.titlePart1} <br /> {item.titlePart2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-14">
        <div className="text-center font-normal relative py-8 px-2 uppercase text-2xl before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-2/5 before:h-px before:-translate-x-1/2">
          My Skills
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:px-2 md:px-0">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col">
              <p className="uppercase font-semibold">{skill.name}</p>
              <div className="flex items-center">
                <p className="prog-text">{skill.percentage}</p>
                <div className="progress bg-gray-700 relative ml-6 h-2 w-full">
                  <span
                    className={` ${skill.width} absolute top-0 left-0 h-full bg-green-400`}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h4 className="text-center font-normal relative py-8 px-2 uppercase text-2xl before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-2/5 before:h-px before:-translate-x-1/2">
        My Timeline
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:pb-16 md:pb-8 md:px-0 sm:px-8">
        {TIMELINE.map((timeline) => (
          <div
            key={timeline.company}
            className="relative pl-14 border-l-2 border-gray-800"
          >
            <div className="absolute -left-6 top-0 w-11 h-11 flex items-center justify-center	rounded-full bg-violet-700 text-gray-200 dark:text-black">
              <FontAwesomeIcon icon={faSuitcase} />
            </div>
            <p className="dark:bg-gray-700 bg-gray-400 p-2 rounded-2xl inline-block text-xs">
              {timeline.time}
            </p>
            <div className="font-black pt-2">
              {timeline.title}
              <span className="font-thin"> - {timeline.company}</span>
            </div>
            <p className="font-thin text-sm py-2">{timeline.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeView;
