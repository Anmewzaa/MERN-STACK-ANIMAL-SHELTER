import Cat from "../images/cat.jpg";

const Content = () => {
  return (
    <div className="footprint-bg">
      <div className="mx-auto max-w-[1200px]">
        <div className="h-[80vh] flex flex-col justify-around">
          <div className="grid grid-cols-2 gap-8">
            <section>
              <h4 className="uppercase font-bold text-[#FF7F50] mb-4">
                Who we are
              </h4>
              <h2 className="uppercase text-4xl font-bold mb-4">
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
              <button className="btn uppercase">Discover more</button>
            </section>
            <section>
              <img src={Cat} alt="" />
            </section>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Content;
