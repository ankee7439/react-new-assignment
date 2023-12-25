const Banner = () => {
  return (
    <>
      <div className="container mt-12">
        <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-15px">
          <div className="h-[200px] md:h-[260px] bg-[url(https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg)] bg-cover bg-center rounded-xl p-8 md:p-16">
            <p className="text-topHeadingSecondary text-xl font-medium">
              Sale 20% off all store
            </p>
            <h2 className="text-topHeadingPrimary font-bold text-xl sm:text-3xl max-w-[240px]">
              Smartphone BLU G91 Pro 2023
            </h2>
            <a
              href="#"
              className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium"
            >
              Shop Now
            </a>
          </div>
          <div className="h-[260px] bg-[url(https://images-eu.ssl-images-amazon.com/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg)] bg-right rounded-xl hidden lg-block"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
