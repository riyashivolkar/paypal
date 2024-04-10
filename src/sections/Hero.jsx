const Hero = () => {
  return (
    <div className="flex justify-start items-center py-8 px-20 md:px-0 md:py-16  lg:px-[52px]">
      <div className="text-white text-left   md:ml-24 lg:ml-0 ">
        <h1 className="lg:text-4xl text-3xl md:leading-6  lg:leading-6 tracking-wide  font-semibold mb-10">
          Connect with our{" "}
          <span className="hidden lg:flex ">
            <br />
          </span>
          sales team
        </h1>
        <p className=" md:text-base  text-sm">
          Let&apos;s talk about how our payment solutions can help
          <span className="hidden md:flex ">
            <br />
          </span>
          grow your business.
        </p>
      </div>
    </div>
  );
};

export default Hero;
