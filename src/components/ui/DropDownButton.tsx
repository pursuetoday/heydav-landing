import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex justify-center items-center"
      >
        <span className="mr-1 font-[500] text-[#343434]">Products</span>
        <Icons.chevronDown 
            size={11} 
            className={cn(
                isOpen ? "transform rotate-180" : "",
                'mt-1'
            )} 
        />
      </button>
      {isOpen && (
        <div className="absolute  mt-2 bg-white border border-gray-200 rounded-xl shadow-md w-52">
          <ul>
            <li>
              <Link href="/products/vscode" className="flex justify-center items-center py-2">
                <span className="text-gray-800">VS Code Integration</span>
                <Icons.chevronRight size={18} className="mt-1" />
              </Link>
            </li>
            <li className="border-t border-gray-200"></li> 
            <li>
              <Link href="/products/github" className="flex justify-center items-center py-2">
                <span className="text-gray-800">Git Hub Integration</span>
                <Icons.chevronRight size={18} className="mt-1" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
