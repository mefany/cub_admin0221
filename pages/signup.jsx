import SEO from "components/SEO";
import { FlexRowCenter } from "components/flex-box";
import Signup from "components-usage/sessions/Signup";

const SignUpPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO title="Sign up" />
      <Signup />
    </FlexRowCenter>
  );
};

export default SignUpPage;
