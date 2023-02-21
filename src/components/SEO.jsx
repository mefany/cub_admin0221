import Head from "next/head"; // ====================================================================

// ====================================================================
const SEO = ({ title, description, sitename = "도서와 만나는 카페" }) => {
  return (
    <Head>
      <title>{`${title} | ${sitename}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
