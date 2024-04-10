import { rightarrow } from "../assets/icons";
import Form from "../components/Form";
import PaypalAssistant from "../components/PaypalAssistant";

const Mid = () => {
  return (
    <div className="flex text-gray-800 ml-10  pb-[850px] md:pb-[150px] lg:pb-0  flex-col-reverse lg:flex-col justify-start w-full   gap-10 p-2 max-container xl:flex-row">
      <div className=" relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x lg:pt-24 pt-0">
        <h1 className="lg:text-3xl text-2xl tracking-wide  font-semibold mb-8">
          Some other ways to
          <br />
          connect with us
        </h1>
        <p className="mb-14   font-semibold  text-sm lg:text-lg">
          Want to speak with Sales right away?
          <h2 className=" mt-3 text-[#2596BE] font-bold">Call 877-794-7639</h2>
        </p>
        <p className="mb-14   font-semibold  text-sm lg:text-lg">
          Need help with your existing account?
          <h2 className=" mt-3 text-[#2596BE] font-bold">
            Vist our help center
            <img
              src={rightarrow}
              alt="rightarrow"
              width={50}
              height={10}
              className="inline-block px-2 relative z-10 lg:w-50 w-10"
            />
            {/* <div className=" bg-[#2596BE] w-5 h-5 rounded-full absolute top-8 left-[164px] z-0 opacity-25"></div> */}
          </h2>
        </p>
        <p className="mb-14   font-semibold  text-sm lg:text-lg">
          Want helpful business insights?
          <h2 className=" mt-3 text-[#2596BE] font-bold">
            Vist our business recource center
            <img
              src={rightarrow}
              alt="rightarrow"
              width={50}
              height={10}
              className="inline-block px-2 relative z-10 lg:w-50 w-10"
            />
          </h2>
        </p>
      </div>
      <div>
        <div className="border-2  shadow-xl z-10 rounded-md lg:w-[500px] md:[w-400px] w-[300px] border-white bg-white top-[800px] md:top-[300px] lg:top-60 right-[50px] md:right-[100px] lg:right-[150px] absolute">
          <Form />
        </div>
        <PaypalAssistant />
      </div>
    </div>
  );
};

export default Mid;
