import Link from "next/link";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Button } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import { FlexBox } from "components/flex-box";
import SellBookRow from "pages-sections/orders/SellBookRow";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import { withAuth } from "../../hocs/withAuth ";
// ====================================================
const Orders = () => {
  let linkArr;
  if (process.browser) {
    const link = document.location.pathname;
    linkArr = link.split("/").slice(-1);
    console.log(linkArr);
  }

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade?user_uid=15`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);


  const NEWBOOK_BUTTON = (
    <Link href="/my/create">
      <Button
        color="primary"
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
        title="판매중인 책"
        icon={ShoppingBag}
        button={NEWBOOK_BUTTON}
        navigation={<CustomerDashboardNavigation />}
      />

      {/* ORDER LIST AREA */}
      <TableRow
        elevation={0}
        sx={{
          padding: "0px 18px",
          background: "none",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          등록번호 #
        </H5>

        <H5 color="grey.600" my={0} mx={0.5} textAlign="center">
          제목
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="center">
          가격
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
          매장
        </H5>

        <H5 color="grey.600" my={0} mx={0.75} textAlign="center">
          상태
        </H5>

        <H5
          my={0}
          px={2.75}
          color="grey.600"
          flex="0 0 0 !important"
          display={{
            xs: "none",
            md: "block",
          }}
        />
      </TableRow>

      {data ?
        data.map((order) => (
          <SellBookRow order={order} key={order.trade_uid} />)
        ) : <H5>Loading...</H5>}


      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          color="primary"
          variant="outlined"
          onChange={(data) => console.log(data)}
        />
      </FlexBox>
    </CustomerDashboardLayout>
  );
};

export default withAuth(Orders);
