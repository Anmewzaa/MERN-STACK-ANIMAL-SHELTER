const Hero = () => {
  return (
    <>
      <div className="hero-container mb-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="h-[800px] flex flex-col justify-around">
            <div>
              <h2 className="uppercase text-white text-7xl mb-[2rem]">
                Where Animal <br /> Dreams Come
                <br />
                True
              </h2>
              <p className="text-2xl w-[600px] font-semibold text-white mb-[2rem]">
                ผู้ที่ชื่นชอบสัตว์สามารถค้นหาข้อมูล และโอกาสมากมายเพื่อสนับสนุน
                มูลนิธิเกี่ยวกับสัตว์บนโลกนี้
              </p>
              <button className="btn">Learn more</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="relative top-[-50%] p-4 bg-[#F9F1E7] rounded-lg">
              <h3 className="text-2xl font-bold mb-[1rem]">
                สัตว์ที่ถูกทิ้ง และ ทารุณกรรม
              </h3>
              <p>เพื่อให้โอกาสพวกเขาได้มีชีวิตที่ดีขึ้น</p>
            </div>
            <div className="relative top-[-50%] p-4 bg-[#F9F1E7] rounded-lg">
              <h3 className="text-2xl font-bold mb-[1rem]">
                ช่วยเหลือ และ ดูแล
              </h3>
              <p>
                สัตว์ทุกตัวที่ถูกทิ้งและไร้การ ช่วยเหลือเราจะจัดการทั้งหมดเอง
              </p>
            </div>
            <div className="relative top-[-50%] p-4 bg-[#F9F1E7] rounded-lg">
              <h3 className="text-2xl font-bold mb-[1rem]">โอบกอด และ ใส่ใจ</h3>
              <p>สัตว์ทุกตัวจะต้องมีบ้านอยู่ และ มีที่พักพิงที่อบอุ่น</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
