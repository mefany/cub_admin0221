import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { H3 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import useMuiTable from "hooks/useMuiTable";
import { MemberRowType } from "components-usage/table-rows";
import api from "__server__/__api__/admin"; // table column list

const tableHeading = [
  {
    id: "name",
    label: "이름",
    align: "left",
  },
  {
    id: "shopName",
    label: "지역",
    align: "left",
  },
  {
    id: "package",
    label: "등급",
    align: "left",
  },
  {
    id: "balance",
    label: "마일리지",
    align: "left",
  },
  {
    id: "published",
    label: "활성",
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
]; // =============================================================================

BookList.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function BookList({ membersType2 }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: membersType2,
  });
  return (
    <Box py={4}>
      <H3 mb={2}>회원</H3>

      <SearchArea handleSearch={() => {}} searchPlaceholder="회원 검색" />

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
                rowCount={membersType2.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((seller, index) => (
                  <MemberRowType seller={seller} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(membersType2.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
export const getStaticProps = async () => {
  const membersType2 = await api.membersType2();
  return {
    props: {
      membersType2,
    },
  };
};
