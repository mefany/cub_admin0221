import Link from "next/link";
import { format } from "date-fns";
import { East } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import { currency } from "lib";

// =================================================
const SellBookRow = ({ order }) => {
  const getColor = (status) => {
    switch (status) {
      case "등록대기":
        return "info";

      case "판매완료":
        return "dark";

      case "판매중":
        return "success";

      case "예약중":
        return "warning";

      case "취소":
        return "error";
      default:
        return "";
    }
  };

  return (
    <Link href={`/my/${order.trade_uid}`} passHref>
      <a>
        <TableRow
          sx={{
            my: "1rem",
            padding: "6px 18px",
          }}
        >
          <H5 m={0.75} textAlign="left">
            {order.trade_uid}
          </H5>

          <Typography m={0.75} textAlign="left">
            {order.title}
          </Typography>

          <Typography m={0.75} textAlign="center">
            {order.sell_price}
          </Typography>

          <Typography m={0.75} textAlign="left">
            {order.shop_name}
          </Typography>

          <Box m={0.75}>
            <Chip
              size="small"
              label={order.sell_state}
              sx={{
                p: "0.25rem 0.5rem",
                fontSize: 12,
                color: !!getColor(order.sell_state)
                  ? `${getColor(order.sell_state)}.900`
                  : "inherit",
                backgroundColor: !!getColor(order.sell_state)
                  ? `${getColor(order.sell_state)}.100`
                  : "none",
              }}
            />
          </Box>

          <Typography
            color="grey.600"
            textAlign="center"
            sx={{
              flex: "0 0 0 !important",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >



            <IconButton>
              <East
                fontSize="small"
                color="inherit"
                sx={{
                  transform: ({ direction }) =>
                    `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
                }}
              />
            </IconButton>
          </Typography>
        </TableRow >
      </a>
    </Link>
  );
};

export default SellBookRow;
