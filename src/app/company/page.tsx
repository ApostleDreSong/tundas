import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col items-center pt-20 pb-20">
        <p className="w-full lg:w-[60%] text-custom-grey text-center text-4xl md:text-6xl font-bold pb-6">
          We are Crafting Digital Payment Experiences
        </p>
        <p className="w-full lg:w-[42.5%] text-custom-grey text-center text-lg font-normal pb-6 lg:px-0 px-10">
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
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="lg:w-1/2"></p>
          <p className="w-full lg:w-1/2 mb-14">
            our core values guide our actions and shape our solutions. They
            drive our commitment to trust, innovation, and excellence in
            everything we do.
          </p>
        </div>
      </section>
      <section>
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 flex flex-row bg-custom-one bg-no-repeat bg-right-top pt-10">
              <div>
                <p className="font-bold text-xl">Innovation</p>
                <p className="text-base">
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
                <p className="font-bold">Customer Success</p>
                <p>
                  Your success is our top priority. We work closely with you to
                  deliver solutions that achieve real results.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/4 flex flex-row"></div>
          </div>
        </div>
        <div className="lg:py-24">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 flex flex-row">
              <div></div>
            </div>
            <div className="w-full lg:w-1/4 flex flex-row bg-custom-two bg-no-repeat bg-right-top pt-10">
              <div>
                <p className="font-bold text-xl">Integrity</p>
                <p className="text-base">
                  Trust and transparent are at the heart of our client
                  relationships. We maintain the highest ethical standards.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/4 flex flex-row"></div>
            <div className="w-full lg:w-1/4 flex flex-row bg-custom-four bg-no-repeat bg-right-top pt-10">
              <div>
                <p className="font-bold">Excellence</p>
                <p>
                  We are committed to excellence in everything we do, from our
                  solutions to our customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col pb-28">
        <div className="text-center py-20 lg:py-10">
          <p className="text-5xl font-bold">Meet the Team</p>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-1 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
            <div>
              <p className="text-xl font-semibold">Emmanuel John</p>
              <p className="text-base font-normal">CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-2 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
            <div>
              <p className="text-xl font-semibold">Emmanuel John</p>
              <p className="text-base font-normal">CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-3 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
            <div>
              <p className="text-xl font-semibold">Emmanuel John</p>
              <p className="text-base font-normal">CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[16.5rem] h-[17.5rem] rounded-[2rem] bg-team-member-4 bg-no-repeat bg-bottom bg-custom-lavender-l"></div>
            <div>
              <p className="text-xl font-semibold">Emmanuel John</p>
              <p className="text-base font-normal">CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
