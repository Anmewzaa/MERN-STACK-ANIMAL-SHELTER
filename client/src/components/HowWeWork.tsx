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
    <div className="mx-auto max-w-[1200px] py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-10">
          <h4>How we work ?</h4>
          <h2>ขั้นตอนการรักสัตว์เลี้ยง</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {step.map((item) => (
            <div key={item.number} className="p-4">
              <img
                src={item.picture}
                alt={`${item.title} picture`}
                className="mb-4 p-4 rounded-full"
              />
              <div className="text-center">
                <h2 className="mb-4 text-xl font-bold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
