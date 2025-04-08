import { SecondaryButtonProps } from "./types";

export const SecondaryButton = ({ content }: SecondaryButtonProps) => {
  return (
    <button className="px-5 py-3 border border-gray-300 text-gray-700 rounded-md text-sm font-medium bg-white hover:bg-gray-100 w-full sm:w-auto">
      { content }
    </button>
  );
};