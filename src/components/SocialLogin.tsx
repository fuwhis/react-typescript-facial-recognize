import React from "react";
import ggIcon from '../assets/icon/google.svg';
import kakaoIcon from '../assets/icon/kakao.svg'
const SocialLoginMethods = () => {

    return(
        <div className="w-full flex space-x-4">
            <button className="flex justify-center border-green-500 bg-transparent h-12">
                <img alt="" src={ggIcon} width="27px" height="28px"/>
                &nbsp; Google
            </button>

            <button className="flex justify-center border-green-500 bg-transparent h-12">
                <img alt="" src={kakaoIcon} width="27px" height="27px"/>
                &nbsp; Kakao
            </button>

        </div>
    )
}

export default SocialLoginMethods;