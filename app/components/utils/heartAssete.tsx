import heartIcon from "@/public/homePage/heroIcon.png";
const HeartAssete = () => {
  return (
    <>
      <div className="animate-heartbeat">
        <img className="opacity-80 w-10 md:w-14" src={heartIcon.src} />
      </div>
    </>
  );
};

export default HeartAssete;
