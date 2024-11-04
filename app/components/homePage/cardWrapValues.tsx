"use client";
import Card from "../card/card";
import CompassionIcon from "@/public/homePage/svg/compassion.svg";
import ExcellenceIcon from "@/public/homePage/svg/excellence.svg";
import teamWork from "@/public/homePage/svg/teamwork.svg";
import integrity from "@/public/homePage/svg/integrity.svg";

// Define the type for the card data
interface CardData {
  icon: { src: string }; // Allow passing React components for icons
  text: string;
  description: string;
}

// Define the array of card data with proper types
const cardData: CardData[] = [
  {
    icon: { src: CompassionIcon.src }, // Pass the SVG component directly
    text: "Integrity and Compliance",
    description:
      "We uphold ethical practices and comply fully with healthcare regulations, ensuring honesty and transparency.",
  },
  {
    icon: { src: ExcellenceIcon.src },
    text: "Customer-Centric Excellence",
    description:
      "We deliver tailored solutions, fostering strong client relationships through responsive support.",
  },
  {
    icon: { src: integrity.src }, // Use the SVG component directly
    text: "Technology-Driven Excellence",
    description:
      "We leverage cutting-edge technology to streamline processes, improve accuracy, and stay ahead in a rapidly evolving healthcare landscape.",
  },
  {
    icon: { src: teamWork.src },
    text: "Reliability and Accountability",
    description:
      "We ensure trust through consistent results and accountability, maximizing client revenue with precision.",
  },
];

const CardValues: React.FC = () => {
  return (
    <section className="md:pt-0 pt-16 md:px-28 px-10">
      <div className="text-center">
        <h4 className="animate-slide-up-fade hover-border mb-8 text-black font-bold text-center md:text-5xl text-xl">
          Our Values
        </h4>
      </div>
      <div className="flex items-center justify-center flex-col gap-14">
        {cardData
          .reduce((rows: CardData[][], card: CardData, index: number) => {
            if (index % 2 === 0) rows.push([]);
            rows[rows.length - 1].push(card);
            return rows;
          }, [])
          .map((row: CardData[], rowIndex: number) => (
            <div
              key={rowIndex}
              className="flex md:flex-row flex-col justify-center items-center gap-16"
            >
              {row.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  icon={card.icon} // This will now correctly receive the SVG component
                  text={card.text}
                  description={card.description}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default CardValues;
