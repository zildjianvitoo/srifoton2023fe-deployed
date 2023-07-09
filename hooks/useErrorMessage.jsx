import { useState } from "react";

export default function useErrorMessage(defaultValue) {
  const [errorMessage, setErrorMessage] = useState(defaultValue);

  return [errorMessage, setErrorMessage];
}
