import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Review1 from "@/public/img/BrianJames-1.jpeg";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dot: true,
    centerPadding: "250px",
    slidesToShow: 1,
    slidesToScroll: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <main>
      <section>
        <div className="text-center my-[50px]">
          <p className="text-[#b4b4b4]">Testimonials</p>
          <div className="flex justify-center flex-wrap items-center gap-[8px] font-black text-[30px]">
            <h1 className=" text-[50px]">Love From </h1>
            <h1 className="text-[var(--background-color)] text-[50px]">
              Clients
            </h1>
          </div>
        </div>
      </section>
      <div className="w-full">
        <div className="">
          <Slider {...settings} className="test">
            <div className="px-[20px] ml-[250px]">
              <div className="flex gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--secondary-color)]">
                <div className="my-[18px] ml-[25px]">
                  <Image
                    src={Review1}
                    alt="Review"
                    className="rounded-full "
                    height={700}
                    width={700}
                  />
                </div>
                <div className="grid align-middle">
                  <h1 className="font-black text-[18px]">Tayyab Arshad</h1>
                  <p className="font-semibold text-[14px]">
                    Project Manager, The Heritage Company
                  </p>
                  <p className="mt-[10px] text-[14px]">
                    "I can't even begin to express how happy I am with these
                    services. I have gotten at least 50 times the value from
                    your company. Thanks guys, keep up the good work"
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[20px]">
              <div className="flex justify-center">
                <div className="flex justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--background-color)]">
                  <div className="my-[18px] ml-[25px]">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px]">Tayyab Arshad</h1>
                    <p className="font-semibold text-[14px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] ml-[250px]">
              <div className="flex gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--secondary-color)]">
                <div className="my-[18px] ml-[25px]">
                  <Image
                    src={Review1}
                    alt="Review"
                    className="rounded-full "
                    height={700}
                    width={700}
                  />
                </div>
                <div className="grid align-middle">
                  <h1 className="font-black text-[18px]">Tayyab Arshad</h1>
                  <p className="font-semibold text-[14px]">
                    Project Manager, The Heritage Company
                  </p>
                  <p className="mt-[10px] text-[14px]">
                    "I can't even begin to express how happy I am with these
                    services. I have gotten at least 50 times the value from
                    your company. Thanks guys, keep up the good work"
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[20px]">
              <div className="flex justify-center">
                <div className="flex justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--background-color)]">
                  <div className="my-[18px] ml-[25px]">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px]">Tayyab Arshad</h1>
                    <p className="font-semibold text-[14px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] ml-[250px]">
              <div className="flex gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--secondary-color)]">
                <div className="my-[18px] ml-[25px]">
                  <Image
                    src={Review1}
                    alt="Review"
                    className="rounded-full "
                    height={700}
                    width={700}
                  />
                </div>
                <div className="grid align-middle">
                  <h1 className="font-black text-[18px]">Tayyab Arshad</h1>
                  <p className="font-semibold text-[14px]">
                    Project Manager, The Heritage Company
                  </p>
                  <p className="mt-[10px] text-[14px]">
                    "I can't even begin to express how happy I am with these
                    services. I have gotten at least 50 times the value from
                    your company. Thanks guys, keep up the good work"
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[20px]">
              <div className="flex justify-center">
                <div className="flex justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--background-color)]">
                  <div className="my-[18px] ml-[25px]">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px]">Tayyab Arshad</h1>
                    <p className="font-semibold text-[14px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
