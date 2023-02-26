import Link from "next/link";
import { Formik } from "formik";
import * as yup from "yup";
import { CameraEnhance, Person } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, TextField, Stack, Divider } from "@mui/material";
import { H3, Paragraph } from "components/Typography";
import Card1 from "components/Card1";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import DropZone from "components/DropZone";
import { withAuth } from "../../hocs/withAuth ";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const bookCard = {
  book_uid: null,
  trade_title: "",
  sell_price: 0 || "",
  trade_description: "",
}
// ===========================================================
const ProfileEditor = () => {
  const router = useRouter()
  useEffect(() => {
    setUserId(sessionStorage.getItem("user_uid"))
  }, []);


  const [isbn, setIsbn] = useState('')
  const [user_id, setUserId] = useState('')
  const [bookInfo, setBookInfo] = useState({})

  const checkoutSchema = yup.object().shape({
    trade_title: yup.string().required("책 제목을 입력하세요."),
    sell_price: yup.string().required("가격을 입력하세요."),
  });

  const handleFormSubmit = (values) => {
    const newObj = {
      trade_title: values.trade_title,
      seller_uid: parseInt(user_id),
      sell_price: parseInt(values.sell_price),
      trade_description: values.trade_description,
    }
    // setBookCard((prevState) => ({
    //   ...prevState,
    //   trade_title: values.trade_title,
    //   sell_price: parseInt(values.sell_price),
    //   trade_description: values.trade_description,
    // }));
    bookCard = { ...bookCard, ...newObj, ...bookInfo }
    postNewTrade()
  };

  const handleIsbnSubmit = () => {
    if (isbn !== '') {
      getBookByIsbn(isbn);
    }
  };

  const handleOnChange = (e) => {
    setIsbn(e.target.value)
  }

  const getBookByIsbn = async (isbn) => {
    await axios
      .get(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/isbn?isbn=${isbn}`
      )
      .then((response) => {
        console.log(response.data.items[0]);
        if (response.data.items[0] !== undefined) {
          console.log(response.data.items[0])
          setBookInfo(response.data.items[0])
          postNewBook({ ...response.data.items[0], isbn: isbn })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postNewBook = async (obj) => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/book`,
        obj
      )
      .then((response) => {
        if (response.status === 200) {
          bookCard.book_uid = response.data
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postNewTrade = async () => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade`,
        bookCard
      )
      .then((response) => {
        if (response.status === 200) {
          alert('정상 등록되었습니다.')
          router.push("/my");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HEADER_LINK = (
    <Link href="/my">
      <Button
        color="primary"
        sx={{
          px: 4,
          bgcolor: "primary.light",
        }}
      >
        목록으로
      </Button>
    </Link>
  );

  return (
    <CustomerDashboardLayout>
      {/* TITLE HEADER AREA */}
      <UserDashboardHeader
        icon={Person}
        title="내 책 판매"
        button={HEADER_LINK}
        navigation={<CustomerDashboardNavigation />}
      />

      {/* PROFILE EDITOR FORM */}
      <Card1>
        <Paragraph fontWeight={700} mb={2}>
          필수 입력 정보
        </Paragraph>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={bookCard}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} mb={3}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="trade_title"
                      label="제목"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.trade_title}
                      error={!!touched.trade_title && !!errors.trade_title}
                      helperText={touched.trade_title && errors.trade_title}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="판매가"
                      name="sell_price"
                      onBlur={handleBlur}
                      value={values.sell_price}
                      onChange={handleChange}
                      error={!!touched.sell_price && !!errors.sell_price}
                      helperText={touched.sell_price && errors.sell_price}
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <TextField
                      rows={6}
                      multiline
                      fullWidth
                      color="info"
                      name="trade_description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.trade_description}
                      label="책소개"
                      error={Boolean(errors.trade_description && touched.trade_description)}
                      helperText={touched.trade_description && errors.trade_description}
                    />
                  </Grid>
                </Grid>
              </Stack>

              <Divider variant="middle" />

              <Paragraph fontWeight={700} mt={2}>
                추가 입력 정보
              </Paragraph>
              <Paragraph fontWeight={500} fontSize={12} mb={2} style={{ color: "#D23F57" }}>
                정확한 책 정보를 입력하려면 ISBN을 검색하세요.
              </Paragraph>

              <Stack spacing={3} mb={3}>
                <TextField
                  color="info"
                  type="text"
                  name="Isbn"
                  label="ISBN"
                  onChange={handleOnChange}
                />
                <Button onClick={handleIsbnSubmit} color="primary" variant="contained" disabled={isbn === ''}>
                  검색
                </Button>
              </Stack>

              <Divider variant="middle" />

              {bookInfo && (
                <>
                  <Paragraph fontWeight={700} mt={2}>
                    도서 정보
                  </Paragraph>

                  <Stack spacing={3} mb={3}>
                    <img
                      name="image"
                      src={bookInfo.image || ''}
                      style={{
                        width: '250px', objectFit: 'contain', margin: '0 auto', border: '1px solid #eee'
                      }}
                    />

                    <TextField
                      color="info"
                      name="title"
                      label="도서명"
                      value={bookInfo.title || ''}
                      readOnly
                    />

                    <TextField
                      color="info"
                      name="publisher"
                      label="출판사"
                      onChange={handleChange}
                      value={bookInfo.publisher || ''}
                    />

                    <TextField
                      fullWidth
                      color="info"
                      name="pubdate"
                      placeholder="발행일"
                      label="발행일"
                      onChange={handleChange}
                      value={bookInfo.pubdate || ''}
                    >
                    </TextField>

                    <TextField
                      rows={6}
                      multiline
                      fullWidth
                      color="info"
                      name="description"
                      onChange={handleChange}
                      value={bookInfo.description || ''}
                      label="책소개"
                    />

                    <TextField
                      color="info"
                      name="price"
                      label="정가"
                      onChange={handleChange}
                      value={bookInfo.price || ''}
                    />
                  </Stack>
                </>
              )}

              <Button type="submit" variant="contained" color="primary">
                저장
              </Button>
            </form>
          )}
        </Formik>
      </Card1>
    </CustomerDashboardLayout>
  );
};

export default withAuth(ProfileEditor)
