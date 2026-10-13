function Features() {
  return (
    <section className="max-w-3xl lg:max-w-5xl mx-auto mt-30  px-5 py-12  text-center grid gap-10 lg:mt-50 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] lg:text-start">
      <hr className="w-40 mx-auto lg:mx-0 text-gray-400 col-span-full" />
      <h1 className="font-bold text-5xl pt-9 text-gray-800 col-span-full"> We’re different</h1>
      <div className="space-y-4 p-4 mt-10 sm:text-start ">
        <img
          className="w-[86] mx-auto sm:mx-0 md:mx-0 lg:mx-0"
          src="./images/icon-snappy-process.svg"
          alt=""
        />
        <h2 className="text-3xl font-bold text-gray-800">Snappy Process</h2>
        <p className="text-gray-700">
          Our application process can be completed in minutes, not hours. Don’t
          get stuck filling in tedious forms.
        </p>
      </div>

      <div className="space-y-4 p-4 mt-10 sm:text-start">
        <img
          className="w-[86] mx-auto sm:mx-0 md:mx-0 lg:mx-0"
          src="./images/icon-affordable-prices.svg"
          alt=""
        />
        <h2 className="text-3xl font-bold text-gray-800">Affordable Prices</h2>
        <p className="text-gray-700">
          We don’t want you worrying about high monthly costs. Our prices may be
          low, but we still offer the best coverage possible.
        </p>
      </div>

      <div className="space-y-4 p-4 mt-10 sm:text-start">
        <img
          className="w-[86] mx-auto sm:mx-0 md:mx-0 lg:mx-0"
          src="./images/icon-people-first.svg"
          alt=""
        />
        <h2 className="text-3xl font-bold text-gray-800"> People First</h2>
        <p className="text-gray-700">
          Our plans aren’t full of conditions and clauses to prevent payouts. We
          make sure you’re covered when you need it.
        </p>
      </div>
    </section>
  );
}

export default Features;
