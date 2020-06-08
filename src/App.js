import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <GlobalStyle />
    </>
  );
};

export default App;
