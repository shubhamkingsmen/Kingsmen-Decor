import React from "react";
import AdvantageDesign from "./AdvantageDesign";
import PageHomeBanner from "../../common/PageHomeBanner";
import WorkingProcess from "./WorkingProcess";

const Process = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <PageHomeBanner
          title=""
          subtitle=""
          buttonText=""
          backgroundImage="/banner/OurProcess.jpg"
          onButtonClick={() => alert("Button Clicked!")}
        />
      </div>
      <div className="block lg:hidden">
        <PageHomeBanner
          title=""
          subtitle=""
          buttonText=""
          backgroundImage="/banner/OurProceess_Mobile_Version_Banner.jpg"
          onButtonClick={() => alert("Button Clicked!")}
        />
      </div>
      <AdvantageDesign />
     
    </div>
  );
};

export default Process;
