import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpenl={!!props.selectedOPtion}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>okay</button>
  </Modal>
);
export default OptionModal;
