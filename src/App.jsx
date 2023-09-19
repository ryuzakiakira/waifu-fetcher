/* eslint-disable no-undef */
import { useState } from "react";
import placeHolder from './assets/placeHolder.png'
import ShowImg from "./components/display/ShowImg";
import Filter from "./components/filter/Filter";

function App() {
  const [waifu, setWaifu] = useState(null);

  const fetchWaifu = async (category, type) => {
    try {
      const response = await fetch(
        `https://api.waifu.pics/${category}/${type}`
      );
      const data = await response.json();
      setWaifu(data.url);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  return (
    <>
      <Filter fun={fetchWaifu} />
      {waifu && <ShowImg img={waifu} />}
      {!waifu && <ShowImg img={placeHolder} />}
    </>
  );
}

export default App;
