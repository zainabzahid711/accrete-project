interface BuTTonProps {
  text: string;
}

const Button = (props: BuTTonProps) => {
  return (
    <>
      <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 font-semibold rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        {props.text}
      </button>
    </>
  );
};

export default Button;
