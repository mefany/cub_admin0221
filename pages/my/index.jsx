import Link from "next/link";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { East, Place, ShoppingBag } from "@mui/icons-material";
import TableRow from "components/TableRow";
import { H5, Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import { withAuth } from "../../hocs/withAuth ";

// ====================================================
// styled components
const StyledChip = styled(Chip)(({ theme, green }) => ({
  height: 26,
  margin: "6px",
  padding: " 0 0.25rem",
  color: green ? theme.palette.success.main : theme.palette.primary.main,
  backgroundColor: green
    ? theme.palette.success[100]
    : theme.palette.primary.light,
}));

const Orders = () => {
  const [data, setData] = useState(null);
  const [user_id, setUserId] = useState('')
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUserId(sessionStorage.getItem("user_uid"))
    getUserInfo(user_id)
  }, []);

  const getUserInfo = (user_uid) => {
    fetch(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade?user_uid=${user_uid}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }

  const NEWBOOK_BUTTON = (
    <Link href='/my/create'>
      <Button
        color='primary'
        sx={{
          px: 4,
          bgcolor: "primary.light",
        }}
      >
        판매 등록
      </Button>
    </Link>
  );

  return (
    <CustomerDashboardLayout>
      {/* TITLE HEADER AREA */}
      <UserDashboardHeader
        title='판매중인 책'
        icon={ShoppingBag}
        button={NEWBOOK_BUTTON}
        navigation={<CustomerDashboardNavigation />}
      />

      {data ? (
        data.map((item, index) => (
          <Link href={`/my/${item.trade_uid}`} key={index} passHref>
            <TableRow
              sx={{
                my: "1rem",
                p: "15px 24px",
              }}
            >
              <Box>
                <span>{item.title}</span>
                <Span m={0.75} color='grey.600'>
                  | {item.sell_price}원
                </Span>
                <FlexBox alignItems='center' flexWrap='wrap' pt={1} m={-0.75}>
                  <StyledChip label={item.sell_state} size='small' green={1} />
                  <Span m={0.75} color='grey.600'>
                    <Place fontSize='small' color='inherit' /> {item.shop_name}
                  </Span>
                </FlexBox>
              </Box>

              <Typography
                flex='0 0 0 !important'
                textAlign='center'
                color='grey.600'
              >
                <IconButton>
                  <East fontSize='small' color='inherit' />
                </IconButton>
              </Typography>
            </TableRow>
          </Link>

        ))
      ) : (
        <H5>Loading...</H5>
      )}

      <FlexBox justifyContent='center' mt={5}>
        <Pagination
          count={5}
          color='primary'
          variant='outlined'
          onChange={data => console.log(data)}
        />
      </FlexBox>
    </CustomerDashboardLayout>
  );
};

export default withAuth(Orders);
