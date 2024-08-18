import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center pt-6 pb-20">
        <p className="text-custom-grey text-center text-4xl md:text-6xl font-bold mb-8 md:mb-11">
          We are Crafting Digital Payment Experiences
        </p>
        <p
          className="text-custom-grey text-center text-lg font-normal mb-8 md:mb-11"
          style={{ marginTop: "20px" }}
        >
          we specialise in crafting innovative, bespoke payment solutions
          tailored to the unique needs of businesses across industries.
        </p>
        <div
          className="inline-flex items-center rounded-custom-30.4 p-2 pr-6"
          style={{ backgroundColor: "#6F4DFF" }}
        >
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
      <section className="mt-20 pt-15">
        <p
          className="mb-8"
          style={{ fontSize: "48px", fontWeight: 700, lineHeight: "54px" }}
        >
          Core Values
        </p>
        <hr
          style={{
            borderColor: "#141318",
            width: "100%",
            height: "1px",
            marginBottom: "32px",
          }}
        />
        <div className="flex flex-row justify-between">
          <p className="w-1/2"></p>
          <p className="w-1/2 mb-13" style={{ marginBottom: "54px" }}>
            our core values guide our actions and shape our solutions. They
            drive our commitment to trust, innovation, and excellence in
            everything we do.
          </p>
        </div>
      </section>
      <section>
        <div>
          <div className="flex flex-row">
            <div className="w-1/4 flex flex-row bg-custom-one bg-no-repeat bg-right-top pt-10">
              <div>
                <p className="font-bold text-xl">Innovation</p>
                <p className="text-base">
                  We leverage the latest technologies to deliver the best
                  payment solutions
                </p>
              </div>
            </div>
            <div className="w-1/4 flex flex-row">
              <div></div>
            </div>
            <div className="w-1/4 flex flex-row bg-custom-three bg-no-repeat bg-right-top pt-10">
              <div>
                <p className="font-bold">Innovation</p>
                <p>
                  We leverage the latest technologies to deliver the best
                  payment solutions
                </p>
              </div>
            </div>
            <div className="w-1/4 flex flex-row"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
