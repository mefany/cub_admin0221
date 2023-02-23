import { useCallback, useState, useEffect } from "react";
import { Button, Card, Box, styled } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { H1, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import BazaarTextField from "components/BazaarTextField";
import SocialButtons from "./SocialButtons";
import EyeToggleButton from "./EyeToggleButton";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { useRouter } from "next/router";
import axios from "axios";

const fbStyle = {
  background: "#3B5998",
  color: "white",
};
const googleStyle = {
  background: "#4285F4",
  color: "white",
};
export const Wrapper = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle,
  },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));

const Login = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(visible => !visible);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      redirect();
    } else {
      setLoading(true);
    }
  }, []);

  const redirect = () => {
    sessionStorage.getItem("prevPath") === "null" || null
      ? router.push("/")
      : router.push(sessionStorage.getItem("prevPath"));
  };

  const handleFormSubmit = async values => {
    console.log(values);
    sendForm(values);
  };

  function loginFormWithKakao() {
    Kakao.Auth.loginForm({
      success(authObj) {
        getKakao(authObj.access_token);
      },
      fail(err) {
        console.log(err);
      },
    });
  }

  function kakaoLogin() {
    console.log("kakaoLogin");
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
    });
  }

  const sendForm = async values => {
    await axios
      .post(
        `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/login/`,
        {
          user_id: values.email,
          password: values.password,
          logout: false,
        }
      )
      .then(response => {
        console.log(response);
        const { data } = response;
        if (response.status === 200) {
          sessionStorage.setItem("token", data[0].token);
          sessionStorage.setItem("user_uid", data[0].user_uid);
          redirect();
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          alert("이메일 주소 또는 비밀번호를 확인해주세요.");
        }
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  if (!isLoading) return null;

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        {/* <BazaarImage
          src="/assets/images/bazaar-black-sm.svg"
          sx={{
            m: "auto",
          }}
        /> */}

        <H1 textAlign='center' mt={1} mb={4} fontSize={16}>
          로그인 후 컵컵의 서비스를 만나보세요.
        </H1>

        <a onClick={kakaoLogin}>
          <img
            src='https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg'
            width='100%'
            alt='카카오 로그인 버튼'
          />
        </a>

        <BazaarTextField
          mb={1.5}
          fullWidth
          name='email'
          size='small'
          type='email'
          variant='outlined'
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label='이메일'
          placeholder='exmple@mail.com'
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazaarTextField
          mb={2}
          fullWidth
          size='small'
          name='password'
          label='비밀번호'
          autoComplete='on'
          variant='outlined'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder='*********'
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

        <Button
          fullWidth
          type='submit'
          color='primary'
          variant='contained'
          sx={{
            height: 44,
          }}
        >
          로그인
        </Button>
      </form>

      {/* <SocialButtons /> */}

      <FlexRowCenter mt='1.25rem'>
        <Box>아직 회원이 아니신가요?</Box>
        <Link href='/signup' passHref legacyBehavior>
          <a>
            <H6 ml={1} borderBottom='1px solid' borderColor='grey.900'>
              회원 가입
            </H6>
          </a>
        </Link>
      </FlexRowCenter>

      <FlexBox
        justifyContent='center'
        bgcolor='grey.200'
        borderRadius='4px'
        py={2.5}
        mt='1.25rem'
      >
        비밀번호를 잊으셨나요?
        <Link href='/reset-password' passHref legacyBehavior>
          <a>
            <H6 ml={1} borderBottom='1px solid' borderColor='grey.900'>
              비밀번호 찾기
            </H6>
          </a>
        </Link>
      </FlexBox>
    </Wrapper>
  );
};

const initialValues = {
  email: "",
  password: "",
};
const formSchema = yup.object().shape({
  password: yup.string().required("패스워드를 입력하세요."),
  email: yup
    .string()
    .email("이메일 주소 형식이 맞지 않습니다.")
    .required("이메일 주소를 입력하세요."),
});
export default Login;
