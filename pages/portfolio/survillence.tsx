import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";

export default function About() {
  return (
    <Layout
      title="Survillence | CodiCrypt"
      currentRoute={Paths.PORTFOLIO_SURVILLENCE}
    >
      {" "}
      <div className="w-3/5 m-auto my-10">
        <h2 className="text-3xl font-bold text-center leading-tight text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-lg">
          {" "}
          &ldquo; I hereby give references to Mr. Patryk Ruciński who
          implemented the project fully and independently. Dominik Curyło -
          Asteroid sp. z o.o. &rdquo;
        </h2>
        <div className="m-auto my-8 p-2 text-xl">
          <p className="text-center text-3xl font-bold">
            Using Computer Vision to Fight Covid-19 in Public Transportation
            (PoC) <br /> <br />
          </p>
          <p>
            As the Covid-19 pandemic swept the world, governments and health
            organizations scrambled to implement measures to slow the spread of
            the virus. One key measure was to limit the number of people using
            public transportation at any given time, in order to reduce the risk
            of transmission. <br /> <br />
          </p>
          <Image
            className=" w-full h-120 object-scale-down ease-in-out duration-300 "
            src="/images/portfolio/vision.png"
            width={800}
            height={800}
            alt="Mitre App"
          />
          <p className="">
            To explore the feasibility of using technology to assist with this
            effort, we developed a proof-of-concept (PoC) computer program for
            public transportation providers to use in monitoring and counting
            the number of passengers on their vehicles. The program aggregated
            video from multiple cameras installed on the vehicles and used
            advanced computer vision algorithms to track and count the number of
            passengers on board.
          </p>
          <p>
            {" "}
            The PoC was a success, and it demonstrated the potential for
            computer vision technology to play a role in helping public
            transportation providers to continue operating safely during the
            pandemic. The program was able to accurately track and count
            passengers, even in crowded and busy environments.{" "}
          </p>{" "}
        </div>

        <h2 className="text-3xl font-bold text-center leading-tight text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-lg">
          {" "}
          &ldquo;The project was carried out realiably and on time. Dominik
          Curyło - Asteroid sp. z o.o. .&rdquo;
        </h2>
      </div>
    </Layout>
  );
}
