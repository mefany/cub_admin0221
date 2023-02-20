import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, styled, Tab } from "@mui/material";
import { H3, H4 } from "components/Typography";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import RequireFields from "components-usage/form-examples/RequireFields";
import FullsizedInputFields from "components-usage/form-examples/FullsizedInputFields";
import HalfInputfield from "components-usage/form-examples/HalfInputfield";
import InputTypes from "components-usage/form-examples/InputTypes";

const StyledTabPanel = styled(TabPanel)(() => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
}));
const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.secondary.main,
  },
  "& .MuiTabs-indicator": {
    background: theme.palette.secondary.main,
  },
})); // =============================================================================

SiteSettings.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function SiteSettings() {
  const [selectTab, setSelectTab] = useState("size");
  return (
    <Box py={4}>
      <H3 mb={2}>Forms</H3>
      <Card
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <TabContext value={selectTab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "grey.300",
            }}
          >
            <StyledTabList
              onChange={(_, value) => setSelectTab(value)}
              variant="scrollable"
            >
              <Tab label="Size" value="size" disableRipple />
              <Tab label="Type" value="type" disableRipple />
              <Tab label="Require" value="require" disableRipple />
            </StyledTabList>
          </Box>

          <StyledTabPanel value="size">
            <FullsizedInputFields />
            <HalfInputfield />
          </StyledTabPanel>

          <StyledTabPanel value="type">
            <InputTypes />
          </StyledTabPanel>

          <StyledTabPanel value="require">
            <H4 mb={2}>Require Fieldset</H4>
            <RequireFields />
          </StyledTabPanel>
        </TabContext>
      </Card>
    </Box>
  );
}
