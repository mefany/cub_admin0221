import { useCallback, useState } from "react";
import { Button, Checkbox, Box, FormControlLabel, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { H1, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import BazaarTextField from "components/BazaarTextField";
import { Wrapper } from "./Login";
import SocialButtons from "./SocialButtons";
import EyeToggleButton from "./EyeToggleButton";
import { useRouter } from "next/router";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [region, setRegion] = useState(sortOptions[0].value)
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values) => {
    console.log(values);
    sendForm(values);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setRegion(e.target.value)
  }

  const sendForm = async (values) => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/user/`,
        {
          user_name: values.name,
          user_id: values.email,
          password: values.password,
          nickname: values.name,
          gender: "F",
          phone: values.phone,
          email: values.email,
          favorite_gu_1: region
        }
      )
      .then((response) => {
        if (response.status === 200) {
          router.push("/login");
        }

      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          alert('이미 가입되어 있는 이메일 주소입니다.')
        }
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        {/* <BazaarImage
          src="/assets/images/bazaar-black-sm.svg"
          sx={{
            m: "auto",
          }}
        /> */}

        <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
          신규 회원 가입
        </H1>

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="이름"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="홍길동"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="이메일"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="비밀번호"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <BazaarTextField
          fullWidth
          size="small"
          mb={1.5}
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label="비밀번호 확인"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="phone"
          size="phone"
          type="phone"
          variant="outlined"
          onBlur={handleBlur}
          value={values.phone}
          onChange={handleChange}
          label="연락처"
          placeholder="01012341234"
          error={!!touched.phone && !!errors.phone}
          helperText={touched.phone && errors.phone}
        />

        <BazaarTextField
          select
          fullWidth
          size="small"
          label="주거래지역"
          variant="outlined"
          placeholder="Short by"
          defaultValue={sortOptions[0].value}
          onChange={handleOnChange}

        >
          {sortOptions.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </BazaarTextField>

        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement}
            />
          }
          label={
            <div>
              회원 가입을 위한 <a href="/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
                약관 동의
              </a>
              {errors.agreement && <p style={{ color: '#E94560', marginTop: '4px', fontSize: '0.75rem' }}>{errors.agreement}</p>}
            </div>
          }
        />


        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            height: 44,
          }}
        >
          계정 생성하기
        </Button>
      </form>

      {/* <SocialButtons /> */}
      <FlexRowCenter mt="1.25rem">
        <Box>이미 회원이신가요?</Box>
        <Link href="/login" passHref legacyBehavior>
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              로그인
            </H6>
          </a>
        </Link>
      </FlexRowCenter>
    </Wrapper >
  );
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  re_password: "",
  agreement: false,
};
const formSchema = yup.object().shape({
  name: yup.string().required("이름을 입력하세요."),
  email: yup.string().email("이메일 형식이 맞지 않습니다.").required("이메일 주소를 입력하세요."),
  phone: yup.string().required("연락처를 입력하세요."),
  password: yup.string().required("비밀번호를 입력하세요."),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 맞지 않습니다.")
    .required("비밀번호를 입력하세요."),
  // agreement: yup
  //   .bool()
  //   .test(
  //     "agreement",
  //     "You have to agree with our Terms and Conditions!",
  //     (value) => value === true
  //   )
  //   .required("You have to agree with our Terms and Conditions!"),
  agreement: yup
    .bool()
    .oneOf([true], "회원 가입을 위해 약관 동의가 필요합니다.")
    .required("You have to agree with our Terms and Conditions!"),
});

const sortOptions = [
  {
    label: "서초구, 강남구",
    value: "서초구, 강남구",
  },
  {
    label: "송파구, 강동구",
    value: "송파구, 강동구",
  },
  {
    label: "동대문구, 중랑구, 성동구, 광진구",
    value: "동대문구, 중랑구, 성동구, 광진구",
  },
  {
    label: "도봉구, 강북구, 성북구, 노원구",
    value: "도봉구, 강북구, 성북구, 노원구",
  },
  {
    label: "종로구, 중구, 용산구",
    value: "종로구, 중구, 용산구",
  },
  {
    label: "은평구, 마포구, 서대문구",
    value: "은평구, 마포구, 서대문구",
  },
  {
    label: "강서구, 양천구, 영등포구, 구로구",
    value: "강서구, 양천구, 영등포구, 구로구",
  },
  {
    label: "동작구, 관악구, 금천구",
    value: "동작구, 관악구, 금천구",
  },
];

export default Signup;
