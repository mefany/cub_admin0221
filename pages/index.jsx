import { Box, Grid } from "@mui/material";
import Card1 from "components-usage/dashboard/Card1";
import WishCard from "components-usage/dashboard/WishCard";
import Analytics from "components-usage/dashboard/Analytics";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import api from "__server__/__api__/admin"; // =============================================================================

VendorDashboard.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function VendorDashboard(props) {
  const { cardList } = props;
  return (
    <Box py={4}>
      <Grid container spacing={3}>
        {/* WISHING CARD */}
        <Grid item md={6} xs={12}>
          <WishCard />
        </Grid>

        {/* ALL TRACKING CARDS */}
        <Grid container item md={6} xs={12} spacing={3}>
          {cardList.map((item) => (
            <Grid item md={6} sm={6} xs={12} key={item.id}>
              <Card1
                title={item.title}
                color={item.color}
                amount1={item.amount1}
                amount2={item.amount2}
                percentage={item.percentage}
                status={item.status === "down" ? "down" : "up"}
              />
            </Grid>
          ))}
        </Grid>

        {/* ANALYTICS AREA */}
        <Grid item xs={12}>
          <Analytics />
        </Grid>
      </Grid>
    </Box>
  );
}
export const getStaticProps = async () => {
  const cardList = await api.getAllCard();
  return {
    props: {
      cardList,
    },
  };
};
