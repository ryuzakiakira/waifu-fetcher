import SfwCategories from "./SfwCategories";
import NsfwCategories from "./NsfwCategories";
import { useState } from "react";

function Filter() {
    const [categoryNSFW, setCategoryNSFW] = useState(false);

    const categoryHandler = (e) => {
        if (e.target.value === 'nsfw') {
            setCategoryNSFW(true);
        } else {
            setCategoryNSFW(false);
        }
    }

  return <div>
    <select name="category" id="category" onChange={categoryHandler}>
        <option value="sfw">sfw</option>
        <option value="nsfw">nsfw</option>
    </select>
    <div>
        {categoryNSFW && <NsfwCategories />}
        {!categoryNSFW && <SfwCategories />}
    </div>
  </div>;
}

export default Filter;
