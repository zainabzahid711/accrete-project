import iconArrow from "@/public/homePage/svg/IconArrows.svg";

interface StudyProps {
  count: number;
  text: string;
  description: string;
}

const CaseStudyCard: React.FC<StudyProps> = ({ count, text, description }) => {
  return (
    <div className="flex bg-blue-100 p-5 md:p-10 w-[100%] items-center">
      {/* Count Number on the Left */}
      <div className="icon-section flex-shrink-0 mr-6">
        <div className="icon-number">{count}</div>
      </div>

      {/* Text Section */}
      <div className="text-section flex-grow">
        <h3 className="text-blue-700 font-sans text-xl md:text-3xl font-bold">
          {text}
        </h3>
        <p className="mt-3">{description}</p>
      </div>

      {/* Arrow Icon on the Right */}
      <div className="arrow-icon flex-shrink-0 ml-6 cursor-pointer">
        <img src={iconArrow.src} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default CaseStudyCard;
