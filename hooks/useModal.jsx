import { useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageHeader, setModalMessageHeader] = useState("");

  return {
    showModal,
    setShowModal,
    modalMessage,
    setModalMessage,
    modalMessageHeader,
    setModalMessageHeader,
  };
}
