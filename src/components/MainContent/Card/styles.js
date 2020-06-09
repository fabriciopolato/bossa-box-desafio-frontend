import styled from "styled-components";

export const styleModal = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    width: "250px",
    height: "250px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Content = styled.div`
  width: 600px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #333;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;

  span {
    color: red;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    &:nth-child(2) {
      margin-bottom: 10px;
    }

    &:nth-child(3) {
      font-weight: 600;
    }
  }
`;
