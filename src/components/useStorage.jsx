import React, { useEffect, useState } from "react";

// the custom hook, use storage accepts two parameters, keyvalue and initial content
const useStorage = (keyValue, content = "") => {
  const [storedContent, setStoredContent] = useState(content);

  // useEffect hook to update the local storage and session storage each thime the input value changes
  useEffect(() => {
    localStorage.setItem(keyValue, JSON.stringify(storedContent));
    sessionStorage.setItem(keyValue, JSON.stringify(storedContent));
  }, [keyValue, storedContent]);

  // returning the stored content, i.e. the state and the update function
  return [storedContent, setStoredContent];
};

export default useStorage;
