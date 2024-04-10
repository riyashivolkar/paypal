import { paypal, usaflag } from "../assets/icons";
import { footer1, footer2, footer3 } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col ml-6 lg:ml-0 text-gray-800 text-sm pb-16 justify-start w-full px-2 max-container">
      <div className="mb-4 md:mb-8 lg:mb-0">
        <img src={paypal} width={130} height={30} alt="paypal" />
      </div>
      <div className="flex flex-wrap  md:flex-row py-2 font-bold border-b border-gray-300 justify-between text-[#08246c]">
        <ul className="flex flex-row flex-wrap  md:flex-row  ">
          {footer1.map((value, index) => (
            <li key={index} className="lg:mr-5 mr-3  mb-2 md:mb-0">
              {value.value}
            </li>
          ))}
        </ul>
        <img
          src={usaflag}
          className="mr-5 mb-2 md:mb-0"
          width={30}
          height={30}
          alt="usa"
        />
      </div>
      <div className="flex  flex-wrap md:flex-row py-2 justify-between text-[#08246c]">
        <ul className="flex  font-bold flex-wrap md:flex-row ">
          {footer2.map((value, index) => (
            <li key={index} className="lg:mr-5 mr-3 mb-2 md:mb-0">
              {value.value}
            </li>
          ))}
        </ul>
        <ul className="flex flex-row">
          <li className="mr-5 text-gray-500 mb-2 md:mb-0">© 1999-2022</li>
          {footer3.map((value, index) => (
            <li key={index} className="lg:mr-5 mr-3 mb-2 md:mb-0">
              {value.value}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
