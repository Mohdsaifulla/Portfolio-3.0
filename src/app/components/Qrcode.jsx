import React from "react";
import { QRCodeSVG } from "qrcode.react";
const Qrcode = () => {
  const link = "https://youtu.be/wGRF3GQ4Wdk?si=vtkcreGJedwhPTcg";
  return (
    <div className="md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px]  sm:w-[300px] sm:h-[300px] flex justify-center items-center">
      <QRCodeSVG
        value={link}
        size={"full"}
        includeMargin={true}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        className="rounded-lg"
      />
    </div>
  );
};

export default Qrcode;
