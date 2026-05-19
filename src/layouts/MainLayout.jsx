import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingDock from "../components/layout/FloatingDock";
import ScrollProgress from "../components/layout/ScrollProgress";

import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <FloatingDock />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;