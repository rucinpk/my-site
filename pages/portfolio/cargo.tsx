import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";

export default function About() {
  return (
    <Layout title="Cargo App | CodiCrypt" currentRoute={Paths.PORTFOLIO_CARGO}>
      <div className="w-3/5 m-auto my-10">
        <h2 className="text-3xl font-bold text-center leading-tight text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-lg">
          {" "}
          &ldquo; I hereby give references to Mr. Patryk Ruciński who
          implemented the project fully and independently. Dominik Curyło -
          Asteroid sp. z o.o. &rdquo;
        </h2>
        <div className="m-auto my-8 p-2 text-xl">
          <p className="text-center text-3xl font-bold">
            Case Study: Developing a Mobile App for Small Transport Companies
            <br /> <br />
          </p>
          <p>
            As a software developer, we understand the importance of efficiency
            and organization for small businesses. That's why we were excited to
            work on a project for a client who wanted to develop a mobile app
            for small transport companies to track their cargo and roads.
            <br /> <br />
          </p>
          <Image
            className="w-2/5 m-auto h-120 object-scale-down"
            src="/images/portfolio/convey.png"
            width={800}
            height={800}
            alt="Mitre App"
          />
          <p className="mt-5">
            The app was designed to be user-friendly and intuitive, with
            features that allowed transport companies to easily input and track
            the details of their cargo and routes. This included the ability to
            input information such as the type of cargo being transported, the
            destination, and the estimated delivery time.
          </p>
          <p>
            {" "}
            The app also provided real-time tracking, allowing companies to
            monitor the location and status of their cargo as it moved along its
            route. This was especially useful for companies that needed to make
            quick adjustments to their schedules or routes in response to
            unexpected delays or changes.
          </p>{" "}
          <p>
            {" "}
            The development of the mobile app was a success, and the client was
            extremely satisfied with the final product. The app has already
            helped small transport companies to streamline their operations and
            improve their efficiency, leading to increased productivity and
            profitability. We are confident that this mobile app will continue
            to be a valuable tool for small transport companies and are excited
            to see it being used to help businesses grow and succeed.
          </p>{" "}
        </div>
      </div>
    </Layout>
  );
}
