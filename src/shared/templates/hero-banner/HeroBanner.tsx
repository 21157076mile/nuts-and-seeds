import React from "react";
import clsx from "clsx";
import Image from "next/image";

const HeroBanner = ({ className }: ReactFCPropsWithClassName) => {
  return (
    <div className={clsx(className, "hero-banner w-full")}>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "500px" }}
      >
        <Image
          fill
          alt="Picture of Fernanda Martinez"
          src="https://source.unsplash.com/user/fermtz05"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
