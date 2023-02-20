import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import { H3 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import useMuiTable from "hooks/useMuiTable";
import { BookListRow } from "components-usage/table-rows";
// import api from "__server__/__api__/admin"; // table column list
import { useState, useEffect } from "react";

const tableHeading = [
  {
    id: "name",
    label: "제목",
    align: "left",
  },
  {
    id: "shopName",
    label: "지점명",
    align: "left",
  },
  {
    id: "package",
    label: "등급",
    align: "left",
  },
  {
    id: "balance",
    label: "판매가",
    align: "left",
  },
  // {
  //   id: "published",
  //   label: "활성",
  //   align: "left",
  // },
  // {
  //   id: "action",
  //   label: "Action",
  //   align: "center",
  // },
]; // =============================================================================

BookList.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function BookList() {
  const [books, setBooks] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade/`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!books) return <p>No profile data</p>;

  return (
    <Box py={4}>
      <H3 mb={2}>도서 목록</H3>

      <SearchArea searchPlaceholder="도서 검색" buttonText="검색" />

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 1100,
            }}
          >
            <Table>
              <TableHeader
                // order={order}
                hideSelectBtn
                // orderBy={orderBy}
                heading={tableHeading}
                rowCount={books.length}
              // numSelected={selected.length}
              // onRequestSort={handleRequestSort}
              />

              <TableBody>
                {books.map((book, index) => (
                  <BookListRow books={book} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        {/* <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(books.length / rowsPerPage)}
          />
        </Stack> */}
      </Card>
    </Box>
  );
}
// export const getStaticProps = async () => {
//   const books = await api.books();
//   return {
//     props: {
//       books,
//     },
//   };
// };
