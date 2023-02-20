import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Profile() {
  let linkArr;
  if (process.browser) {
    const link = document.location.pathname;
    linkArr = link.split("/").slice(-1);
    console.log(linkArr);
  }

  //   const { query } = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://i9nwbiqoc6.execute-api.ap-northeast-2.amazonaws.com/test/trade/${linkArr}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      cub-admin
      {data.map((item) => {
        <p>{item.title}</p>;
      })}
    </div>
  );
}
