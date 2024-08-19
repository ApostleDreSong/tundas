import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import LogoScroller from "./components/LogoScroller";

const ReadMore = ({
  iconurl,
  title,
  text,
  link,
}: {
  iconurl: string;
  title: string;
  text: string;
  link: string;
}) => {
  return (
    <div
      className="flex"
      style={{ borderWidth: "1px", borderColor: "#E4E9F1", padding: "32px" }}
    >
      <Image
        src={iconurl}
        alt="Tundas Logo"
        width={32}
        height={32}
        className="mb-6 md:mb-14"
        style={{ marginRight: "32px", width: "32px", height: "32px" }}
      />
      <div>
        <p style={{ marginBottom: "20px" }}>{title}</p>
        <p style={{ marginBottom: "8px" }}>{text}</p>
        <a href="" className="flex items-center">
          Read more
          <ArrowRightIcon
            className="text-black"
            style={{ width: "20px", height: "20px", marginLeft: "6px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="container">
      <div className="pt-12 flex flex-col gap-16 lg:gap-0 lg:flex-row items-center justify-between">
        <div>
          <p
            className="text-5xl lg:text-6xl mb-5 font-bold"
            style={{ lineHeight: "68px" }}
          >
            Payment
            <br />
            Solutions for
            <br />
            Businesses
          </p>
          <p className="text-lg mb-8" style={{ lineHeight: "26px" }}>
            Experience hassle-free transactions with our
            <br /> seamless payment solutions. We provide fast, secure,
            <br /> and reliable payment services tailored to your
            <br /> business needs.
          </p>
          <div className="inline-flex justify-center items-center bg-custom-purple rounded-custom-30.4 p-2 pr-6">
            <div
              className="bg-white flex justify-center items-center"
              style={{ width: "40px", height: "40px", borderRadius: "100px" }}
            >
              <ArrowRightIcon
                className="text-custom-purple"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <span className="ml-2 text-white">Contact sales</span>
          </div>
        </div>
        <Image
          src="/house.png"
          alt="Tundas Logo"
          width={520}
          height={468}
          className=""
        />
      </div>
      <div id="trust" className="pt-[7.5rem]">
        <p className="pb-4">Trusted by companies around the world</p>
        <LogoScroller />
        <section className="pt-[8.75rem] pb-[7.5rem]">
          <p className="mb-8 text-5xl font-bold">Our Services</p>
          <hr
            style={{
              borderColor: "#141318",
              width: "100%",
              height: "1px",
              marginBottom: "32px",
            }}
          />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[50%]"></div>
            <div className="w-full lg:w-[50%]">
              Engineered Solutions to Simplify Your Business Processes.
              Streamline operations, improve efficiency, and enhance
              productivity.
            </div>
          </div>
          <div className="pt-[3.375rem] grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                iconurl: "/payment_integration.png",
                title: "Payment System Integration",
                text: "Seamlessly integrate cutting-edge payment systems. Our team works closely with you to ensure smooth implementation with no disruption.",
                link: "",
              },
              {
                iconurl: "/payment_consulting.png",
                title: "Payment Strategy Consulting",
                text: "We deliver expert consulting to craft and implement a customised payment strategy, optimising your payment processes and boosting growth.",
                link: "",
              },
              {
                iconurl: "/fraud_prevention.png",
                title: "Fraud Prevention & Risk Management",
                text: "Minimise risk with our advanced fraud prevention & management. Our innovative technologies ensure the safety and integrity of your payment processes.",
                link: "",
              },
              {
                iconurl: "/security.png",
                title: "Security & Compliance Solution",
                text: "We offer thorough security assessments and compliance, helping you maintain the highest standards of data protection and adherence.",
                link: "",
              },
            ].map((item) => (
              <ReadMore
                key={item.title}
                iconurl={item.iconurl}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
