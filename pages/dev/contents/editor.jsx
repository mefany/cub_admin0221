import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import { H3 } from "components/Typography";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import ReactQuill from "components/ReactQuill";
import "react-quill/dist/quill.snow.css";

SiteSettings.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function SiteSettings() {
  const [value, setValue] = useState("");
  return (
    <Box py={4}>
      <H3 mb={2}>Quill Editor</H3>
      <Card
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <ReactQuill />
      </Card>
    </Box>
  );
}
