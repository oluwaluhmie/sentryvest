import { useEffect, useState } from "react";

const Slider = () => {
  const text1 = (
    <>
      <h1 className="text-homeColor text-4xl px-3 font-bold text-center mb-6 md:text-5xl lg:text-6xl md:text-left md:ml-10">
        Quick and Easy Loans for Your Financial Needs.
      </h1>
      <p className="text-homeColor text-lg font-DMsans px-3 font-normal text-center md:text-left md:ml-10">
        Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.
      </p>
    </>
  );
  const text2 = (
    <>
      <h1 className="text-homeColor text-4xl px-3 font-bold text-center mb-6 md:text-5xl lg:text-6xl md:text-left md:ml-10">
        Join Thousands Building Wealth <br />with Sentryvest.
      </h1>
      <p className="text-homeColor text-lg font-DMsans px-3 font-normal text-center md:text-left md:ml-10">
        Your Path to Financial Freedom Starts Here - Explore Investment
        Opportunities Today!
      </p>
    </>
  );
  const sliderText = [text1, text2];
  const [sliderNumber, setSliderNumber] = useState(0);

  function increaseSlider() {
    setSliderNumber((sliderNumber + 1) % sliderText.length);
  }

  useEffect(() => {
    const interval = setInterval(increaseSlider, 5000);
    return () => clearInterval(interval);
  }, [sliderNumber]);

  return (
    <div className="relative h-full">
      <div className="h-full flex flex-col justify-center items-center">
        <div>{sliderText[sliderNumber]}</div>
      </div>
    </div>
  );
};

export default Slider;
