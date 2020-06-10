import React, { useContext } from "react";
import { Content } from "./styles";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import { Context } from "../../../Context/Context";
import Modal from "react-modal";
import { styleModal } from "../../../Context/styles";

const Card = ({ title, link, description, tags, id }) => {
  const { handleRemove, modalRemove, setModalRemove } = useContext(Context);

  const tag = tags.map((item) => `#${item} `);

  const body = (
    <>
      <h2>Remove tool</h2>
      <p>Are you sure you want to remove {title}?</p>
      <div className="buttons">
        <button onClick={() => setModalRemove(false)}>Cancel</button>
        <button
          onClick={() => {
            handleRemove(id);
            setModalRemove(false);
          }}
        >
          Yes, remove
        </button>
      </div>
    </>
  );

  Modal.setAppElement("#root");
  return (
    <>
      <Content>
        <div>
          <a href={link}>
            <h4>{title}</h4>
          </a>
          <button onClick={() => setModalRemove(true)}>
            <img width={10} src={deleteIcon} alt="delete" /> remove
          </button>
        </div>
        <p>{description}</p>
        <p>{tag}</p>
      </Content>
      <Modal isOpen={modalRemove} style={styleModal}>
        {body}
      </Modal>
    </>
  );
};

export default Card;
