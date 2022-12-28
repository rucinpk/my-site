import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";

export default function About() {
  return (
    <Layout
      title="Forester's Mobile App | CodiCrypt"
      currentRoute={Paths.PORTFOLIO_FOREST}
    >
      <div className="w-3/5 m-auto my-10">
        <h2 className="text-3xl font-bold text-center leading-tight text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-lg">
          {" "}
          &ldquo; I hereby give references to Mr. Patryk Ruciński who
          implemented the project fully and independently. Dominik Curyło -
          Asteroid sp. z o.o. &rdquo;
        </h2>
        <div className="m-auto my-8 p-2 text-xl">
          <p className="text-center text-3xl font-bold">
            Case Study: Developing a Mobile App for Foresters to Manage Their
            Seeds and Trees Stock
          </p>
          <p>
            As a software developer, we are always looking for ways to use
            technology to make a positive impact in the world. That's why we
            were excited to work on a project for a client who wanted to develop
            a mobile app for foresters to manage their seeds and trees stock.
            The app was designed to be user-friendly and intuitive, with
            features that allowed foresters to easily input and track the
            details of their seed and tree stock.
            <br /> <br />
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
            This included the ability to input information such as the type and
            quantity of seeds and trees, as well as their location and status.
            The app also provided alerts and notifications to help foresters
            stay up-to-date on the status of their stock.
          </p>
          <p>
            {" "}
            This was especially useful for ensuring that seeds and trees were
            being properly cared for and that there was a sufficient supply to
            meet demand. The development of the mobile app was a success, and
            the client was extremely satisfied with the final product.
          </p>{" "}
          <p>
            {" "}
            The app has already helped foresters to streamline their operations
            and manage their stock more efficiently, leading to increased
            productivity and profitability. We are confident that this mobile
            app will continue to be a valuable tool for foresters and are
            excited to see it being used to help them succeed in their work.{" "}
          </p>{" "}
        </div>
      </div>
    </Layout>
  );
}
