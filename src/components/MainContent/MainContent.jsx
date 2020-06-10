import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context/Context";

const MainContent = () => {
  const { toolsRepository } = useContext(Context);

  return toolsRepository.map((tool) => <Card key={tool.id} {...tool} />);
};

export default MainContent;
