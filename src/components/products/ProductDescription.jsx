import { Box } from "@mui/material";
import { H3 } from "components/Typography"; // ======================================================

// ======================================================
const ProductDescription = ({ data }) => {
  const { description, trade_description } = data;
  return (
    <Box>
      <H3 mb={2}>책소개</H3>
      <Box mb={4} style={{whiteSpace: 'pre-wrap'}}>
        {description}
      </Box>
      <H3 mb={2}>제품상세</H3>
      <Box style={{whiteSpace: 'pre-wrap'}}>
        {trade_description}
      </Box>
    </Box>
  );
};

export default ProductDescription;
