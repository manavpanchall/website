import { Img } from "•/.."; 
import React from "react";

export default function RoundTableImage({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center justify-center p-1 flex-1 rounded-md`}>
      <Img
        src="img_table_ronde_165cm.png"
        width={40}
        height={40}
        alt="Round Table Image"
        className="mt-1 h-[40px] object-cover"
      />
    </div>
  );
}
