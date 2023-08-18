import { useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ErrorMessage from "./ErrorMessage";
import { toast } from "react-toastify";

export default function InputFile({
  labelText,
  labelFor,
  setProof,
  errorMessage,
}) {
  const [image, setImage] = useState(null);
  const [wrongType, setWrongType] = useState(false);

  const uploadImage = (e) => {
    const selectedImage = e.target.files[0];
    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/svg",
      "image/pdf",
    ];
    const ALLOWED_SIZE = 2000000;
    if (
      selectedImage &&
      ALLOWED_TYPES.includes(selectedImage.type) &&
      selectedImage.size <= ALLOWED_SIZE
    ) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
      setWrongType(false);
      setProof(selectedImage);
      toast.success("Berhasil mengunggah file");
    } else if (!selectedImage) {
      return;
    } else if (selectedImage.size > ALLOWED_SIZE) {
      setWrongType(true);
      toast.error("Ukuran file terlalu besar");
    } else if (!ALLOWED_TYPES.includes(selectedImage.type)) {
      setWrongType(true);
      toast.error("Format file tidak didukung");
    } else {
      return;
    }
  };

  const removeImage = () => {
    setProof(null);
    setImage(null);
  };

  const isRequiredFImage = () => {
    if (labelFor === "idCard2") {
      return false;
    } else if (labelFor === "idCard3") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex flex-col ">
      <label
        htmlFor="dropzone-file"
        className="text-lg lg:text-xl font-medium text-[#494B7C] dark:text-white "
      >
        {labelText}
        {isRequiredFImage() && (
          <span className=" text-[#F86E45] dark:text-[#D5DA00]">*</span>
        )}
      </label>
      <div className={"flex items-center w-full z-10 mt-1 font-sans  "}>
        <label
          htmlFor={labelFor}
          className="flex flex-col items-center w-full p-6 mx-auto text-center  bg-transparent border border-black dark:border-[#E0E0E0] cursor-pointer rounded-xl"
        >
          <div className=" h-[7.5rem] flex items-center justify-center">
            <div className="flex items-center justify-center">
              {image ? (
                <div className="flex w-full ">
                  <div className="relative flex items-center justify-center w-full ">
                    <img
                      src={image}
                      alt="image yang diupload"
                      className="object-contain max-w-[240px]  lg:max-w-[280px] md:max-w-sm rounded-md max-h-[10rem] md:max-h-[10rem] z-10"
                    />
                  </div>
                  <div className="flex justify-end " onClick={removeImage}>
                    <AiOutlineClose className="absolute z-40 text-lg font-semibold text-black translate-x-5 dark:text-white " />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 border border-[#D0D0D0]  dark:border-none dark:bg-transparent py-1 px-4  rounded-md">
                  <BsImage className="dark:text-white" />
                  <p className="text-sm font-medium dark:text-white">Unggah</p>
                </div>
              )}
            </div>
          </div>
          <input
            id={labelFor}
            type="file"
            className="hidden"
            accept="image/png, image/jpeg, image/jpg, image/heic"
            onChange={uploadImage}
          />
        </label>
      </div>
      {wrongType && <ErrorMessage message="Ukuran File terlalu besar" />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
