import { useEffect, useState } from "react";

const Slider = () => {
  const text1 = (
    <div className="flex flex-col gap-6 w-full md:w-128 lg:w-full text-homeColor">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-gotham">
        Quick and Easy Loans for Your Financial Needs.
      </h1>
      <p className="text-lg lg:text-xl font-DMsans">
        Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.
      </p>
    </div>
  );
  const text2 = (
    <div className="flex flex-col gap-6 w-full md:w-128 lg:w-full text-homeColor">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-gotham">
        Join Thousands Building Wealth with Sentryvest.
      </h1>
      <p className="text-lg lg:text-xl font-DMsans">
        Your Path to Financial Freedom Starts Here - Explore Investment
        Opportunities Today!
      </p>
    </div>
  );
  const sliderText = [text1, text2];
  const [sliderNumber, setSliderNumber] = useState(0);

  function increaseSlider() {
    setSliderNumber((sliderNumber + 1) % sliderText.length);
  }

  useEffect(() => {
    const interval = setInterval(increaseSlider, 7000);
    return () => clearInterval(interval);
  }, [sliderNumber]);

  return (
    <div className="relative h-full">
      <div className="h-full flex flex-col justify-center">
        <div>{sliderText[sliderNumber]}</div>
      </div>
    </div>
  );
};

export default Slider;
