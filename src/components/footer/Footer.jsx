import Link from "next/link";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram"; // styled component

const StyledLink = styled("a")(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const Footer = () => {
  return (
    <footer>
      <Box bgcolor='#222935' position='absolute' width='100%' height='200px'>
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Grid item lg={12} md={12} sm={12} xs={12} textAlign='center'>
            {/* <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Contact Us
                </Box> */}
            <Box py={0.6} color='grey.500'>
              서울시 강동구 풍성로 1234 컵컵 오피스
            </Box>
            <Box py={0.6} color='grey.500'>
              Email: uilib.help@gmail.com | 010-0000-0000
            </Box>
            <Box py={0.6} mb={2} color='grey.500'>
              사업자 등록번호: 1234-1234-1234
            </Box>

            {/* <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon fontSize="inherit" />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox> */}
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];
const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/UILibOfficial",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/uilibofficial",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  {
    icon: Google,
    url: "/",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/uilibofficial/",
  },
];
export default Footer;
