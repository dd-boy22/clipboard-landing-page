import Buttonn from "../../components/Buttonn";

function Hero() {
  return (
    <section className="relative bg-gray-950 grid lg:grid-cols-2 ">
      <img
        className="hidden lg:block absolute left-0 -bottom-60 h-100 "
        src="./images/bg-pattern-intro-left-desktop.svg"
        alt=""
      />

      <img
        className="w-full lg:hidden "
        src="./images/image-intro-mobile.jpg"
        alt=""
      />

      <div className="relative h-137 text-white py-12  text-center md:pl-18 lg:text-left lg:pl-24">
        <img
          className=" absolute top-0 left-0 lg:hidden "
          src=" ./images/bg-pattern-intro-left-mobile.svg"
          alt=""
        />

        <div className="max-w-xl mx-auto lg:mx-0 lg:space-y-6">
          <hr className="hidden lg:block w-30 " />
          <h1 className="pt-9 text-5xl md:text-7xl bold ">
            Humanizing your insurance.
          </h1>
          <p className="text-[19px] p-5 md:p-3 md:pt-8 lg:p-0">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          
          <Buttonn
           to='/viewPlans'
            className={
              " border-white text-xl uppercase px-6 py-3 md:mt-6 hover:bg-white hover:text-gray-950 transition-colors rounded "
            }
            >View plans</Buttonn>
           
        </div>

        <img
          className="absolute -bottom-50 right-0 z-10 lg:hidden"
          src="./images/bg-pattern-intro-right-mobile.svg"
          alt="bg pattern intro right mobile"
        />
      </div>

      <img
        className=" hidden w-full md:w-110  lg:block absolute right-35 -bottom-33.75 "
        src="./images/image-intro-desktop.jpg"
        alt=""
      />
      <img
        className="hidden lg:block top-0 right-0 absolute h-125  "
        src="./images/bg-pattern-intro-right-desktop.svg"
        alt=""
      />
    </section>
  );
}

export default Hero;
