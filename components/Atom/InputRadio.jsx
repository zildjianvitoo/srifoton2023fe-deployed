export default function InputRadio() {
  return (
    <div className="flex flex-col text-black dark:text-[#EDEDED]">
      <p className="text-lg font-medium ">Jenis Kelamin</p>
      <div className="flex gap-8 mt-1">
        <div className="flex gap-2">
          <input
            type="radio"
            id="pria"
            value="pria"
            name="gender"
            className="scale-[1.3] cursor-pointer"
          />
          <label htmlFor="pria" className="font-medium ">
            Pria
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="wanita"
            value="wanita"
            name="gender"
            className="scale-[1.3] cursor-pointer"
          />
          <label htmlFor="wanita" className="font-medium ">
            Wanita
          </label>
        </div>
      </div>
    </div>
  );
}
