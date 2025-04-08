import { SectionHeaderProps } from './types'

export const SecondaryTitle = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mb-10 text-center max-w-4xl mx-auto">
      <p className="text-3xl md:text-4xl font-semibold">
        {title}
      </p>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg px-2 sm:px-6 md:px-8">
        {subtitle}
      </p>
    </div>
  );
};