import Layout from "../components/Layout/Layout";
import { Paths } from "../constants/paths";
import ContactView from "../views/Contact/ContactView";

export default function Contact() {
  return (
    <Layout title="Contact | CodiCrypt" currentRoute={Paths.CONTACT}>
      <ContactView />
    </Layout>
  );
}
