//https://velog.io/@ice-prince/Next.JS%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Kakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async code => {
      // 백엔드에 전송
      const response = await fetch("/api/users/kakao-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authCode: code,
        }),
      }).then(res => res.json());

      if (response.ok) {
        // 성공하면 홈으로 리다이렉트
        router.push("/");
      } else {
        // 실패하면 에러 페이지로 리다이렉트
        router.push("/notifications/authentication-failed");
      }
    },
    [router]
  );

  useEffect(() => {
    if (authCode) {
      console.log("authCode", authCode);
      loginHandler(authCode);

      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) {
      router.push("/notifications/authentication-failed");
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return <h2>로그인 중입니다..</h2>;
};

export default Kakao;
