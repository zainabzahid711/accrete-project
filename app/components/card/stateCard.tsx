import Image from "next/image";
import IncrementingNumber from "../utils/incrementingNums";

interface StatCardProps {
  src: string;
  alt: string;
  targetValue: number;
  description: string;
  showPercentage?: boolean;
  showGreaterThan?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  src,
  alt,
  targetValue,
  description,
  showPercentage = false,
  showGreaterThan = false,
}) => (
  <div className="flex justify-center items-center gap-5">
    <div className="relative w-8 md:w-8">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={32} // Base width for w-8
        height={32} // Base height for a square aspect ratio
        className="opacity-70"
      />
    </div>
    <div className="flex flex-col md:gap-2 justify-center items-center">
      <p className="font-bold md:text-6xl text-2xl">
        <IncrementingNumber
          targetValue={targetValue}
          duration={2000}
          showPercentage={showPercentage}
          showGreaterThan={showGreaterThan}
        />
      </p>
      <p className="text-black font-serif text-sm 2xl:text-lg w-[100%]">
        {description}
      </p>
    </div>
  </div>
);

export default StatCard;
