import { useRouter } from "next/router";

export const withAuth = Component => props => {
  if (typeof window !== "undefined") {
    const Router = useRouter();

    const accessToken = localStorage.getItem("token");

    // If there is no access token we redirect to "/" page.
    if (!accessToken) {
      alert("로그인 후 이용이 가능합니다.");
      Router.replace("/login");
      return null;
    }

    // If this is an accessToken we just render the component that was passed with all its props
    return <Component {...props} />;
  }

  // If we are on server, return null
  return null;
};
