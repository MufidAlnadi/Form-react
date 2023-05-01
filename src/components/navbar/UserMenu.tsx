import { Outlet, Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={() => {}}
          className="
          
            hidden
            md:block
            text-md
            font-bold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Customer Input
        </div>
        <div
          onClick={() => {}}
          className="
             hidden
            md:block
            text-md
            font-bold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Accounts
        </div>
        <div
          onClick={() => {}}
          className="
             hidden
            md:block
            text-md
            font-bold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          About
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
