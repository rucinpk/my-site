import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const HomeView = ({}: Props) => {
  return (
    <section className={`section bg-gray-900`}>
      <div className="text-center">
        <div className="relative uppercase text-5xl z-10 font-bold">
          About <span className="text-green-400">me</span>
          <span className="absolute font-black -z-10 text-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
            my stats
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-14 pb-20">
        <div className="pr-20">
          <div className="text-4xl uppercase">Information About me</div>
          <p className="leading-8 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            labore nihil obcaecati consequatur. Debitis error doloremque, vero
            eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La
            musica delectus dolore fugiat exercitationem a, ipsum quidem quo
            enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Harum non necessitatibus
            deleniti eum soluta.
          </p>
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
        <div className="grid grid-cols-2 gap-8">
          <div className="about-item border-2 cursor-default rounded-lg shadow-md border-gray-600 ease-in-out duration-300 hover:shadow-lg hover:border-gray-100 hover:-translate-y-5 ">
            <div className="p-7 flex flex-col">
              <p className="text-5xl font-bold">30+</p>
              <p className="text-xl pl-12 relative uppercase tracking-wide before:content-[''] before:absolute before:left-0 before:top-8 before:bg-gray-600 before:w-10 before:h-px">
                Projects <br /> Completed
              </p>
            </div>
          </div>
          <div className="border-2 cursor-default rounded-lg shadow-md border-gray-600 ease-in-out duration-300 hover:shadow-lg hover:border-gray-100 hover:-translate-y-5 ">
            <div className="p-7 flex flex-col">
              <p className="text-5xl font-bold">10+</p>
              <p className="text-xl pl-12 relative uppercase tracking-wide before:content-[''] before:absolute before:left-0 before:top-8 before:bg-gray-600 before:w-10 before:h-px">
                Years of <br /> experience
              </p>
            </div>
          </div>
          <div className="border-2 cursor-default rounded-lg shadow-md border-gray-600 ease-in-out duration-300 hover:shadow-lg hover:border-gray-100 hover:-translate-y-5 ">
            <div className="p-7 flex flex-col">
              <p className="text-5xl font-bold">20+</p>
              <p className="text-xl pl-12 relative uppercase tracking-wide before:content-[''] before:absolute before:left-0 before:top-8 before:bg-gray-600 before:w-10 before:h-px">
                Happy <br /> Clients
              </p>
            </div>
          </div>
          <div className="border-2 cursor-default rounded-lg shadow-md border-gray-600 ease-in-out duration-300 hover:shadow-lg hover:border-gray-100 hover:-translate-y-5 ">
            <div className="p-7 flex flex-col">
              <p className="text-5xl font-bold">10+</p>
              <p className="text-xl pl-12 relative uppercase tracking-wide before:content-[''] before:absolute before:left-0 before:top-8 before:bg-gray-600 before:w-10 before:h-px">
                Customer <br /> reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-14">
        <div className="text-center font-normal relative py-8 px-2 uppercase text-2xl before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-2/5 before:h-px before:-translate-x-1/2">
          My Skills
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="uppercase font-semibold">Python</p>
            <div className="flex items-center">
              <p className="prog-text">95%</p>
              <div className="progress bg-green-800 relative ml-6 h-2 w-full">
                <span className="w-1/2 absolute top-0 left-0 h-full w-2/3 bg-red-200"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-semibold">C++</p>
            <div className="flex items-center">
              <p className="prog-text">95%</p>
              <div className="progress bg-green-800 relative ml-6 h-2 w-full">
                <span className="w-1/2 absolute top-0 left-0 h-full w-2/3 bg-red-200"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-semibold">ReactJS</p>
            <div className="flex items-center">
              <p className="prog-text">80%</p>
              <div className="progress bg-green-800 relative ml-6 h-2 w-full">
                <span className="w-1/2 absolute top-0 left-0 h-full w-2/3 bg-red-200"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-semibold">Rust</p>
            <div className="flex items-center">
              <p className="prog-text">60%</p>
              <div className="progress bg-green-800 relative ml-6 h-2 w-full">
                <span className="w-1/2 absolute top-0 left-0 h-full w-2/3 bg-red-200"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-semibold">Solidity</p>
            <div className="flex items-center">
              <p className="prog-text">60%</p>
              <div className="progress bg-green-800 relative ml-6 h-2 w-full">
                <span className="w-1/2 absolute top-0 left-0 h-full w-2/3 bg-red-200"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-semibold">Crypto</p>
            <div className="flex items-center">
              <p className="prog-text">90%</p>
              <div className="progress bg-green-800 relative ml-6 h-2 w-full">
                <span className="w-1/2 absolute top-0 left-0 h-full w-2/3 bg-red-200"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center font-normal relative py-8 px-2 uppercase text-2xl before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-2/5 before:h-px before:-translate-x-1/2">
        My Timeline
      </h4>
      <div className="grid grid-cols-2 gap-8 pb-8">
        <div className="relative pl-8 border-l-2 border-gray-800">
          <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center	 rounded-full bg-violet-700">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <p className="bg-gray-600 px-1 py-1 rounded-2xl inline-block text-sm">
            2020 - present
          </p>
          <h5>
            Full Stack Developer<span> Freelance</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-800">
          <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center	 rounded-full bg-violet-700">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <p className="bg-gray-600 px-1 py-1 rounded-2xl inline-block text-sm">
            2021
          </p>
          <h5>
            Software Security Engineer<span> - CloudBest</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-800">
          <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center	 rounded-full bg-violet-700">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <p className="bg-gray-600 px-1 py-1 rounded-2xl inline-block text-sm">
            2020
          </p>
          <h5>
            Senior Python Developer<span> - ING BANK</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-800">
          <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center	 rounded-full bg-violet-700">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <p className="bg-gray-600 px-1 py-1 rounded-2xl inline-block text-sm">
            2020
          </p>
          <h5>
            Python Developer<span> ComCERT S.A.</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-800">
          <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center	 rounded-full bg-violet-700">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <p className="bg-gray-600 px-1 py-1 rounded-2xl inline-block text-sm">
            2019 - 2020
          </p>
          <h5>
            C++ Programmer<span> - Usecrypt S.A.</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-800">
          <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center	 rounded-full bg-violet-700">
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <p className="bg-gray-600 px-1 py-1 rounded-2xl inline-block text-sm">
            2017 - 2021
          </p>
          <h5>
            Cryptology & CyberSecurity
            <span> - Military University of Technology</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
