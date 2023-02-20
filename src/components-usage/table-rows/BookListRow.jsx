import { useState } from "react";
import Link from "next/link";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box, Chip } from "@mui/material";
import { FlexBox } from "components/flex-box";
import DefaultSwitch from "components/DefaultSwitch";
import { Paragraph, Small } from "components/Typography";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "./StyledComponents";

// ========================================================================
const BookListRow = ({ books }) => {
  const { trade_uid, sell_price, title, sell_state, active, image, shop_name } =
    books;
  const [sellActive, setShopPublish] = useState(active);

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
    <StyledTableRow tabIndex={-1} role="checkbox">
      <Link href={`/admin/books/${trade_uid}`}>
        <StyledTableCell align="left">
          <FlexBox alignItems="center" gap={1.5}>
            <Avatar src={image} alt={title} />
            <Box>
              <Paragraph>{title}</Paragraph>
              <Small color="grey.600">{trade_uid}</Small>
            </Box>
          </FlexBox>
        </StyledTableCell>
      </Link>
      <StyledTableCell align="left">{shop_name}</StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        <Box m={0.75}>
          <Chip
            size="small"
            label={sell_state}
            sx={{
              p: "0.25rem 0.5rem",
              fontSize: 12,
              color: !!getColor(sell_state)
                ? `${getColor(sell_state)}.900`
                : "inherit",
              backgroundColor: !!getColor(sell_state)
                ? `${getColor(sell_state)}.100`
                : "none",
            }}
          />
        </Box>
      </StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        {sell_price}원
      </StyledTableCell>

      {/* <StyledTableCell align="left">
        <DefaultSwitch
          color="secondary"
          checked={sellActive}
          onChange={() => setShopPublish((state) => !state)}
        />
      </StyledTableCell> */}

      {/* <StyledTableCell align="center">
        <StyledIconButton>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell> */}
    </StyledTableRow>
  );
};

export default BookListRow;
