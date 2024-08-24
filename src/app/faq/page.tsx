import Faq from "../components/Faq";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div
        id="faq"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-[84px] p-10 md:p-[120px] ml-0 mr-0 md:ml-[-144px] md:mr-[-144px]"
      >
        <div>
          <p className="text-5xl font-bold pb-5 text-[#0A002E]">
            Frequently Asked <br /> Questions
          </p>
          <p className="pb-8 text-[#35313F] font-normal text-lg">
            Get answers to commonly asked questions
          </p>
          <div
            className="inline-flex items-center rounded-custom-30.4 p-2 pr-6"
            style={{ backgroundColor: "#F0F1F8" }}
          >
            <div
              className="bg-custom-grey flex justify-center items-center"
              style={{ width: "40px", height: "40px", borderRadius: "100px" }}
            >
              <Image
                src={"/arrow-right-gray.svg"}
                alt="arrow-right"
                width={13.33}
                height={12.96}
              />
            </div>
            <span className="ml-3 text-lg text-custom-grey font-medium">
              Contact sales
            </span>
          </div>
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </div>
  );
}
