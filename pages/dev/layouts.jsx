import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { Box, Card, Grid } from "@mui/material";
import { FlexBox, FlexBetween, FlexRowCenter } from "components/flex-box";
import { H3, H4 } from "components/Typography";

Layouts.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function Layouts() {
  return (
    <Box py={4}>
      <H3 mb={2}>Layouts</H3>
      <Card
        sx={{
          p: 3,
        }}
      >
        {/* GRID */}
        <H4 mb={2}>Grid</H4>
        <Grid container marginBottom="15px">
          {/* WISHING CARD */}
          <Grid
            item
            md={12}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 12
          </Grid>
        </Grid>
        <Grid container marginBottom="15px">
          <Grid
            item
            md={8}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 8
          </Grid>
          <Grid
            item
            md={4}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 4
          </Grid>
        </Grid>

        <Grid container marginBottom="40px">
          <Grid
            item
            md={3}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 3
          </Grid>
          <Grid
            item
            md={3}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 3
          </Grid>
          <Grid
            item
            md={3}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 3
          </Grid>
          <Grid
            item
            md={2}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 2
          </Grid>
          <Grid
            item
            md={1}
            padding="10px"
            border="1px solid"
            borderRadius="8px"
            borderColor="grey.300"
            fontWeight="600"
          >
            Grid 1
          </Grid>
        </Grid>

        {/* Flex */}
        <H4 mb={2}>Flex</H4>
        <FlexBox mb={2} gap={3} alignItems="center">
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              border: "1px solid",
              borderRadius: "8px",
              padding: "10px 16px",
              borderColor: "grey.300",
            }}
          >
            FlexBox
          </Box>
        </FlexBox>
        <FlexBetween mb={2} gap={3} alignItems="center">
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              border: "1px solid",
              borderRadius: "8px",
              padding: "10px 16px",
              borderColor: "grey.300",
            }}
          >
            FlexBetween
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              border: "1px solid",
              borderRadius: "8px",
              padding: "10px 16px",
              borderColor: "grey.300",
            }}
          >
            FlexBetween
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              border: "1px solid",
              borderRadius: "8px",
              padding: "10px 16px",
              borderColor: "grey.300",
            }}
          >
            FlexBetween
          </Box>
        </FlexBetween>
        <FlexRowCenter mb={4}>
          <Box
            sx={{
              width: "80%",
              fontWeight: 600,
              border: "1px solid",
              borderRadius: "8px",
              padding: "10px 16px",
              borderColor: "grey.300",
            }}
          >
            FlexRowCenter
          </Box>
        </FlexRowCenter>

        {/* Box */}
        <H4 mb={2}>Box</H4>
        <Box
          sx={{
            width: "100%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (100%, Custom Size)
        </Box>
        <Box
          sx={{
            width: "80%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (80%, Custom Size)
        </Box>
        <Box
          sx={{
            width: "60%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (60%, Custom Size)
        </Box>
        <Box
          sx={{
            width: "40%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (40%, Custom Size)
        </Box>
        <Box
          sx={{
            width: "20%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "40px",
          }}
        >
          Box (20%, Custom Size)
        </Box>

        {/* Box Inline*/}
        <H4 mb={2}>Box Inline</H4>
        <Box
          sx={{
            display: "inline-block",
            width: "20%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (20%, Inline-block)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "20%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (20%, Inline-block)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "20%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (20%, Inline-block)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "20%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (20%, Inline-block)
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "20%",
            fontWeight: 600,
            border: "1px solid",
            borderRadius: "8px",
            padding: "10px 16px",
            borderColor: "grey.300",
            marginBottom: "15px",
          }}
        >
          Box (20%, Inline-block)
        </Box>
      </Card>
    </Box>
  );
}
