import { Layout } from "antd";
import AppSider from "../AppSider/AppSider";
import AppContent from "../AppContent/AppContent";
import AppFooter from "../AppFooter/AppFooter";

const { Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSider />
      <Layout>
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
