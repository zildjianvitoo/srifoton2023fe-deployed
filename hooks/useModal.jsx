import React, { useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageHeader, setMessageHeader] = useState("");

  return {
    showModal,
    setShowModal,
    message,
    setMessage,
    messageHeader,
    setMessageHeader,
  };
}
