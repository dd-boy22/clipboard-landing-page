function Finding() {
  return (
    <section className="relative bg-gray-950 text-white h-90 text-center space-y-15 pt-5 md:pl-10 w-[90%] max-w-3xl lg:max-w-7xl mx-auto lg:flex lg:justify-between">
      <img
        className="absolute top-0 right-0 lg:hidden pointer-events-none"
        src="./images/bg-pattern-how-we-work-mobile.svg"
        alt=""
      />
      <img
        className="absolute top-0 right-0 hidden lg:block h-full pointer-events-none"
        src="./images/bg-pattern-how-we-work-desktop.svg"
        alt=""
      />

      <h1 className=" text-5xl pt-9 text-center  lg:text-7xl lg:text-start font-bold max-w-2xl lg:pt-20 ">
        {" "}
        Find out more about how we work
      </h1>
      <button className="relative border border-white text-xl uppercase px-6 py-3 lg:p-6 lg:my-auto cursor-pointer hover:bg-white hover:text-gray-950 rounded">
        HOW WE WORK
      </button>

      <div></div>
    </section>
  );
}

export default Finding;
