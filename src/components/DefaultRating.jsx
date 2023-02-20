import { Rating } from "@mui/material";
import { compose, spacing, styled, typography } from "@mui/system";
const DefaultRating = styled(Rating)(compose(spacing, typography));
DefaultRating.defaultProps = {
  fontSize: "1.25rem",
};
export default DefaultRating;
