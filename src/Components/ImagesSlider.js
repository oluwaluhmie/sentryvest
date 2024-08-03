import { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import invest from "../assets/invest.png";

const ImagesSlider = () => {
  const image1 = <img src={hero} alt="hero" className="h-fit w-full" />;
  const image2 = <img src={invest} alt="invest" className="h-fit w-full" />;

  const sliderImages = [image1, image2];
  const [sliderNumber, setSliderNumber] = useState(0);

  function increaseSlider() {
    setSliderNumber((sliderNumber + 1) % sliderImages.length);
  }

  useEffect(() => {
    const interval = setInterval(increaseSlider, 7000);
    return () => clearInterval(interval);
  }, [sliderNumber]);

  return (
    <div className="relative h-full">
      <div className="h-full flex flex-col justify-center items-center">
        <div>{sliderImages[sliderNumber]}</div>
      </div>
    </div>
  );
};

export default ImagesSlider;
