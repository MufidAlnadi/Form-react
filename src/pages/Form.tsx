import { useForm } from "react-hook-form";
import { useState } from "react";
interface FormProps {
  Name: string;
  accountNumber: string;
  accountType: string;
}
const Form = () => {
  const form = useForm<FormProps>();
  const [formArr, setFormArr] = useState<FormProps[]>([]);

  const { register, handleSubmit } = form;
  const onSubmit = (data: FormProps) => {
    // const formDataArr = Object.values(data);
    setFormArr([...formArr, data]);
    localStorage.setItem("formData", JSON.stringify([...formArr, data]));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="Name" className="block mb-2">
          Customer Name
        </label>
        <input
          type="text"
          id="Name"
          {...register("Name")}
          className="w-full border border-gray-400 py-2 px-3 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="accountNumber" className="block mb-2">
          Account Number
        </label>
        <input
          type="text"
          id="accountNumber"
          {...register("accountNumber")}
          className="w-full border border-gray-400 py-2 px-3 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="accountyType" className="block mb-2">
          Account Type
        </label>
        <input
          type="text"
          id="accountType"
          {...register("accountType")}
          className="w-full border border-gray-400 py-2 px-3 rounded-lg"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
