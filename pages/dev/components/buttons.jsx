import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { Box, Card } from "@mui/material";
import { H3, H4 } from "components/Typography";
import { BoxButton, OutlinedButton } from "components/DefaultButton";
import { Delete } from "@mui/icons-material";
Layouts.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function Layouts() {
  return (
    <Box py={4}>
      <H3 mb={2}>Buttons</H3>
      <Card
        sx={{
          p: 3,
        }}
      >
        <H4 mb={2}>Box Buttons</H4>
        <Box
          sx={{
            flexGrow: 1,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
            marginRight: "15px",
            "& button": { m: 1 },
          }}
        >
          <BoxButton size="large">Contained Large</BoxButton>
          <BoxButton size="medium">Contained Medium</BoxButton>
          <BoxButton size="small">Contained Small</BoxButton>
        </Box>

        <H4 mb={2}>Outlined Buttons</H4>
        <Box
          sx={{
            flexGrow: 1,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
            marginRight: "15px",
            "& button": { m: 1 },
          }}
        >
          <OutlinedButton size="large">Outlined Large</OutlinedButton>
          <OutlinedButton size="medium">Outlined Medium</OutlinedButton>
          <OutlinedButton size="small">Outlined Small</OutlinedButton>
        </Box>

        <H4 mb={2}>With Icon Buttons</H4>
        <Box
          sx={{
            flexGrow: 1,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
            marginRight: "15px",
            "& button": { m: 1 },
          }}
        >
          <BoxButton size="large" startIcon={<Delete />}>
            Outlined Large
          </BoxButton>
          <OutlinedButton size="large" startIcon={<Delete />}>
            Outlined Medium
          </OutlinedButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
            marginRight: "15px",
            "& button": { m: 1 },
          }}
        >
          <BoxButton size="medium" startIcon={<Delete />}>
            Outlined Large
          </BoxButton>
          <OutlinedButton size="medium" startIcon={<Delete />}>
            Outlined Medium
          </OutlinedButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
            marginRight: "15px",
            "& button": { m: 1 },
          }}
        >
          <BoxButton size="small" endIcon={<Delete />}>
            Outlined Large
          </BoxButton>
          <OutlinedButton size="small" endIcon={<Delete />}>
            Outlined Medium
          </OutlinedButton>
        </Box>
      </Card>
    </Box>
  );
}
