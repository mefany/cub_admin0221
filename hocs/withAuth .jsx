import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const withAuth = Component => props => {
  const Router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    setAccessToken(localStorage.getItem("token"))
  }, []);

  if (domLoaded && !accessToken) {
    alert("로그인 후 이용이 가능합니다.");
    Router.replace("/login");
    return null;
  }

  return (
    <>
      {accessToken && (
        <Component {...props} />
      )}
    </>
  );

};
