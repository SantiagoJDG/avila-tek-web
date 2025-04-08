import { PrimaryButtonProps } from './types'

export const PrimaryButton = ({ content }: PrimaryButtonProps) => {
  return (
    <button className="px-5 py-3 bg-[#7F56D9] text-white rounded-md text-sm font-medium hover:bg-[#6941C6] w-full sm:w-auto">
      {content}
    </button>
  );
};