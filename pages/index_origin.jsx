import { Box } from "@mui/material";
import Setting from "components/Setting";
import Footer from "pages-sections/landing/Footer";
import Section1 from "pages-sections/landing/Section1";
import Section2 from "pages-sections/landing/Section2";
import Section3 from "pages-sections/landing/Section3";
import Section4 from "pages-sections/landing/Section4";
import Section6 from "pages-sections/landing/Section6";
import { useState } from "react";
import Link from "next/link";

const IndexPage = () => {
  const [filterDemo, setFilterDemo] = useState("");
  const id = 31;

  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Link href={`/test/${id}`}>ROUTH</Link>
      <Section1 />
      <Section6 setFilterDemo={setFilterDemo} />
      <Section2 />
      <Section3 filterDemo={filterDemo} setFilterDemo={setFilterDemo} />
      <Section4 />
      <Footer />

      <Setting />
    </Box>
  );
};

export default IndexPage;
