import clsx from "clsx";
import Image from "next/image";

interface IProps {
  className?: string;
}

const HeroBanner = ({ className }: IProps) => {

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
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
