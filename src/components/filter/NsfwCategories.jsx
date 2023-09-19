/* eslint-disable react/prop-types */
function NsfwCategories(props) {
    const onChangeHandler = e => {
        props.onChange(e);
      }

    return (
        <select onChange={onChangeHandler}>
            <option value="waifu">waifu</option>
            <option value="neko">neko</option>
            <option value="trap">trap</option>
            <option value="blowjob">blowjob</option>
        </select>
    )
}

export default NsfwCategories