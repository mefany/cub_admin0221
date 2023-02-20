import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { H3 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import useMuiTable from "hooks/useMuiTable";
import { MemberRow } from "components-usage/table-rows";
import api from "__server__/__api__/admin"; // table column list

const tableHeading = [
  {
    id: "name",
    label: "이름",
    align: "left",
  },
  {
    id: "phone",
    label: "연락처",
    align: "left",
  },
  {
    id: "email",
    label: "이메일",
    align: "left",
  },
  {
    id: "balance",
    label: "마일리지",
    align: "left",
  },
  {
    id: "orders",
    label: "랭킹",
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
]; // =============================================================================

CustomerList.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function CustomerList({ members }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: members,
  });
  return (
    <Box py={4}>
      <H3 mb={2}>회원 목록</H3>

      <SearchArea handleSearch={() => {}} searchPlaceholder="회원 검색" />

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 900,
            }}
          >
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                numSelected={selected.length}
                rowCount={filteredList.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((customer) => (
                  <MemberRow customer={customer} key={customer.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(filteredList.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
export const getStaticProps = async () => {
  const members = await api.members();
  return {
    props: {
      members,
    },
  };
};