/* eslint-disable react/prop-types */
import { useState } from "react";
import SfwCategories from "./SfwCategories";
import NsfwCategories from "./NsfwCategories";

import classes from './Filter.module.css';

function Filter(props) {
  const [categoryNSFW, setCategoryNSFW] = useState(false);

  const categoryHandler = e => {
    if (e.target.value === "nsfw") {
      setCategoryNSFW(true);
    } else {
      setCategoryNSFW(false);
    }
  };

  const filterHandler = e => {
    const type = e.target.value;
    if (categoryNSFW) {
      props.fun('nsfw', type)
    } else {
      props.fun('sfw', type)
    }
  }

  return (
    <div className={classes.filter}>
      <select name="category" id="category" onChange={categoryHandler}>
        <option value="sfw">sfw</option>
        <option value="nsfw">nsfw</option>
      </select>
      <div>
        {categoryNSFW && <NsfwCategories onChange={filterHandler}/>}
        {!categoryNSFW && <SfwCategories onChange={filterHandler}/>}
      </div>
    </div>
  );
}

export default Filter;
