import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";

// ================================================================
const BookIntroBuyer = ({ bookingUser, trade_uid }) => {
  const [bookingState, setBookingState] = useState(null);
  const [tradeUser, setTradeUser] = useState(null)

  useEffect(() => {
    const my_uid = sessionStorage.getItem("user_uid")
    if (bookingUser === null) {
      setBookingState('예약신청')
    } else {
      for (const el of bookingUser) {
        if (el.user_uid == my_uid) {
          setBookingState(el.state)
          setTradeUser(el)
          break;
        }
        setBookingState('예약전')
      }
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
          setBookingState('예약신청')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBooking = async () => {
    await axios
      .delete(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/booking?booking_uid=${tradeUser.booking_uid}`,
      )
      .then((response) => {
        if (response.status === 200) {
          setBookingState('예약신청')
          setTradeUser(null)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (bookingState) {
    case "예약전":
      return (
        <Button
          color='primary'
          variant='contained'
          onClick={postBooking}
        >
          구매예약
        </Button>
      )
    case "예약신청":
      return (
        <Button
          color='primary'
          variant='contained'
          onClick={deleteBooking}
        >
          예약취소
        </Button>
      )
    case "계좌전달":
      return (
        <p>계좌를 받았습니다.</p>
      )
    default:
      return null
  }
};
export default BookIntroBuyer;
