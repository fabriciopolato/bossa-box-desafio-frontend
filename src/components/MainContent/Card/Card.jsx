import React, { useContext } from "react";
import { Content } from "./styles";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import { Context } from "../../../Context/Context";
// import { styleModal } from "../../../Context/styles";
import Modali, { useModali } from "modali";

const Card = ({ title, link, description, tags, id }) => {
  const [exampleModal, toggleExampleModal] = useModali();
  const { handleRemove } = useContext(Context);
  console.log(exampleModal);

  const tag = tags.map((item) => `#${item} `);

  const body = (
    <>
      <h2>Remove tool</h2>
      <p>Are you sure you want to remove {title}?</p>
      <div className="buttons">
        <button onClick={toggleExampleModal}>Cancel</button>
        <button
          onClick={() => {
            toggleExampleModal();
            handleRemove(id);
          }}
        >
          Yes, remove
        </button>
      </div>
    </>
  );

  return (
    <>
      <Content>
        <div>
          <a href={link}>
            <h4>{title}</h4>
          </a>
          <button onClick={toggleExampleModal}>
            <img width={10} src={deleteIcon} alt="delete" /> remove
          </button>
        </div>
        <p>{description}</p>
        <p>{tag}</p>
      </Content>
      <Modali.Modal {...exampleModal}>{body}</Modali.Modal>

      {/* style={styleModal} */}
      {/* <Modal open={modalRemove} onClose={() => setModalRemove(false)}>
        {body}
      </Modal> */}
    </>
  );
};

export default Card;
