import VendorDashboardLayout from "components/layouts/admin-dashboard";

import { Box, Card } from "@mui/material";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";
import { H3, H4, Paragraph, Span } from "components/Typography";

Accordions.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function Accordions() {
  return (
    <Box py={4}>
      <H3 mb={2}>Accordions</H3>
      <Card
        sx={{
          px: 3,
          py: 2,
        }}
      >
        {/* CATEGORY VARIANT FILTER */}
        <H4 mb={1.25}>Sample</H4>

        {accrodionList.map((item) =>
          item.subDesc ? (
            <Accordion key={item.title} expanded>
              <AccordionHeader px={0} py={0.75} color="grey.600">
                <Span
                  sx={{
                    cursor: "pointer",
                    mr: "9px",
                  }}
                >
                  {item.title}
                </Span>
              </AccordionHeader>

              {item.subDesc.map((name) => (
                <Paragraph
                  pl="22px"
                  py={0.75}
                  key={name}
                  fontSize="14px"
                  color="grey.600"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {name}
                </Paragraph>
              ))}
            </Accordion>
          ) : (
            <Paragraph
              py={0.75}
              fontSize="14px"
              color="grey.600"
              key={item.title}
              className="cursor-pointer"
            >
              {item.title}
            </Paragraph>
          )
        )}
      </Card>
    </Box>
  );
}

const accrodionList = [
  {
    title: "Accordion Title1",
    subDesc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen books. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
  },
  {
    title: "Accordion Title2",
    subDesc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Accordion Title3",
    subDesc: ["short text", "short text", "short text"],
  },
  {
    title: "Has no subDesc",
  },
];
