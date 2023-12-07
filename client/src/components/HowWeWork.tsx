// Import image
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
// Type
import { stepType } from "../types/globalType";

const step: stepType[] = [
  {
    number: 1,
    picture: step1,
    title: "ค้นหาสัตว์เลี้ยงที่เหมาะสม",
    description: "ทางเราจะค้นหาน้องที่เหมาะสมกับคุณหรือน้องที่คุณต้องการ",
  },
  {
    number: 2,
    picture: step2,
    title: "ทำความรู้จักสัตว์เลี้ยง",
    description:
      "เมื่อคุณได้น้องที่ต้องการแล้วทางเราจะให้คุณเข้าไปทำความรู้จักกับน้อง",
  },
  {
    number: 3,
    picture: step3,
    title: "พาน้องกลับบ้าน",
    description:
      "เมื่อคุณกับน้องมีความสัมพันธ์ระดับหนึ่งแล้วเราก็จะให้คุณพาน้องไปดูแลได้เลย",
  },
];

const HowWeWork = () => {
  return (
    <>
      <div className="mx-auto max-w-[1200px] md:py-20 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-8 text-center">
            <h4 className="uppercase font-bold text-[#FF7F50] mb-4 tracking-wide text-sm">
              How we work ?
            </h4>
            <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold font-amctic">
              Procedure for adopting a pet
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {step.map((item) => (
              <div
                key={item.number}
                className="md:p-4 flex items-center flex-col"
              >
                <img
                  src={item.picture}
                  alt={`${item.title} picture`}
                  className="mb-4 p-4 rounded-full md:w-[100%] w-[50%]"
                />
                <div className="text-center">
                  <h2 className="mb-4 text-xl font-bold">
                    {`${item.number}.`} {item.title}
                  </h2>
                  <p className="xl:mx-0 mx-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cat-bg py-20">
        <div className="flex justify-center flex-col items-center">
          <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold font-amctic mb-8 md:w-[700px] text-center md:mx-0 mx-4">
            Be inspired to bring a homeless dog, cat, or other into your home.
          </h2>
          <p className="md:w-[700px] text-center xl:text-xl md:text-lg md:mx-0 mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] md:py-20 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="uppercase font-bold text-[#FF7F50] mb-4 tracking-wide text-sm">
              TESTIMONIAL
            </h4>
            <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold font-amctic mb-4">
              Pet Lover Feedback
            </h2>
            <p className="mb-8 xl:text-xl md:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 xl:mx-0 mx-4">
            <div className="bg-[#F9F1E7] text-center p-8 rounded-xl">
              <h3 className="mb-2 font-bold font-amctic text-2xl">
                Emily Morales
              </h3>
              <h4 className="font-semibold text-[#FF7F50] mb-4 tracking-wide text-md">
                Jakarta
              </h4>
              <div className="rating mb-4">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p>
                Adopting from Meowville was the best decision I ever made. My
                cat, Whiskers, has brought so much joy and love into my life.
                The adoption process was smooth, and the team at Meowville
                provided all the support and guidance I needed. I highly
                recommend them to anyone looking to find their purrfect
                companion.
              </p>
            </div>
            <div className="bg-[#F9F1E7] text-center p-8 rounded-xl">
              <h3 className="mb-2 font-bold font-amctic text-2xl">
                Emily Morales
              </h3>
              <h4 className="font-semibold text-[#FF7F50] mb-4 tracking-wide text-md">
                Jakarta
              </h4>
              <div className="rating mb-4">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p>
                Adopting from Meowville was the best decision I ever made. My
                cat, Whiskers, has brought so much joy and love into my life.
                The adoption process was smooth, and the team at Meowville
                provided all the support and guidance I needed. I highly
                recommend them to anyone looking to find their purrfect
                companion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
