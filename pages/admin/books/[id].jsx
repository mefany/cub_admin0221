import { useState, useEffect } from "react";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import { H2 } from "components/Typography";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
// import ShopLayout1 from "components/layouts/ShopLayout1";
import BookIntro from "components/products/BookIntro";
import ProductReview from "components/products/ProductReview";
// import AvailableShops from "components/products/AvailableShops";
// import RelatedProducts from "components/products/RelatedProducts";
import AvailableBooks from "components/products/AvailableBooks";
import ProductDescription from "components/products/ProductDescription";
import axios from "axios";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
})); // ===============================================================

// ===============================================================
const ProductDetails = (props) => {
  //   const { frequentlyBought, relatedProducts, product } = props;
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (_, value) => setSelectedOption(value); // Show a loading state when the fallback is rendered

  let linkArr;
  if (process.browser) {
    const link = document.location.pathname;
    linkArr = link.split("/").slice(-1);
  }

  const [book, setBook] = useState(null);
  const [relatedBook, setRelatedBook] = useState(null);

  const [isLoading, setLoading] = useState(false);


  const getIsbnBooks = async (isbn) => {
    console.log('get', isbn)
    const res = await axios.get(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade?isbn=${isbn}`
    );
    const books = await res.data;
    console.log(books)
    setRelatedBook(books);
    setLoading(false);
  };

  const getBookById = async (linkArr) => {
    const res = await axios.get(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade/${linkArr}`
    );
    const book = await res.data[0];
    setBook(book);
    getIsbnBooks(book.isbn)
  };


  useEffect(() => {
    setLoading(true);
    getBookById(linkArr);
  }, []);



  return (
    <VendorDashboardLayout>
      <Container
        sx={{
          my: 4,
        }}
      >
        {/* PRODUCT DETAILS INFO AREA */}
        {book ? <BookIntro data={book} /> : <H2>Loading...</H2>}

        {/* PRODUCT DESCRIPTION AND REVIEW */}
        <StyledTabs
          textColor="primary"
          value={selectedOption}
          indicatorColor="primary"
          onChange={handleOptionClick}
        >
          <Tab className="inner-tab" label="상세" />
          {/* <Tab className="inner-tab" label="리뷰 (3)" /> */}
        </StyledTabs>

        <Box mb={6}>
          {selectedOption === 0 && book ? <ProductDescription data={book} /> : <H2>Loading...</H2>}
          {selectedOption === 1 && <ProductReview />}
        </Box>

        {/* <AvailableBooks data={relatedBook} />
        <AvailableShops /> */}
      </Container>
    </VendorDashboardLayout>
  );
};

export default ProductDetails;
