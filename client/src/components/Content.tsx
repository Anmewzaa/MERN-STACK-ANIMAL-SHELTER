import Cat from "../images/cat.jpg";

const Content = () => {
  return (
    <div className="footprint-bg">
      <div className="mx-auto max-w-[1200px]">
        <div className="h-[650px] flex flex-col justify-around">
          <div className="lg:grid lg:grid-cols-2 gap-8 flex flex-col">
            <section className="xl:mx-0 mx-4 order-2">
              <h4 className="uppercase font-bold text-[#FF7F50] mb-4 tracking-wide text-sm">
                Who we are
              </h4>
              <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold mb-4 font-amctic">
                Help homeless animals find a forever home.
              </h2>
              <p className="mb-4">
                ยินดีต้อนรับสู่สถานสงเคราะห์สัตว์ของเรา
                ที่ซึ่งความรักและความเมตตามารวมกันเพื่อสร้างสภาพแวดล้อมที่ปลอดภัยและห่วงใยสำหรับเพื่อนสี่ขาของเรา
                ที่สถานสงเคราะห์ของเรา
                เราทุ่มเทให้กับความเป็นอยู่ที่ดีและความสุขของสัตว์ที่ต้องการความช่วยเหลือ
                ภารกิจของเราเรียบง่ายแต่ลึกซึ้งในการช่วยเหลือ ฟื้นฟู
                และหาบ้านใหม่ให้กับสัตว์ต่างๆ ที่ต้องเผชิญกับความยากลำบาก
                การละทิ้ง หรือละเลย
                เราเชื่อว่าสัตว์ทุกตัวสมควรได้รับโอกาสมีชีวิตที่ดีขึ้น
                และเราทำงานอย่างไม่เหน็ดเหนื่อยเพื่อมอบความรัก ความเอาใจใส่
                และโอกาสครั้งที่สองแก่พวกมัน
              </p>
              <button className="btn uppercase rounded-full px-8">
                Discover more
              </button>
            </section>
            <section className="xl:mx-0 mx-4 order-1 flex justify-center">
              <img
                src={Cat}
                alt=""
                className="rounded-xl lg:w-[100%] w-[60%]"
              />
            </section>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Content;
