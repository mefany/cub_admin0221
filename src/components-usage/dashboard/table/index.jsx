import { Done } from "@mui/icons-material";
import { styled, Table, TableContainer } from "@mui/material";
import { Box, Chip } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FlexBox } from "components/flex-box";
import Reload from "components/icons/Reload";
import Scrollbar from "components/Scrollbar";
import useMuiTable from "hooks/useMuiTable";
import TableHeader from "./TableHeader";
import { currency } from "lib"; // styled components

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ":first-of-type": {
    paddingLeft: 24,
  },
}));
const StyledTableRow = styled(TableRow)(() => ({
  ":last-child .MuiTableCell-root": {
    border: 0,
  },
})); // =============================================================================

// =============================================================================
const DataListTable = ({ dataList, tableHeading, type }) => {
  const { order, orderBy, filteredList, handleRequestSort } = useMuiTable({
    listData: dataList,
  });
  const recentPurchase = type === "RECENT_PURCHASE";

  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";

      case "판매완료":
        return "secondary";

      case "예약중":
        return "success";

      case "판매등록":
        return "error";

      default:
        return "";
    }
  };

  return (
    <Scrollbar>
      <TableContainer
        sx={{
          minWidth: recentPurchase ? 600 : 0,
        }}
      >
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            heading={tableHeading}
            onRequestSort={handleRequestSort}
          />
          {/* recent purchase table body */}
          {recentPurchase && (
            <TableBody>
              {filteredList.map((row, index) => {
                const { id, amount, payment, product } = row;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{id}</StyledTableCell>
                    <StyledTableCell align="left">{product}</StyledTableCell>

                    <StyledTableCell align="left">
                      <Box m={0.75}>
                        <Chip
                          size="small"
                          label={payment}
                          sx={{
                            p: "0.25rem 0.5rem",
                            fontSize: 12,
                            color: !!getColor(payment)
                              ? `${getColor(payment)}.900`
                              : "inherit",
                            backgroundColor: !!getColor(payment)
                              ? `${getColor(payment)}.100`
                              : "none",
                          }}
                        />
                      </Box>
                    </StyledTableCell>

                    <StyledTableCell align="center">{amount}원</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}

          {/* stock out table body */}
          {type === "STOCK_OUT" && (
            <TableBody>
              {filteredList.map((row, index) => {
                const { amount, stock, product } = row;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{product}</StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: "error.main",
                      }}
                    >
                      {stock}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {currency(amount)}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};

export default DataListTable;
