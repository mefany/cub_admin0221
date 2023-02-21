import { Box, Stack } from "@mui/material";
import SEO from "components/SEO";
import Setting from "components/Setting";
import ShopLayout2 from "components/layouts/ShopLayout2";
import PageFooter from "components/page-footer/PageFooter";
import { MobileNavigationBar2 } from "components/mobile-navigation";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import HealthBeautySidenav from "components/page-sidenav/HealthBeautySideNav";
import Section1 from "pages-sections/health-beauty/Section1";
import Section2 from "pages-sections/health-beauty/Section2";
import Section3 from "pages-sections/health-beauty/Section3";
import Section4 from "pages-sections/health-beauty/Section4";
import Section5 from "pages-sections/health-beauty/Section5";
import api from "utils/__api__/healthbeauty-shop";

// ===============================================
const HealthAndBeauty = (props) => {
  return (
    <ShopLayout2>
      <SEO title="Health & beauty shop template" />
      {/* TOP HERO CAROUSEL AREA */}
      <Box id="healthBeautySection1">
        <Section1 carouselData={props.mainCarouselData} />
      </Box>

      <SidenavContainer
        navFixedComponentID="healthBeautySection1"
        SideNav={() => <HealthBeautySidenav navList={props.navigationList} />}
      >
        <Stack spacing={6}>
          {/* BANNER AREA */}
          <Section2 />

          {/* TOP NEW PRODUCTS AREA */}
          <Section3 products={props.topNewProducts} />

          {/* ALL PRODUCTS AREA */}
          <Section4 products={props.allProducts} />

          {/* SERVICE LIST AREA */}
          <Section5 services={props.serviceList} />

          {/* FOOTER AREA */}
          <PageFooter
            id="footer"
            sx={{
              borderRadius: "8px",
              backgroundColor: "primary.800",
            }}
          />
        </Stack>
      </SidenavContainer>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar2>
        <HealthBeautySidenav navList={props.navigationList} />
      </MobileNavigationBar2>
    </ShopLayout2>
  );
};

export const getStaticProps = async () => {
  const serviceList = await api.getServices();
  const allProducts = await api.getProducts();
  const navigationList = await api.getNavigation();
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarousel();
  return {
    props: {
      serviceList,
      allProducts,
      topNewProducts,
      navigationList,
      mainCarouselData,
    },
  };
};
export default HealthAndBeauty;
