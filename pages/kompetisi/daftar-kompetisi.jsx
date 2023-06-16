import {
  FirstField,
  SecondField,
  ThirdField,
} from "@/components/Kompetisi/DaftarKompetisi";
import { useFieldNumber } from "@/store/useFieldNumber";

export default function DaftarKompetisi() {
  const { fieldNumber } = useFieldNumber();

  return (
    <div className="bg-[#FCF2FF] dark:bg-[#02053E] w-full overflow-x-hidden">
      <div className="p-8 lg:px-24">
        {fieldNumber === 1 && <FirstField />}
        {fieldNumber === 2 && <SecondField />}
        {fieldNumber === 3 && <ThirdField />}
      </div>
    </div>
  );
}
