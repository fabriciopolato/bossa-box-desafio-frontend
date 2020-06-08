import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [toolsRepository, setToolsRepository] = useState([]);

  const port = 3000;
  const url = `http://localhost:${port}/tools`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => setToolsRepository(resp.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider value={{ toolsRepository }}>{children}</Context.Provider>
  );
};

export { ContextProvider, Context };
