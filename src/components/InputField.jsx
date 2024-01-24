import useStorage from "./useStorage";

export default function InputField() {

  // check the local storage for stored value 
  let storedValue = JSON.parse(localStorage.getItem("keyValue"));

  // the custom hook, useStorage takes two parameters
  // 1. the key's value 
  // 2. the initial content 
  // it returns the initial content and a update function to set the content, these two are returned in an array
  const [content, updateItem] = useStorage(
    "keyValue",
    storedValue ? storedValue : ""
  );

  // the handle change function 
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue != undefined) {
      updateItem(newValue);
    }
  };


  return (
    <div id="input">
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        value={content}
      />
      <p>Type something and check the local storage :)</p>
    </div>
  );
}
