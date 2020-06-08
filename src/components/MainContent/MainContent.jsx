import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context";

const MainContent = () => {
  const { toolsRepository } = useContext(Context);
  // const { title, link, description, tags } = toolsRepository;

  return toolsRepository.map((tool) => (
    <Card
      key={tool.id}
      title={tool.title}
      link={tool.link}
      description={tool.description}
      tags={tool.tags}
    />
  ));
};

export default MainContent;
