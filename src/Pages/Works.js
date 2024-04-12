import automatedsavings from "../assets/automatedsavings.png";
import goaloriented from "../assets/goaloriented.png";
import fixedinvestment from "../assets/fixedinvestment.png";
import groupsavings from "../assets/groupsavings.png";

const Works = () => {
  return (
    <div id="workSection" className="gap-10 px-4 mt-24 pt-20 md:px-8 ">
      <div className="flex flex-col justify-center items-center gap-3 pb-5 md:px-32 md:pb-5">
        <span className="text-center font-bold text-2xl text-homeColor md:text-4xl">
          Ways to ensure your money keeps growing
        </span>
        <p className="text-center font-DMsans text-sm font-normal text-homeColor md:text-lg">
          Earn 5%-20% when you save with any of these Sentryvest plans.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start gap-6 md:pb-8">
        <div className="flex flex-col justify-center md:flex-row md:px-40 md:w-full">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img src={automatedsavings} alt="" className="h-64" />
          </div>
          <span className="text-4xl text-homeColor/20 font-bold text-center md:text-8xl">
            01
          </span>
          <div className="flex flex-col gap-4 w-full pt-6 text-homeColor items-center md:items-start md:w-1/2 md:pt-12">
            <span className="text-2xl font-bold md:text-3xl">
              Automated Savings
            </span>
            <p className="font-normal font-DMsans text-base md:text-lg">
              Build a dedicated savings faster on your terms, automatically or manually.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:px-28 md:w-full">
          <span className="text-4xl text-homeColor/20 font-bold text-center md:text-8xl">
            02
          </span>
          <div className="flex flex-col items-center gap-4 w-full pt-6 text-homeColor md:items-start md:w-1/2 md:pt-12">
            <span className="text-2xl font-bold md:text-3xl">
              Goal Oriented Savings
            </span>
            <p className="font-normal font-DMsans text-base md:text-lg">
              Reach your savings goals faster, just you or within the group.
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img src={goaloriented} alt="" className="h-64" />
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:px-40 md:w-full">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img src={fixedinvestment} alt="" className="h-64" />
          </div>
          <span className="text-4xl text-homeColor/20 font-bold text-center md:text-8xl">
            03
          </span>
          <div className="flex flex-col items-center gap-4 w-full pt-6 text-homeColor md:items-start md:w-1/2 md:pt-12">
            <span className="text-2xl font-bold md:text-3xl">
              Fixed Investment
            </span>
            <p className="font-normal font-DMsans text-base md:text-lg">
              Lock money away for a fixed duration without having access to it
              until maturity.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:px-28 md:w-full">
          <span className="text-4xl text-homeColor/20 font-bold text-center md:text-8xl">
            04
          </span>
          <div className="flex flex-col items-center gap-4 w-full pt-6 text-homeColor md:items-start md:w-1/2 md:pt-12">
            <span className="text-2xl font-bold md:text-3xl">
              Group Savings Scheme
            </span>
            <p className="font-normal font-DMsans text-base md:text-lg">
              Save and grow collectively within the group.
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img src={groupsavings} alt="" className="h-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
