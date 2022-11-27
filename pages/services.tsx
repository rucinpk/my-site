import Layout from "../components/Layout/Layout";
import { Paths } from "../constants/paths";
import ServicesView from "../views/Services/ServicesView";

export default function Services() {
  return (
    <Layout title="Services | CodiCrypt" currentRoute={Paths.SERVICES}>
      <ServicesView />
    </Layout>
  );
}
