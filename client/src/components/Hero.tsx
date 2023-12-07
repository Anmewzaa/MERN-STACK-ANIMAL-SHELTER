const Hero = () => {
  return (
    <>
      <div className="hero-container mb-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="lg:h-[75vh] h-[55vh] flex flex-col justify-around">
            <div className="mx-0">
              <h2 className="uppercase text-white xl:text-8xl md:text-7xl text-6xl xl:w-[600px] mb-6 font-amctic font-bold leading-tight tracking-wide xl:mx-0 mx-4">
                Where Animals' Dreams Come True
              </h2>
              <p className="xl:text-xl md:text-lg font-semibold text-white mb-8 xl:mx-0 mx-4">
                ผู้ที่ชื่นชอบสัตว์สามารถค้นหาข้อมูล และโอกาสมากมายเพื่อสนับสนุน
                มูลนิธิเกี่ยวกับสัตว์บนโลกนี้
              </p>
              <button className="btn rounded-full px-8 xl:mx-0 mx-4">
                Learn more
              </button>
            </div>
          </div>
          <div className="lg:inline hidden">
            <div className="grid grid-cols-3 gap-4 text-center xl:mx-0 mx-4">
              <div className="relative top-[-50%] p-8 bg-[#F3F4F6] rounded-lg">
                <div className="flex justify-center items-center my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-[1rem] ">
                  สัตว์ที่ถูกทิ้งและทารุณกรรม
                </h3>
                <p>เพื่อให้โอกาสพวกเขาได้มีชีวิตที่ดีขึ้น</p>
              </div>
              <div className="relative top-[-50%] p-8 bg-[#F3F4F6] rounded-lg">
                <div className="flex justify-center items-center my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-[1rem]">
                  ช่วยเหลือและดูแล
                </h3>
                <p>
                  สัตว์ทุกตัวที่ถูกทิ้งและไร้การ ช่วยเหลือเราจะจัดการทั้งหมดเอง
                </p>
              </div>
              <div className="relative top-[-50%] p-8 bg-[#F3F4F6] rounded-lg">
                <div className="flex justify-center items-center my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-[1rem]">โอบกอดและใส่ใจ</h3>
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
