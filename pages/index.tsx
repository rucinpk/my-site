import Layout from "../components/Layout/Layout";
import { Paths } from "../constants/paths";
import { HomeView } from "../views/Home";

export default function Home() {
  return (
    <Layout title="Home | CodiCrypt" currentRoute={Paths.MAIN}>
      <HomeView />
    </Layout>
  );
}
