const PaypalAssistant = () => {
  return (
    <div className=" absolute top-1/3  cursp  font-bold  text-sm    shadow-custom  rounded-t-lg  lg:right-[80px] right-[50px] px-8  flex justify-center items-center p-3 z-20  bg-white text-black">
      <h1>PayPal Assistant</h1>
      <svg
        className="w-2.5 h-2.5 ms-3 rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </div>
  );
};

export default PaypalAssistant;
