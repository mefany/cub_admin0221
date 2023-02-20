import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { Box, Card } from "@mui/material";
import { H3, H4 } from "components/Typography";

Layouts.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function Layouts() {
  return (
    <Box py={4}>
      <H3 mb={2}>Colorset</H3>
      <Card
        sx={{
          p: 3,
        }}
      >
        {/* YAFITRIDER Color */}
        <H4 mb={2}>YAFITRIDER COLOR</H4>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "primary.main",
          }}
        >
          CUB <br />
          PRIMARY
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "secondary.main",
          }}
        >
          CUB <br />
          POINT
        </Box>

        <H4 mb={2}>PRIMARY COLOR</H4>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "primary.light",
          }}
        >
          PRIMARY <br />
          LIGHT
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "primary.main",
          }}
        >
          PRIMARY <br />
          MAIN
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "primary.dark",
          }}
        >
          PRIMARY <br />
          DARK
        </Box>

        <H4 mb={2}>POINT COLOR</H4>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "secondary.light",
          }}
        >
          POINT <br />
          LIGHT
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "secondary.main",
          }}
        >
          POINT <br />
          MAIN
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            color: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
            backgroundColor: "secondary.dark",
          }}
        >
          POINT <br />
          DARK
        </Box>

        {/* Grey Color */}
        <H4 mb={2}>Grey Color (Text & Border)</H4>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.100",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          100
          <br />
          (Line)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.200",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          200
          <br />
          (Border)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.300",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          300
          <br />
          (Border)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.400",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          400
          <br />
          (LowText)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.500",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          500
          <br />
          (LowText)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.600",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          600
          <br />
          (Paragraph)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.700",
            marginBottom: "15px",
            marginRight: "15px",
          }}
        >
          700
          <br />
          (Paragraph)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            backgroundColor: "grey.800",
            marginBottom: "15px",
            marginRight: "15px",
            color: "grey.300",
          }}
        >
          800
          <br />
          (MainText)
        </Box>
      </Card>
    </Box>
  );
}
