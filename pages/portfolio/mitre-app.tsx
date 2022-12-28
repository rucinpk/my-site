import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";

export default function About() {
  return (
    <Layout
      title="Mitre Att&ck App | CodiCrypt"
      currentRoute={Paths.PORTFOLIO_MITRE}
    >
      <div className="w-3/5 m-auto my-10">
        <h2 className="text-3xl font-bold text-center leading-tight text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-lg">
          {" "}
          &ldquo; Web application has been developed proffesionally including
          clean UI and security requirements. Tomasz Chlebowski - CEO ComCERT
          S.A.&rdquo;
        </h2>
        <div className="m-auto my-8 p-2 text-xl">
          <p>
            The app helps cybersecurity analysts to quickly and easily identify
            potential threats and vulnerabilities in their systems, allowing
            them to take proactive measures to protect against cyber attacks.{" "}
            <br /> <br />
          </p>
          <Image
            className=" w-full h-120 object-scale-down ease-in-out duration-300 "
            src="/images/portfolio/mitre.png"
            width={800}
            height={800}
            alt="Mitre App"
          />
          <p className="pt-3">
            The app's risk calculation feature allows analysts to prioritize
            their efforts and allocate resources effectively, ensuring that the
            most critical threats are addressed first.
          </p>
          <p>
            The app is user-friendly and intuitive, making it easy for analysts
            to input their IT environments and receive actionable
            recommendations. The app frees up time and resources for
            cybersecurity analysts to focus on more complex and strategic tasks.{" "}
            <br /> <br />
          </p>
          <p>
            {" "}
            The app has already been successfully implemented and received
            positive feedback from a client, demonstrating its effectiveness and
            reliability. The app is a valuable tool for any cybersecurity
            analyst looking to stay ahead of potential threats and ensure the
            security of the client's systems.{" "}
          </p>{" "}
          <p>
            {" "}
            Its time-saving and resource-saving features make it an attractive
            solution for professionals looking to streamline their workflows.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center leading-tight text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-lg">
          {" "}
          &ldquo;I hereby give references to Mr. Patryk Ruciński - CodiCrypt -
          who implemented the project fully and independently and I confirm his
          great skills in web application development in Python and React.js.
          Tomasz Chlebowski - CEO ComCERT S.A.&rdquo;
        </h2>
      </div>
    </Layout>
  );
}
