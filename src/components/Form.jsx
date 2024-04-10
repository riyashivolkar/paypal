import { options, annualSales, papayAcc } from "../constants";
import Input from "./Input";

const Form = () => {
  return (
    <form className="s mx-auto w-full  text-gray-800 px-4 py-10  ">
      <h1 className=" text-xl lg:text-2xl font-semibold mb-1">Get Started</h1>
      <p className=" break-words mb-6 lg:text-sm text-xs ">
        Tell us a little about your business so we can connect you with right
        people.
      </p>

      <div className="mb-5">
        <input
          type="first-name"
          id="first-name"
          className="shadow-sm  placeholder-gray-500 bg-gray-50 border border-gray-400  text-xs lg:text-sm rounded-sm focus:ring-[#08246c] focus:border-[#08246c] block w-full p-2.5   "
          placeholder="First name*"
          required
        />
      </div>
      <div className="mb-5">
        <input
          type="last-name"
          id="last-name"
          className="shadow-sm  placeholder-gray-500 bg-gray-50 border border-gray-400  text-xs lg:text-sm rounded-sm focus:ring-[#08246c] focus:border-[#08246c] block w-full p-2.5   "
          placeholder="Last name*"
          required
        />
      </div>
      <div className="mb-5">
        <input
          type="work-email"
          id="work-email"
          className="shadow-sm  placeholder-gray-500 bg-gray-50 border border-gray-400  text-xs lg:text-sm rounded-sm focus:ring-[#08246c] focus:border-[#08246c] block w-full p-2.5   "
          placeholder="Work email*"
          required
        />
      </div>
      <div className="mb-5">
        <input
          type="company-name"
          id="company-name"
          placeholder="Company name*"
          className="shadow-sm  placeholder-gray-500 bg-gray-50 border border-gray-400  text-xs lg:text-sm rounded-sm focus:ring-[#08246c] focus:border-[#08246c] block w-full p-2.5   "
          required
        />
      </div>
      <div className="mb-5">
        <input
          type="company-website"
          id="company-website"
          placeholder="Company website*"
          className="shadow-sm  placeholder-gray-500 bg-gray-50 border border-gray-400  text-xs lg:text-sm rounded-sm focus:ring-[#08246c] focus:border-[#08246c] block w-full p-2.5   "
          required
        />
      </div>

      <div className="mb-5">
        <Input label="Countries*" data={options} />
      </div>
      <div className="mb-5">
        <Input label="Estimated annual sales*" data={annualSales} />
      </div>
      <div className="mb-5">
        <Input
          label="Do you already have a PayPal business account*"
          data={papayAcc}
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#08246c] "
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-xs font-medium text-gray-800 mb-5"
        >
          I have read and accepted the{" "}
          <a href="#" className="text-[#2596be] hover:underline ">
            PayPal Private Policy.
          </a>
          <br />
          <div className="mt-5">
            <span className="text-wrap">
              I consent to PayPal contacting me by phone or by email, and to
              sending me product or industry information relevant to my query. I
              know I can unsubscribe at any time.
            </span>
          </div>
        </label>
      </div>
      <div className=" flex items-center justify-center flex-col gap-3">
        <button
          type="submit"
          className="text-white w-3/4 rounded-full bg-[#2596be] hover:bg-[#08246c] focus:ring-4 focus:outline-none focus:ring-[#08246c] font-medium text-sm px-5 py-2.5 text-center "
        >
          Submit
        </button>
        Required fields*
      </div>
    </form>
  );
};

export default Form;
