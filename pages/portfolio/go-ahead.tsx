import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";

export default function About() {
  return (
    <Layout
      title="Go Ahead | CodiCrypt"
      currentRoute={Paths.PORTFOLIO_GO_AHEAD}
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
            Case Study: Developing a Mobile App for People with Mental
            Disabilities <br /> <br />
          </p>
          <p>
            As a software developer, we are always looking for ways to use
            technology to make a positive impact in the world. That's why we
            were excited to work on a project for a client who wanted to develop
            a mobile app for people with mental disabilities.
            <br /> <br />
          </p>
          <Image
            className="w-2/5 m-auto h-120 object-scale-down"
            src="/images/portfolio/goahead.png"
            width={800}
            height={800}
            alt="Mitre App"
          />
          <p className="mt-5">
            The goal of the app was to provide an interactive and engaging way
            for users to learn new information and skills. The app featured
            lessons with images and text, as well as quizzes to verify
            understanding. One of the key features of the app was the ability
            for a supervisor to monitor the progress and results of the users.
            This allowed the supervisor to track their progress and ensure that
            they were retaining the information being taught.
          </p>
          <p>
            {" "}
            We are proud to say that the development of the app was a success,
            and the client was extremely satisfied with the final product. We
            even had the opportunity to meet with the client in person to
            discuss the app and see it in action.{" "}
          </p>{" "}
          <p>
            {" "}
            <Image
              className="w-2/5 m-auto h-120 object-scale-down"
              src="/images/portfolio/goahead-meeting2.jpeg"
              width={800}
              height={800}
              alt="Mitre App"
            />
            <Image
              className="w-2/5 py-5 m-auto h-120 object-scale-down"
              src="/images/portfolio/meeting3.jpeg"
              width={800}
              height={800}
              alt="Mitre App"
            />{" "}
            The photos from this meeting, which show the app being used by a
            group of individuals with mental disabilities, are a testament to
            the positive impact that technology can have. We are confident that
            this mobile app will make a real difference in the lives of people
            with mental disabilities and are excited to see it being used to
            help users learn and grow.{" "}
          </p>{" "}
        </div>
      </div>
    </Layout>
  );
}
