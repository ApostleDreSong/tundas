import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center pt-20 pb-20 lg:pb-60 bg-bg-pattern-1 bg-no-repeat bg-center">
        <p className="w-full lg:w-[60%] text-custom-grey text-center text-4xl lg:text-6xl lg:leading-[68px] font-bold pb-6">
          We are Crafting Digital Payment Experiences
        </p>
        <p className="w-full lg:w-[32.5%] text-custom-body text-center text-lg font-normal pb-6 lg:px-0 px-10">
          we specialise in crafting innovative, bespoke payment solutions
          tailored to the unique needs of businesses across industries.
        </p>
        <div className="inline-flex justify-center items-center bg-custom-purple rounded-custom-30.4 p-2 pr-6">
          <div
            className="bg-white flex justify-center items-center"
            style={{ width: "40px", height: "40px", borderRadius: "100px" }}
          >
            <Image
              src="/arrow-right.png"
              alt="arrow"
              width={16}
              height={15.56}
              className=""
            />
          </div>
          <span className="ml-2 text-white text-lg font-medium">
            Contact sales
          </span>
        </div>
      </div>
      <div className="">
        <section className="container pt-6 lg:pt-16">
          <p className="mb-8 text-[#0A002E] text-5xl font-bold">Core Values</p>
          <hr
            style={{
              borderColor: "#141318",
              width: "100%",
              height: "1px",
              marginBottom: "32px",
            }}
          />
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="lg:w-1/2"></p>
            <p className="w-full lg:w-1/2 mb-14 text-custom-body text-lg">
              our core values guide our actions and shape our solutions. They
              drive our commitment to trust, innovation, and excellence in
              everything we do.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/4 flex flex-row bg-custom-one bg-no-repeat bg-right-top pt-10">
                <div>
                  <p className="font-semibold text-xl text-custom-grey pb-2">
                    Innovation
                  </p>
                  <p className="text-base text-custom-body font-normal">
                    We leverage the latest technologies to deliver the best
                    payment solutions
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/4 flex flex-row">
                <div></div>
              </div>
              <div className="w-full lg:w-1/4 flex flex-row bg-custom-three bg-no-repeat bg-right-top pt-10">
                <div>
                  <p className="font-semibold text-xl text-custom-grey pb-2">
                    Customer Success
                  </p>
                  <p className="text-base text-custom-body font-normal">
                    Your success is our top priority. We work closely with you
                    to deliver solutions that achieve real results.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/4 flex flex-row"></div>
            </div>
          </div>
          <div className="lg:bg-bg-pattern-2 lg:bg-no-repeat bg-center -mt-20">
            <div className="container lg:pb-28 lg:pt-48">
              <div className="pt-16 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 flex flex-row">
                  <div></div>
                </div>
                <div className="w-full lg:w-1/4 flex flex-row bg-custom-two bg-no-repeat bg-right-top pt-10">
                  <div>
                    <p className="font-semibold text-xl text-custom-grey pb-2">
                      Integrity
                    </p>
                    <p className="text-base text-custom-body font-normal">
                      Trust and transparent are at the heart of our client
                      relationships. We maintain the highest ethical standards.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/4 flex flex-row"></div>
                <div className="w-full lg:w-1/4 flex flex-row bg-custom-four bg-no-repeat bg-right-top pt-10">
                  <div>
                    <p className="font-semibold text-xl text-custom-grey pb-2">
                      Excellence
                    </p>
                    <p className="text-base text-custom-body font-normal">
                      We are committed to excellence in everything we do, from
                      our solutions to our customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#FCFBFE]">
          <section className="container flex flex-col py-28">
            <div className="text-center pb-16">
              <p className="text-5xl font-bold text-[#0A002E]">Meet the Team</p>
            </div>
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center">
              <div className="flex flex-col gap-6">
                <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-1 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
                <div>
                  <p className="text-xl font-semibold text-custom-grey">
                    Emmanuel John
                  </p>
                  <p className="text-base font-normal text-custom-body pb-1">
                    CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-2 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
                <div>
                  <p className="text-xl font-semibold text-custom-grey">
                    Emmanuel John
                  </p>
                  <p className="text-base font-normal text-custom-body pb-1">
                    CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-3 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
                <div>
                  <p className="text-xl font-semibold text-custom-grey">
                    Emmanuel John
                  </p>
                  <p className="text-base font-normal text-custom-body pb-1">
                    CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-4 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
                <div>
                  <p className="text-xl font-semibold text-custom-grey">
                    Emmanuel John
                  </p>
                  <p className="text-base font-normal text-custom-body pb-1">
                    CEO
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
