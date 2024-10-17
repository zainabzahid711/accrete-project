"use client";
import Card from "./card/card";
import CompassionIcon from "@/public/homePage/svg/compassion.svg";
import ExcellenceIcon from "@/public/homePage/svg/excellence.svg";
import teamWork from "@/public/homePage/svg/teamwork.svg";
import integrity from "@/public/homePage/svg/integrity.svg";

const CardValues = () => {
  return (
    <section className="pt-0 md:px-28  px-10">
      <h4 className="mb-8 text-black font-bold text-center md:text-5xl text-xl">
        Our Values
      </h4>
      <div className="flex items-center justify-center flex-col gap-14">
        <div className="flex md:flex-row flex-col gap-16">
          <Card
            icon={CompassionIcon}
            text="Compassion"
            description="We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one."
          />
          <Card
            icon={ExcellenceIcon}
            text="Excellence"
            description="We commit to providing the highest quality care by continually improving our services and expertise."
          />
        </div>
        <div className="flex md:flex-row flex-col gap-16">
          <Card
            icon={integrity}
            text="Integrity"
            description="We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution."
          />
          <Card
            icon={teamWork}
            text="TeamWork"
            description="We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients."
          />
        </div>
      </div>
    </section>
  );
};

export default CardValues;
