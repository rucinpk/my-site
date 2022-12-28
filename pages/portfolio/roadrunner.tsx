import Layout from "../../components/Layout/Layout";
import { Paths } from "../../constants/paths";
import Image from "next/image";

export default function About() {
  return (
    <Layout
      title="Roadrunner | CodiCrypt"
      currentRoute={Paths.PORTFOLIO_ROADRUNNER}
    >
      <div className="w-3/5 m-auto my-10">
        <div className="m-auto p-2 text-xl">
          <p className="my-5">
            Online shopping marketplace that allows to shop from local retailers
            through our mobile app and have items delivered directly to your
            door.
          </p>
          <Image
            className="w-2/5 m-auto"
            src="/images/portfolio/roadrunner.png"
            width={600}
            height={600}
            alt="Roadrunner App"
          />
        </div>
      </div>
    </Layout>
  );
}
