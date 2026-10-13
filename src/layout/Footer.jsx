function Footer() {
  return (
    <footer className="bg-gray-50 mt-30 relative text-center">
      <img
        className="absolute top-0 w-full lg:hidden"
        src="./images/bg-pattern-footer-mobile.svg"
        alt=""
      />
      <img
        className="absolute top-0  hidden lg:block"
        src="./images/bg-pattern-footer-desktop.svg"
        alt=""
      />

      <div className="relative z-10 pt-23 space-y-4 lg:flex lg:justify-between lg:items-center lg:max-w-330 lg:mx-auto lg:p-13 lg:pb-5  ">
        <img
          className="w-28 mx-auto lg:mx-0"
          src="./images/logo.svg"
          alt="logo"
        />
        <div className="flex gap-5 items-center justify-center p-5">
          <img src="./images/icon-facebook.svg" alt="facebook icon" />
          <img src="./images/icon-twitter.svg" alt="twitter icon" />
          <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
          <img src="./images/icon-instagram.svg" alt="instagram icon" />
        </div>
      </div>
      <hr className="mt-6 border-gray-300 w-[90%] mx-auto lg:mt-0" />
      <div className="space-y-9 mt-10 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] lg:text-start lg:px-15 xl:px-19">
        <div className=" ">
          <p className="text-gray-700 uppercase text-sm bold"> Our company</p>
          <div className="mt-6 flex flex-col gap-3">
            <a className="text-gray-950 uppercase "> How we work</a>
            <a className="text-gray-950 uppercase "> Why Insure?</a>
            <a className="text-gray-950 uppercase ">View plans</a>
            <a className="text-gray-950 uppercase "> Reviews</a>
          </div>
        </div>
        <div className=" ">
          <p className="text-gray-700 uppercase text-sm"> Help me</p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="text-gray-950 uppercase">
              {" "}
              FAQ
            </a>
            <a href="#" className="text-gray-950 uppercase">
              {" "}
              Terms of use
            </a>
            <a href="#" className="text-gray-950 uppercase">
              Privacy policy
            </a>
            <a href="#" className="text-gray-950 uppercase">
              {" "}
              Cookies
            </a>
          </div>
        </div>
        <div>
          <p className="text-gray-700 uppercase text-sm"> Contact</p>

          <div className="mt-6 flex flex-col gap-3">
            <a className="text-gray-950 uppercase"> Sales</a>
            <a className="text-gray-950 uppercase"> Support</a>
            <a className="text-gray-950 uppercase">Live chat</a>
          </div>
        </div>
        <div>
          <p className="text-gray-700 uppercase "> Others</p>

          <div className="mt-6 flex flex-col gap-3">
            <a className="text-gray-950 uppercase"> Careers</a>
            <a className="text-gray-950 uppercase"> Press</a>
            <a className="text-gray-950 uppercase"> Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
