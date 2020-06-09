import React, { useContext, useState } from "react";
import { Content, styleModal } from "./styles";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import { Context } from "../../../Context";
import Modal from "react-modal";

const Card = ({ title, link, description, tags, id }) => {
  const { handleRemove } = useContext(Context);
  const [modal, setModal] = useState(false);

  const tag = tags.map((item) => `#${item} `);

  const body = (
    <>
      <h2>Remove tool</h2>
      <p>Are you sure you want to remove {title}?</p>
      <div className="buttons">
        <button onClick={() => setModal(false)}>Cancel</button>
        <button
          onClick={() => {
            handleRemove(id);
            setModal(false);
          }}
        >
          Yes, remove
        </button>
      </div>
    </>
  );

  Modal.setAppElement("#root");
  return (
    <Content>
      <div>
        <a href={link}>
          <h4>{title}</h4>
        </a>
        <button onClick={() => setModal(true)}>
          <img width={10} src={deleteIcon} alt="delete" /> remove
        </button>
        <Modal isOpen={modal} style={styleModal}>
          {body}
        </Modal>
      </div>
      <p>{description}</p>
      <p>{tag}</p>
    </Content>
  );
};

export default Card;
