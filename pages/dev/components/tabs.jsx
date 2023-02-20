import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, styled, Tab } from "@mui/material";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { H1, H3 } from "components/Typography";

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

Tabs.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function Tabs() {
  const [selectTab, setSelectTab] = useState("TabContents1");
  return (
    <Box py={4}>
      <H3 mb={2}>Tabs</H3>
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
              <Tab label="Tab Name1" value="TabContents1" disableRipple />
              <Tab label="Tab Name2" value="TabContents2" disableRipple />
              <Tab label="Tab Name3" value="TabContents3" disableRipple />
            </StyledTabList>
          </Box>

          <StyledTabPanel value="TabContents1">
            <H1>TabContents1</H1>
          </StyledTabPanel>

          <StyledTabPanel value="TabContents2">
            <H1>TabContents2</H1>
          </StyledTabPanel>

          <StyledTabPanel value="TabContents3">
            <H1>TabContents3</H1>
          </StyledTabPanel>
        </TabContext>
      </Card>
    </Box>
  );
}
