import { useEffect, useState } from "react";

interface FormData {
  Name: string;
  accountNumber: string;
  accountType: string;
}

const CardRender = () => {
  const [formArr, setFormArr] = useState<FormData[]>([]);

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      setFormArr(JSON.parse(formData));
    }
  }, [formArr]);

  const handleRemove = (index: number) => {
    const newFormArr = [...formArr];
    newFormArr.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(newFormArr));
    setFormArr(newFormArr);
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
      {formArr.map((form, index) => (
        <div
          key={index + 1}
          className="bg-white rounded-lg shadow-md p-4 text-gray-800 "
        >
          <div className="font-bold mb-2">ID #{index + 1}</div>
          <div className="mb-2">
            <span className="font-bold mr-2">Customer Name:</span>
            {form.Name}
          </div>
          <div className="mb-2">
            <span className="font-bold mr-2">Account Number:</span>
            {form.accountNumber}
          </div>
          <div className="mb-2">
            <span className="font-bold mr-2">Account Type:</span>
            {form.accountType}
          </div>
          <button
            onClick={() => handleRemove(index)}
            className="
    bg-red-500 
    hover:bg-red-700 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded-full 
    transition 
    cursor-pointer
    
  "
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardRender;
