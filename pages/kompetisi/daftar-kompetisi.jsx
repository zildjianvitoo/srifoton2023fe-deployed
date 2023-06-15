import { useState } from "react";
import {
  FirstField,
  SecondField,
  ThirdField,
} from "@/components/Kompetisi/DaftarKompetisi";

export default function DaftarKompetisi() {
  const [field, setField] = useState(1);

  return (
    <div className="bg-[#FCF2FF] dark:bg-[#02053E] w-full overflow-x-hidden">
      <div className="p-8 lg:px-24"> {field === 1 && <FirstField />}</div>
    </div>
  );
}
