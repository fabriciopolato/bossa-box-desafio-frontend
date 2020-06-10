import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context/Context";

const MainContent = () => {
  const { toolsRepository } = useContext(Context);
  const filteredTools = toolsRepository.map((tool) => (
    <Card key={tool.id} {...tool} />
  ));
  return filteredTools;
};

export default MainContent;
