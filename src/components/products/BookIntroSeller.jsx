import { useState, useEffect } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { FlexBox } from "../flex-box";
import axios from "axios";

//================================================================
const selectBuyer = ''
// ================================================================
const BookIntroSeller = ({ bookingUser }) => {
  const [tradeState, setTradeState] = useState(null);
  const [tradeUser, setTradeUser] = useState(null)

  useEffect(() => {
    if (bookingUser !== null) {
      setTradeState('예약신청')
      for (const el of bookingUser) {
        if (el.state !== '예약신청') {
          setTradeState(el.state)
          setTradeUser(el)
          break;
        }
      }
    }
  }, [bookingUser]);

  const handleOnChange = e => {
    console.log(e.target.value)
    bookingUser.forEach(el => {
      if (e.target.value === el.nickname) {
        selectBuyer = el
      }
    })
    console.log('selectBuyer', selectBuyer)
  };

  const handleTradeAccount = () => {
    if (selectBuyer === '') {
      selectBuyer = bookingUser[0]
    }
    tradeAccount()
  }

  //판매자가 구매자 확정 후 계좌 전달
  const tradeAccount = async () => {
    await axios
      .put(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking`,
        {
          booking_uid: selectBuyer.booking_uid,
          state: '계좌전달'
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setTradeState('계좌전달')
          setTradeUser(selectBuyer)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //거래 취소
  const cancleAccount = async () => {
    await axios
      .put(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking`,
        {
          booking_uid: tradeUser.booking_uid,
          state: '예약신청'
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setTradeState('예약신청')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //입금 확인
  const confirmAccount = async () => {
    await axios
      .put(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking`,
        {
          booking_uid: tradeUser.booking_uid,
          state: '입금확인'
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setTradeState('입금확인')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (tradeState) {
    case "예약신청":
      return (
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
          <Button color='primary' variant='contained' onClick={handleTradeAccount}>
            계좌전달하기
          </Button>
        </FlexBox>
      )

    case "계좌전달":
      return (
        <>
          {tradeUser && <Box lineHeight='1'>{tradeUser.nickname}님과 거래중입니다.</Box>}
          <FlexBox alignItems='center' mb={2}>
            <Button color='primary' variant='contained' onClick={cancleAccount}>
              거래취소
            </Button>
            <Button color='primary' variant='contained' onClick={confirmAccount}>
              입금확인
            </Button>
          </FlexBox>
        </>
      )
    case "입금확인":
      return <p>입금 확인되었습니다.</p>;
    case "거래완료":
      return <p>거래 완료된 상품입니다.</p>;
    default:
      return <p>판매중인 상품입니다.</p>;
  }
};
export default BookIntroSeller;
