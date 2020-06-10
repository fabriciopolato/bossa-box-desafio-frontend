import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context/Context";

const MainContent = () => {
  const { toolsRepository, searchString } = useContext(Context);

  return toolsRepository
    .filter((elem) =>
      elem.title.toLowerCase().includes(searchString.toLowerCase())
    )
    .map((tool) => <Card key={tool.id} {...tool} />);
};

export default MainContent;
