import React from "react";

const renderContent = {
    1:(
        "My journey as a designer started in Germany, where I studied Communication Design."
    ),
    2:(
        "Yahoo"
    ),
    3:(
        "Yup"
    ),
    4:(
        "Aijaz"
    )
}

const HomeInfo = ({currentStage}) => {
    return (
        <p className={`text-[22px] leading-[150%] font-normal`}>{renderContent[currentStage]}</p>
    )
}   

export default HomeInfo;