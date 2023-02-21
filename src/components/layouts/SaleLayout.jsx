import { Fragment } from "react";
import { Divider } from "@mui/material";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import Topbar from "components/topbar/Topbar";
import { MobileNavigationBar } from "components/mobile-navigation";
/**
 *  Used:
 *  1. sale-page-1 page
 *  2. sale-page-2 page
 */
// =============================================================

// =============================================================
const SaleLayout = ({ children, type = "one", categoryNav }) => {
  return (
    <Fragment>
      <Topbar />
      <Header />

      {type === "one" && (
        <Fragment>
          <Navbar />
          {children}
        </Fragment>
      )}

      {type === "two" && (
        <Fragment>
          <Divider />
          {categoryNav}
          <div className="section-after-sticky">{children}</div>
        </Fragment>
      )}

      <Footer />
      <MobileNavigationBar />
    </Fragment>
  );
};

export default SaleLayout;
