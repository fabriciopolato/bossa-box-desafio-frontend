import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [toolsRepository, setToolsRepository] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [modalRemove, setModalRemove] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [checked, setChecked] = useState(false);

  const port = 3000;
  const url = `http://localhost:${port}/tools`;

  useEffect(() => {
    const whereToQuery = checked ? "?tags_like=" : "?q=";
    axios
      .get(`${url}/${whereToQuery}${searchString}`)
      .then((resp) => {
        setToolsRepository(resp.data);
      })
      .catch((err) => console.log(err));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  const handleCheckboxClick = (checkboxRef) => {
    setChecked(checkboxRef.current.checked);
  };

  const handleAdd = (toolRefs) => {
    const { title, link, description, tags } = toolRefs;
    const formattedTags = tags.current.value.split(" ");
    const data = {
      title: title.current.value,
      link: link.current.value,
      description: description.current.value,
      tags: formattedTags,
    };

    const options = { headers: { "Content-Type": "application/json" } };

    axios.post(url, data, options);
  };

  const handleRemove = (id) => {
    setToolsRepository((prevTools) =>
      prevTools.filter((item) => item.id !== id)
    );
  };

  return (
    <Context.Provider
      value={{
        toolsRepository,
        handleRemove,
        setToolsRepository,
        setSearchString,
        searchString,
        modalRemove,
        setModalRemove,
        modalAdd,
        setModalAdd,
        handleAdd,
        url,
        handleCheckboxClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
