function Footer() {
  return (
    <footer className="bg-gray-50 mt-30 relative text-center">
      <img
        className="absolute top-0 w-full lg:hidden"
        src="./images/bg-pattern-footer-mobile.svg"
        alt="footer mobile pattern"
      />
      <img
        className="absolute top-0  hidden lg:block"
        src="./images/bg-pattern-footer-desktop.svg"
        alt="footer desktop pattern"
      />

      <div className="relative z-10 pt-23 space-y-4 lg:flex lg:justify-between lg:items-center lg:max-w-330 lg:mx-auto lg:p-13 lg:pb-5  ">
        <img
          className="w-28 mx-auto lg:mx-0"
          src="./images/logo.svg"
          alt="logo"
        />
        <div className="flex gap-5 items-center justify-center p-5">
          <a href="#" ><img src="./images/icon-facebook.svg" alt="facebook icon" /></a> 
          <a href="#"></a> <img src="./images/icon-twitter.svg" alt="twitter icon" />
          <a href="#"></a> <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
          <a href="#"></a> <img src="./images/icon-instagram.svg" alt="instagram icon" />
        </div>
      </div>
      <hr className="mt-6 border-gray-300 w-[90%] mx-auto lg:mt-0" />
      <div className="space-y-9 mt-10 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] lg:text-start lg:px-15 xl:px-19">
        <div className=" ">
          <p className="text-gray-700 uppercase text-sm bold"> Our company</p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="text-gray-950 uppercase hover:underline "> How we work</a>
            <a href="#" className="text-gray-950 uppercase hover:underline "> Why Insure?</a>
            <a href="#" className="text-gray-950 uppercase hover:underline ">View plans</a>
            <a href="#" className="text-gray-950 uppercase hover:underline "> Reviews</a>
          </div>
        </div>
        <div>
          <p className="text-gray-700 uppercase text-sm"> Help me</p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="text-gray-950 uppercase hover:underline"> FAQ </a>
            <a href="#" className="text-gray-950 uppercase hover:underline"> Terms of use </a>
            <a href="#" className="text-gray-950 uppercase hover:underline"> Privacy policy</a>
            <a href="#" className="text-gray-950 uppercase hover:underline"> Cookies</a>
          </div>
        </div>
        <div>
          <p className="text-gray-700 uppercase text-sm"> Contact</p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="text-gray-950 uppercase hover:underline"> Sales</a>
            <a href="#" className="text-gray-950 uppercase hover:underline"> Support</a>
            <a href="#" className="text-gray-950 uppercase hover:underline">Live chat</a>
          </div>
        </div>
        <div>
          <p className="text-gray-700 uppercase "> Others</p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="text-gray-950 uppercase hover:underline"> Careers</a>
            <a href="#" className="text-gray-950 uppercase hover:underline"> Press</a>
            <a href="#" className="text-gray-950 uppercase hover:underline"> Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
