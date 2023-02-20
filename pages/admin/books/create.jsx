import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Delete } from "@mui/icons-material";
import {
  Grid,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";

import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
import { H3, Paragraph } from "components/Typography";
import VendorDashboardLayout from "components/layouts/admin-dashboard";
import axios from "axios";

const INITIAL_BOOKS = {};
const INITIAL_USER = {};

const validationIsbn = Yup.object().shape({
  Isbn: Yup.string()
    .required("ISBN 또는 도서명을 입력하세요.")
    .matches(/^[0-9]+$/, "10자리 또는 13자리 숫자 ISBN을 입력하세요.")
    .test(
      "len",
      "10자리 또는 13자리 숫자 ISBN을 입력하세요.",
      (val) => val.length === 10 || val.length === 13
    ),
});

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Shop Name is required!"),
  shopPhone: Yup.string().required("Shop Phone is required!"),
  category: Yup.string().required("Category is required!"),
  description: Yup.string().required("Description is required!"),
  shopAddress: Yup.string().required("Shop Address is required!"),
  order: Yup.number().required("Orders is required!"),
}); // =============================================================================

ShopSettings.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function ShopSettings() {
  const [bookCard, setBookCard] = useState(false);
  const [nickname, setNickname] = useState('')
  const [validIsbn, setValidIsbn] = useState('')
  const router = useRouter()

  const handleIsbnSubmit = (values) => {
    getBookByIsbn(values.Isbn);
  };

  const handleUserSubmit = (values) => {
    getUserId(values.userid);
  };

  const getBookByIsbn = async (isbn) => {
    await axios
      .get(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/isbn?isbn=${isbn}`
      )
      .then((response) => {
        console.log(response.data.items[0]);
        if (response.data.items[0] !== undefined) {
          console.log(response.data.items[0])
          setBookInfo(response.data.items[0]);
          setValidIsbn(isbn)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserId = async (id) => {
    await axios
      .get(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/user/${id}`,
      )
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          setUserInfo(response.data[0]);
        }

      })
      .catch((error) => {
        console.log(error);
        // if(error.response.status === 401){
        //   alert('이미 가입되어 있는 이메일 주소입니다.')
        // }
      });
  };

  const postNewBook = async () => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/book`,
        {
          isbn: validIsbn,
          title: INITIAL_BOOKS.title,
          author: INITIAL_BOOKS.author,
          image: INITIAL_BOOKS.image,
          price: INITIAL_BOOKS.price,
          description: INITIAL_BOOKS.description,
          publisher: INITIAL_BOOKS.publisher,
          pubdate: INITIAL_BOOKS.pubdate,
          // seller_uid: 15,
          // sell_price: parseInt(values.sell_price),
          // shop_uid: null,
          // trade_description: values.trade_description,
          // trade_image: null
        }
      )
      .then((response) => {
        if (response.status === 200) {
          postNewTrade(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postNewTrade = async (uid) => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade`,
        {
          book_uid: uid,
          seller_uid: INITIAL_USER.user_uid,
          sell_state: '판매중',
          sell_price: 2000,
          shop_uid: null,
          trade_description: `${nickname}님이 판매 등록한 도서입니다.`,
          trade_image: null
        }
      )
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          alert('정상 등록되었습니다.')
          router.push("/admin/books");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setBookInfo = (val) => {
    setBookCard(true);
    INITIAL_BOOKS.title = val.title;
    INITIAL_BOOKS.author = val.author;
    INITIAL_BOOKS.publisher = val.publisher;
    INITIAL_BOOKS.pubdate = val.pubdate;
    INITIAL_BOOKS.price = val.discount;
    INITIAL_BOOKS.description = val.description;
    INITIAL_BOOKS.image = val.image || "/assets/images/products/24.Revel2020.png";
  };

  const setUserInfo = (val) => {
    // setUserStatus(true);
    INITIAL_USER.user_uid = val.user_uid;
    setNickname(val.nickname)
    console.log(INITIAL_USER)
  };

  return (
    <Box py={4} maxWidth={740} margin="auto">
      <H3 mb={2}>신규 도서 등록</H3>

      <Card
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Paragraph fontWeight={700} mb={4}>
          ISBN 검색
        </Paragraph>

        <Formik
          onSubmit={handleIsbnSubmit}
          validationSchema={validationIsbn}
          initialValues={INITIAL_BOOKS}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} mb={3}>
                <TextField
                  color="info"
                  size="medium"
                  type="text"
                  name="Isbn"
                  label="ISBN *"
                  onBlur={handleBlur}
                  value={values.Isbn}
                  onChange={handleChange}
                  error={Boolean(errors.Isbn && touched.Isbn)}
                  helperText={touched.Isbn && errors.Isbn}
                />
                <Button type="submit" color="info" variant="contained">
                  검색
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Card>

      {bookCard && (
        <Card
          sx={{
            p: 3,
            mb: 3
          }}
        >
          <Paragraph fontWeight={700} mb={4}>
            도서 정보
          </Paragraph>

          <Formik
            // onSubmit={handleFormSubmit}
            initialValues={INITIAL_BOOKS}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={3} mb={3}>
                  <img
                    name="image"
                    src={values.image}
                    style={{
                      width: '300px', objectFit: 'contain', margin: '0 auto'
                    }}
                  />

                  <TextField
                    color="info"
                    size="medium"
                    name="title"
                    label="도서명"
                    onBlur={handleBlur}
                    value={values.title}
                    readOnly
                  />

                  <TextField
                    color="info"
                    size="medium"
                    name="publisher"
                    label="출판사"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.publisher}
                    error={Boolean(errors.publisher && touched.publisher)}
                    helperText={touched.publisher && errors.publisher}
                  />

                  <TextField
                    fullWidth
                    color="info"
                    size="medium"
                    name="pubdate"
                    onBlur={handleBlur}
                    placeholder="발행일"
                    label="발행일"
                    onChange={handleChange}
                    value={values.pubdate}
                    error={Boolean(errors.pubdate && touched.pubdate)}
                    helperText={touched.pubdate && errors.pubdate}
                  >
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                  </TextField>

                  <TextField
                    rows={6}
                    multiline
                    fullWidth
                    color="info"
                    size="medium"
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    label="책소개"
                    error={Boolean(errors.description && touched.description)}
                    helperText={touched.description && errors.description}
                  />

                  <TextField
                    color="info"
                    size="medium"
                    name="price"
                    label="정가"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price}
                    error={Boolean(errors.price && touched.price)}
                    helperText={touched.price && errors.price}
                  />
                </Stack>

                {/* <Button type="submit" color="info" variant="contained">
                저장하기
              </Button> */}
              </form>
            )}
          </Formik>
        </Card>
      )}


      {bookCard &&
        (<Card
          sx={{
            p: 3,
            mb: 3,
          }}
        >
          <Paragraph fontWeight={700} mb={2}>
            판매자 정보
          </Paragraph>

          <Formik
            onSubmit={handleUserSubmit}
            // validationSchema={validationIsbn}
            initialValues={INITIAL_USER}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={3} mb={3}>
                  <TextField
                    color="info"
                    size="medium"
                    type="text"
                    name="userid"
                    label="유저번호 *"
                    onBlur={handleBlur}
                    value={values.user_uid}
                    onChange={handleChange}
                    error={Boolean(errors.user_uid && touched.user_uid)}
                    helperText={touched.user_uid && errors.user_uid}
                  />
                  <Button type="submit" color="info" variant="contained">
                    검색
                  </Button>

                </Stack>
              </form>
            )}
          </Formik>

          {nickname !== '' && (
            <Stack spacing={3} mb={3}>
              <TextField
                fullWidth
                color="info"
                size="medium"
                type="text"
                name="nickname"
                label="닉네임"
                value={nickname}
              />
              <TextField
                fullWidth
                color="info"
                size="medium"
                type="text"
                name="price"
                label="판매가"
                value='20000'
              />
            </Stack>

          )}
        </Card>
        )}
      <Grid container justifyContent="flex-end">
        <Button color="info" variant="outlined" onClick={postNewBook}>
          저장하기
        </Button>
      </Grid>
    </Box>
  );
}
