import Layout from "../components/Layout/Layout";
import { Paths } from "../constants/paths";
import PortfolioView from "../views/Portfolio/PortfolioView";

export default function Portfolio() {
  return (
    <Layout title="Portfolio | CodiCrypt" currentRoute={Paths.PORTFOLIO}>
      <PortfolioView />
    </Layout>
  );
}
