import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { Box, Card } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H3 } from "components/Typography";

const typolist = [
  {
    id: 1,
    title: `<H1>H1 Heading 야핏라이더 어드민 1234567890</H1>`,
  },
  {
    id: 2,
    title: `<H2>H2 Heading 야핏라이더 어드민 1234567890</H2>`,
  },
  {
    id: 3,
    title: `<H3>H3 Heading 야핏라이더 어드민 1234567890</H3>`,
  },
  {
    id: 4,
    title: `<H4>H4 Heading 야핏라이더 어드민 1234567890</H4>`,
  },
  {
    id: 5,
    title: `<H5>H5 Heading 야핏라이더 어드민 1234567890</H5>`,
  },
  {
    id: 6,
    title: `<Paragraph>Paragraph Heading 야핏라이더 어드민 1234567890</Paragraph>`,
  },
  {
    id: 7,
    title: `<Span>Span Heading 야핏라이더 어드민 1234567890</Span>`,
  },
  {
    id: 8,
    title: `<Small>Small Heading 야핏라이더 어드민 1234567890</Small>`,
  },
];

Typography.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function Typography() {
  return (
    <Box py={4}>
      <H3 mb={2}>Typography</H3>
      <Card
        sx={{
          p: 3,
        }}
      >
        {typolist.map((typo) => (
          <FlexBox mb={2} gap={3} key={typo.id} alignItems="center">
            <Box
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                border: "1px solid",
                borderRadius: "8px",
                padding: "10px 16px",
                borderColor: "grey.300",
              }}
              dangerouslySetInnerHTML={{ __html: typo.title }}
            ></Box>
          </FlexBox>
        ))}
      </Card>
    </Box>
  );
}
