/* eslint-disable react/prop-types */
function SfwCategories(props) {
  const onChangeHandler = (e) => {
    props.onChange(e);
  };

  return (
    <select onChange={onChangeHandler}>
      <option value="waifu">waifu</option>
      <option value="neko">neko</option>
      <option value="shinobu">shinobu</option>
      <option value="megumin">megumin</option>
      <option value="bully">bully</option>
      <option value="cuddle">cuddle</option>
      <option value="cry">cry</option>
      <option value="hug">hug</option>
      <option value="awoo">awoo</option>
      <option value="kiss">kiss</option>
      <option value="lick">lick</option>
      <option value="pat">pat</option>
      <option value="smug">smug</option>
      <option value="bonk">bonk</option>
      <option value="yeet">yeet</option>
      <option value="blush">blush</option>
      <option value="smile">smile</option>
      <option value="wave">wave</option>
      <option value="highfive">highfive</option>
      <option value="handhold">handhold</option>
      <option value="nom">nom</option>
      <option value="bite">bite</option>
      <option value="glomp">glomp</option>
      <option value="slap">slap</option>
      <option value="kill">kill</option>
      <option value="kick">kick</option>
      <option value="happy">happy</option>
      <option value="wink">wink</option>
      <option value="poke">poke</option>
      <option value="dance">dance</option>
      <option value="cringe">cringe</option>
    </select>
  );
}

export default SfwCategories;
