import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-20" ref={dropdownRef}>
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
        <div className="absolute mt-2 border border-gray-200 rounded-xl shadow-md w-52">
          <ul>
            <li>
              <Link href="/products/vscode" className="flex justify-between items-center py-2 px-3">
                <span className="text-gray-800">AI CodeBuddy</span>
                <Icons.chevronRight size={18} strokeWidth={3} className="mt-1" />
              </Link>
            </li>
            <li className="border-t border-gray-200"></li> 
            <li>
              <Link href="/coming-soon" className="flex justify-between items-center py-2 px-3">
                <span className="text-gray-800">AI QualityGuard  <span className="font-bold text-teal-500">(Coming Soon)</span></span>
                <Icons.chevronRight size={30} strokeWidth={3} className="mt-1" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
