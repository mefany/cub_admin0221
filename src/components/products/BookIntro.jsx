import Link from "next/link";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H6 } from "components/Typography";
import BookIntroSeller from "components/products/BookIntroSeller";
import BookIntroBuyer from "components/products/BookIntroBuyer";
import { FlexBox } from "../flex-box";

//================================================================
const userType = ''
// ================================================================
const BookIntro = ({ data, bookingUser }) => {
  const {
    trade_uid,
    sell_price,
    title,
    sell_state,
    image,
    shop_name,
    user_uid,
    nickname,
  } = data;

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      userType = 'guest'
    } else {
      if (user_uid == sessionStorage.getItem("user_uid")) {
        userType = 'seller'
      } else {
        userType = 'buyer'
      }
    }
  }, []);

  return (
    <Box width='100%'>
      <Grid container spacing={3} justifyContent='space-around'>
        <Grid item md={6} xs={12} alignItems='center'>
          <FlexBox justifyContent='center' mb={6}>
            <LazyImage
              alt={title}
              width={300}
              height={300}
              loading='eager'
              objectFit='contain'
              src={image}
            />
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems='center'>
          <H1 mb={2}>{title}</H1>

          <FlexBox alignItems='center' mb={2}>
            <Box>판매매장:</Box>
            <H6 ml={1}>{shop_name}</H6>
          </FlexBox>

          <FlexBox alignItems='center' mb={2}>
            <Box lineHeight='1'>Rated:</Box>
            <Box mx={1} lineHeight='1'>
              <BazaarRating
                color='warn'
                fontSize='1.25rem'
                value={4}
                readOnly
              />
            </Box>
            <H6 lineHeight='1'>(50)</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color='primary.main' mb={0.5} lineHeight='1'>
              {sell_price}원
            </H2>
            <Box color='inherit'>{sell_state}</Box>
          </Box>

          {(() => {
            switch (userType) {
              case "seller":
                return <BookIntroSeller bookingUser={bookingUser}></BookIntroSeller>;
              case "buyer":
                return <BookIntroBuyer bookingUser={bookingUser} trade_uid={trade_uid}></BookIntroBuyer>
              case "guest":
                return <p>로그인 후 이용 가능합니다.</p>;
              default:
                return null;
            }
          })()}

          <FlexBox alignItems='center' mb={2}>
            <Box>판매자:</Box>
            <Link href='/shops/fdfdsa'>
              <a>
                <H6 ml={1}>{nickname}</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookIntro;
