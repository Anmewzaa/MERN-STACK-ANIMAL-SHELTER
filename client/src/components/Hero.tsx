const Hero = () => {
  return (
    <>
      <div className="hero-container mb-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="md:h-[75vh] h-[55vh] flex flex-col justify-around">
            <div className="mx-0">
              <h2 className="uppercase text-white text-8xl mb-6 w-[600px] font-amctic font-bold leading-tight tracking-wide">
                Where Animals' Dreams Come True
              </h2>
              <p className="w-[700px] text-xl font-semibold text-white mb-8">
                ผู้ที่ชื่นชอบสัตว์สามารถค้นหาข้อมูล และโอกาสมากมายเพื่อสนับสนุน
                มูลนิธิเกี่ยวกับสัตว์บนโลกนี้
              </p>
              <button className="btn rounded-full px-8">Learn more</button>
            </div>
          </div>
          <div className="md:inline hidden">
            <div className="grid grid-cols-3 gap-4 text-center xl:mx-0 mx-4">
              <div className="relative top-[-50%] p-8 bg-[#F3F4F6] rounded-lg">
                <h3 className="text-2xl font-bold mb-[1rem] ">
                  สัตว์ที่ถูกทิ้ง และ ทารุณกรรม
                </h3>
                <p>เพื่อให้โอกาสพวกเขาได้มีชีวิตที่ดีขึ้น</p>
              </div>
              <div className="relative top-[-50%] p-8 bg-[#F3F4F6] rounded-lg">
                <h3 className="text-2xl font-bold mb-[1rem]">
                  ช่วยเหลือ และ ดูแล
                </h3>
                <p>
                  สัตว์ทุกตัวที่ถูกทิ้งและไร้การ ช่วยเหลือเราจะจัดการทั้งหมดเอง
                </p>
              </div>
              <div className="relative top-[-50%] p-8 bg-[#F3F4F6] rounded-lg">
                <h3 className="text-2xl font-bold mb-[1rem]">
                  โอบกอด และ ใส่ใจ
                </h3>
                <p>สัตว์ทุกตัวจะต้องมีบ้านอยู่ และ มีที่พักพิงที่อบอุ่น</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
