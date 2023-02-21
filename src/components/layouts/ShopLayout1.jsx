import { Fragment, useCallback, useState } from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Sticky from "components/sticky/Sticky";
import Navbar from "components/navbar/Navbar";
import { MobileNavigationBar } from "components/mobile-navigation";
/**
 *  Used in:
 *  1. market-1, matket-2, gadget-shop,
 *     fashion-shop, fashion-shop-2, fashion-shop-3, furniture-shop, grocery3, gift-shop
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 *  6. checkoutNavLayout and CustomerDashboadLayout component
 */
// ===================================================

// ===================================================
const ShopLayout1 = ({ children, showNavbar = true }) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <Fragment>
      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} />
      </Sticky>

      <div className="section-after-sticky">
        {/* NAVIGATION BAR */}
        {/* {showNavbar && <Navbar elevation={0} border={1} />} */}

        {/* BODY CONTENT */}
        {children}
      </div>

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default ShopLayout1;
