import Layout from "../components/Layout/Layout";
import { Paths } from "../constants/paths";
import AboutView from "../views/About/AboutView";

export default function About() {
  return (
    <Layout title="About | CodiCrypt" currentRoute={Paths.ABOUT}>
      <AboutView />
    </Layout>
  );
}
