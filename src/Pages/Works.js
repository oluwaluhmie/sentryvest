import automatedsavings from "../assets/automatedsavings.png";
import goaloriented from "../assets/goaloriented.png";
import fixedinvestment from "../assets/fixedinvestment.png";
import groupsavings from "../assets/groupsavings.png";

const Works = () => {
  return (
    <div id="workSection" className="flex flex-col items-center bg-white">
      <div className="flex flex-col items-center md:w-200 lg:w-341.5 overflow-hidden">
        <div className="w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-12 py-12 md:py-16 lg:py-32 w-97.5 md:w-176 lg:w-300">
            <div className="flex flex-col gap-3">
              <span className="text-2xl md:text-3xl lg:text-4xl text-homeColor font-gotham">
                Ways to ensure your money keeps growing
              </span>
              <p className="font-poppins text-base md:text-lg text-homeColor">
                Earn 5%-20% when you save with any of these Sentryvest plans.
              </p>
            </div>
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10">
                <span className="p-2 text-5xl text-homeColor/20 font-bold">
                  01
                </span>
                <img
                  src={automatedsavings}
                  alt="automatedsavings"
                  className="h-60 md:w-80 lg:w-96"
                />
                <div className="flex flex-col gap-3 md:w-80 lg:w-128 p-3 text-homeColor">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl">
                    Automated Savings
                  </span>
                  <p className="text-sm md:text-base lg:text-base font-poppins">
                    Build a dedicated savings faster on your terms,
                    automatically or manually.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10">
                <span className="p-2 text-5xl text-homeColor/20 font-bold">
                  02
                </span>
                <img
                  src={goaloriented}
                  alt="goaloriented"
                  className="h-60 md:w-80 lg:w-96"
                />
                <div className="flex flex-col gap-3 md:w-80 lg:w-128 p-3 text-homeColor">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl">
                    Goal Oriented Savings
                  </span>
                  <p className="text-sm md:text-base lg:text-base font-poppins">
                    Reach your savings goals faster, just you or within the
                    group.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10">
                <span className="p-2 text-5xl text-homeColor/20 font-bold">
                  03
                </span>
                <img
                  src={fixedinvestment}
                  alt="fixedinvestment"
                  className="h-60 md:w-80 lg:w-96"
                />
                <div className="flex flex-col gap-3 md:w-80 lg:w-128 p-3 text-homeColor">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl">
                    Fixed Investment
                  </span>
                  <p className="text-sm md:text-base lg:text-base font-poppins">
                    Lock money away for a fixed duration without having access
                    to it until maturity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10">
                <span className="p-2 text-5xl text-homeColor/20 font-bold">
                  04
                </span>
                <img
                  src={groupsavings}
                  alt="groupsavings"
                  className="h-60 md:w-80 lg:w-96"
                />
                <div className="flex flex-col gap-3 md:w-80 lg:w-128 p-3 text-homeColor">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl">
                    Group Savings Scheme
                  </span>
                  <p className="text-sm md:text-base lg:text-base font-poppins">
                    Save and grow collectively within the group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
