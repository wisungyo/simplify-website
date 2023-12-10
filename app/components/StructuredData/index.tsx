// import Head from "next/head";

const StructuredData = ({ data }: any) => {
  return (
    <>
      {/* <Head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      {/* </Head> */}
    </>
  );
};

export default StructuredData;
