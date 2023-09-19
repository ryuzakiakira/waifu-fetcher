/* eslint-disable react/prop-types */
import classes from "./ShowImg.module.css";

function ShowImg(props) {
  const img = `${props.img}`

  return <img src={img} alt="waifu IMG" className={classes.display} />;
}

export default ShowImg;
