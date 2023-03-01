import Link from "next/link";

import { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../flex-box";
import axios from "axios";

//================================================================

const bookingInfo = {}
const selectBuyer = ''
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
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [sendAccount, setSendAccount] = useState(null);

  let user

  useEffect(() => {
    // if (sessionStorage.getItem("token") === null) {
    //   setIsGuest(true);
    // } else {
    //   if (user_uid == sessionStorage.getItem("user_uid")) {
    //     setIsSeller(true);
    //   } else {
    //     setIsBuyer(true);
    //   }
    // }
    if (sessionStorage.getItem("token") === null) {
      user = 'guest'
    } else {
      if (user_uid == sessionStorage.getItem("user_uid")) {
        user = 'seller'
      } else {
        user = 'buyer'
      }
    }
  }, []);

  useEffect(() => {
    if (bookingUser !== null && isBuyer) {
      bookingUser.forEach(el => {
        if (el.user_uid == sessionStorage.getItem("user_uid")) {
          bookingInfo = {
            booking_uid: el.booking_uid,
            nickname: el.nickname,
            state: el.state,
            user_uid: el.user_uid
          }
        }
      })

      if (bookingInfo !== null) {
        setIsBooking(true)
      }
    }

    if (bookingUser !== null && isSeller) {
      bookingUser.forEach(el => {
        if (el.state === '계좌전달') {
          setSendAccount(el)
        }
      })
    }

  }, [bookingUser]);

  const postBooking = async () => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking`,
        {
          user_uid: sessionStorage.getItem("user_uid"),
          trade_uid: trade_uid
        }
      )
      .then((response) => {
        if (response.status === 200) {
          bookingInfo = {
            user_uid: sessionStorage.getItem("user_uid"),
            trade_uid: trade_uid,
            booking_uid: response.data
          }
          console.log(bookingInfo)
          setIsBooking(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBooking = async () => {
    await axios
      .delete(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking?booking_uid=${bookingInfo.booking_uid}`,
      )
      .then((response) => {
        if (response.status === 200) {
          setIsBooking(false)
          bookingInfo = {}
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //판매자가 구매자 확정 후 계좌 전달
  const putAccount = async () => {
    await axios
      .put(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking`,
        {
          booking_uid: selectBuyer,
          state: '계좌전달'
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = e => {
    bookingUser.forEach(el => {
      if (e.target.value === el.nickname) {
        selectBuyer = el.booking_uid
      }
    })
  };

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

          {isSeller && sendAccount && (
            <>
              <Box lineHeight='1'>{sendAccount.nickname}님과 거래중입니다.</Box>
              <FlexBox alignItems='center' mb={2}>
                <Button color='primary' variant='contained' onClick={putAccount}>
                  거래취소
                </Button>
                <Button color='primary' variant='contained' onClick={putAccount}>
                  입금확인
                </Button>
              </FlexBox>
            </>
          )}

          {isSeller && bookingUser.length > 0 && !sendAccount && (
            <FlexBox alignItems='center' mb={2}>
              <Box lineHeight='1'>구매자 선택:</Box>
              <Box mx={1} lineHeight='1'>
                <TextField
                  select
                  size='small'
                  variant='outlined'
                  defaultValue={bookingUser[0].nickname}
                  onChange={handleOnChange}
                >
                  {bookingUser.map(user => (
                    <MenuItem value={user.nickname} key={user.booking_uid}>
                      {user.nickname}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Button color='primary' variant='contained' onClick={putAccount}>
                계좌전달하기
              </Button>
            </FlexBox>
          )}



          {isBuyer && !isBooking && (
            <Button
              color='primary'
              variant='contained'
              onClick={postBooking}
            >
              구매예약
            </Button>
          )}

          {isBuyer && isBooking && (
            <Button
              color='primary'
              variant='contained'
              onClick={deleteBooking}
            >
              예약취소
            </Button>
          )}

          {isGuest && <p>로그인 후 이용할 수 있습니다.</p>}

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

const sortOptions = [
  {
    label: "낮은가격순",
    value: "asc",
  },
  {
    label: "높은가격순",
    value: "desc",
  },
  {
    label: "최신순",
    value: "latest",
  },
];

export default BookIntro;
