import { useState, useEffect } from "react";

function useDateFormat(initialDate) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (initialDate) {
      const dateObj = new Date(initialDate);
      const day = dateObj.getDate().toString().padStart(2, "0");
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObj.getFullYear().toString().slice(2);
      setFormattedDate(`${day}/${month}/20${year}`);
    }
  }, [initialDate]);

  return formattedDate;
}

export default useDateFormat;
