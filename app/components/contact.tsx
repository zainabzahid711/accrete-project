import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <section className="bg-black md:p-20 p-10 flex md:flex-row flex-col gap-3">
        <div className="bg-greyBackground flex md:w-[50%] w-[100%] p-10 rounded-sm items-center">
          <div className="bg-iconBackground rounded-full flex items-center justify-center h-12 w-12 mr-4">
            {" "}
            <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-white">PHONE</p>
            <p className="text-white">(678) 525-0996</p>
          </div>
        </div>

        <div className="bg-greyBackground flex md:w-[50%] w-[100%] p-10  rounded-sm items-center">
          {" "}
          <div className="bg-iconBackground rounded-full flex items-center justify-center h-12 w-12 mr-4">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-white">MAIL</p>
            <p className="text-white w-[100%]">info@accreteconcierge.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
