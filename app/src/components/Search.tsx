import React from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { placeholders } from "@/constants";

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};
const Search = ({ className }: { className: string }) => {
  return (
    <>
      <div
        className={`h-full w-screen p-2 px-4 para flex md:hidden justify-center items-center flex-col `}
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default Search;
