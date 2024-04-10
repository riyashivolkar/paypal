import { enterprise1, enterprise2, more, small1, small2 } from "../constants";

const Business = () => {
  return (
    <div className="flex flex-col text-black ml-10 gap-8 p-2 max-container md:flex-row">
      <div className="w-full lg:w-1/3 ">
        <h1 className="border-b border-gray-300 py-1 mb-6 text-[#08246c] font-bold">
          Small-to-Medium Business
        </h1>
        <div className="flex flex-row gap-2 font-semibold text-gray-700 text-sm justify-between ">
          <ul>
            {small1.map((value, index) => (
              <p key={index} className="my-1">
                {value.value}
              </p>
            ))}
          </ul>
          <ul>
            {small2.map((value, index) => (
              <p key={index} className="my-1">
                {value.value}
              </p>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/3 ">
        <h1 className="border-b border-gray-300 py-1 mb-6 text-[#08246c] font-bold">
          Enterprise
        </h1>
        <div className="flex flex-row gap-2 font-semibold text-gray-700 text-sm justify-between ">
          <ul>
            {" "}
            {enterprise1.map((value, index) => (
              <p key={index} className="my-1">
                {value.value}
              </p>
            ))}
          </ul>
          <ul>
            {enterprise2.map((value, index) => (
              <p key={index} className="my-1">
                {value.value}
              </p>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/6 md:w-1/3 ">
        <h1 className="border-b border-gray-300 py-1 mb-6 text-[#08246c] font-bold">
          More
        </h1>
        <div className="flex flex-col gap-2 font-semibold text-gray-700 text-sm">
          {more.map((value, index) => (
            <p key={index} className="">
              {value.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
