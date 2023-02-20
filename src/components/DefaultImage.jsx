import { compose, display, spacing, styled } from "@mui/system";
const DefaultImage = styled("img")(compose(spacing, display));
DefaultImage.defaultProps = {
  display: "block",
};
export default DefaultImage;
