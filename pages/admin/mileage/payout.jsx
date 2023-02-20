import { RemoveRedEye } from "@mui/icons-material";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import {
  StatusWrapper,
  StyledTableRow,
  StyledTableCell,
  StyledIconButton,
} from "components-usage/table-rows";
import api from "__server__/__api__/admin";

const tableHeading = [
  {
    id: "no",
    label: "No",
    align: "left",
  },
  {
    id: "userNo",
    label: "ID",
    align: "left",
  },
  {
    id: "nickName",
    label: "닉네임",
    align: "left",
  },
  {
    id: "totalAmount",
    label: "마일리지누적",
    align: "left",
  },
  {
    id: "requestAmount",
    label: "요청마일리지",
    align: "left",
  },
  {
    id: "date",
    label: "Date",
    align: "left",
  },
  {
    id: "status",
    label: "처리상태",
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
]; // =============================================================================

PayoutRequests.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function PayoutRequests({ requests }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: requests,
    defaultSort: "no",
  });
  return (
    <Box py={4}>
      <H3 mb={2}>마일리지 지급내역</H3>

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 1100,
            }}
          >
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={requests.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((request, index) => (
                  <StyledTableRow role="checkbox" key={index}>
                    <StyledTableCell align="left">{request.no}</StyledTableCell>
                    <StyledTableCell align="left">
                      {request.userNo}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {request.nickName}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {request.totalAmount}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {request.requestAmount}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {request.date}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <StatusWrapper status={request.status}>
                        {request.status}
                      </StatusWrapper>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <StyledIconButton>
                        <RemoveRedEye />
                      </StyledIconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(requests.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
export const getStaticProps = async () => {
  const requests = await api.payoutRequests();
  return {
    props: {
      requests,
    },
  };
};
