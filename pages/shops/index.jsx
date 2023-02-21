import { Container, Grid, Pagination, Box, Card, MenuItem, TextField, } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H2, Paragraph } from "components/Typography";
import ShopCard1 from "components/shop/ShopCard1";
import { FlexBetween } from "components/flex-box";
import ShopLayout1 from "components/layouts/ShopLayout1";
import api from "utils/__api__/shop";
import axios from "axios";
import Link from "next/link";

// =============================================
const ShopList = ({ shops }) => {
  fetch(
    `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/shop`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

  const handleOnChange = (e) => {
    if (e.target.value !== 'latest') {
      // setQuery(title + '&price_order=' + e.target.value)
    } else {
      // setQuery(title + '&date_order=asc')
    }
    // getSearchBooks(query)
  }
  return (
    <ShopLayout1>
      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >

        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}
        >
          <H2>매장 리스트</H2>

          <FlexBox
            alignItems="center"
            columnGap={4}
            flexWrap="wrap"
            my="0.5rem"
          >
            <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
                정렬 기준:
              </Paragraph>

              <TextField
                select
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Short by"
                defaultValue={sortOptions[0].value}
                onChange={handleOnChange}
                sx={{
                  flex: "1 1 0",
                  minWidth: "250px",
                }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox>
          </FlexBox>
        </Card>

        {/* ALL SHOP LIST AREA */}
        <Grid container spacing={3}>
          {shops.map((item) => (
            <Grid item lg={4} sm={6} xs={12} key={item.shop_uid}>
              <ShopCard1
                name={item.shop_name}
                id={item.shop_uid}
                phone={item.phone1}
                address={item.address_full}
                // rating={item.rating || 5}
                coverPicture={item.shop_photo}
                profilePicture={item.shop_photo}
              />
            </Grid>
          ))}
        </Grid>

        {/* PAGINTAION AREA */}
        {/* <FlexBetween flexWrap="wrap" mt={4}>
          <Span color="grey.600">Showing 1-9 of 300 Shops</Span>
          <Pagination
            count={shops.length}
            variant="outlined"
            color="primary"
          />
        </FlexBetween> */}
      </Container>
    </ShopLayout1>
  );
};

export const getStaticProps = async () => {
  const res2 = await axios.get(
    "https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/shop"
  );
  const shops = await res2.data;

  return {
    props: {
      shops,
    },
  };
};

const sortOptions = [
  {
    label: "서초구, 강남구",
    value: "서초구, 강남구",
  },
  {
    label: "송파구, 강동구",
    value: "송파구, 강동구",
  },
  {
    label: "동대문구, 중랑구, 성동구, 광진구",
    value: "동대문구, 중랑구, 성동구, 광진구",
  },
  {
    label: "도봉구, 강북구, 성북구, 노원구",
    value: "도봉구, 강북구, 성북구, 노원구",
  },
  {
    label: "종로구, 중구, 용산구",
    value: "종로구, 중구, 용산구",
  },
  {
    label: "은평구, 마포구, 서대문구",
    value: "은평구, 마포구, 서대문구",
  },
  {
    label: "강서구, 양천구, 영등포구, 구로구",
    value: "강서구, 양천구, 영등포구, 구로구",
  },
  {
    label: "동작구, 관악구, 금천구",
    value: "동작구, 관악구, 금천구",
  },
];
export default ShopList;
