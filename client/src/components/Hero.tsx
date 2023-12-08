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
              <button className="btn rounded-full px-8 xl:mx-0 mx-4 bg-[#B562A8] border-none text-white">
                Learn more
              </button>
            </div>
          </div>
          <div className="lg:inline hidden">
            <div className="grid grid-cols-3 gap-4 text-center xl:mx-0 mx-4">
              <div className="relative top-[-50%] p-6 bg-[#F9F1E7] rounded-lg">
                <div className="flex justify-center items-center my-4">
                  <div className="bg-white rounded-full p-2">
                    <div className="bg-[#FF7F50] rounded-full p-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-12 h-12"
                      >
                        <path d="M20 17q.86 0 1.45.6t.58 1.4L14 22l-7-2v-9h1.95l7.27 2.69q.78.31.78 1.12 0 .47-.34.82t-.86.37H13l-1.75-.67-.33.94L13 17h7M16 3.23Q17.06 2 18.7 2q1.36 0 2.3 1t1 2.3q0 1.03-1 2.46t-1.97 2.39T16 13q-2.08-1.89-3.06-2.85t-1.97-2.39T10 5.3q0-1.36.97-2.3t2.34-1q1.6 0 2.69 1.23M.984 11H5v11H.984V11z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-[1rem] ">
                  สัตว์ที่ถูกทิ้งและทารุณกรรม
                </h3>
                <p>เพื่อให้โอกาสพวกเขาได้มีชีวิตที่ดีขึ้น</p>
              </div>
              <div className="relative top-[-50%] p-6 bg-[#B562A8] rounded-lg">
                <div className="flex justify-center items-center my-4 ">
                  <div className="bg-white rounded-full p-2">
                    <div className="bg-[#FF80C9] rounded-full p-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-12 h-12"
                      >
                        <path d="M12 8l-1.33.09C9.81 7.07 7.4 4.5 5 4.5c0 0-1.97 2.96-.04 6.91-.55.83-.89 1.26-.96 2.25l-1.93.29.21.98 1.76-.26.14.71-1.57.94.47.89 1.45-.89C5.68 18.76 8.59 20 12 20s6.32-1.24 7.47-3.68l1.45.89.47-.89-1.57-.94.14-.71 1.76.26.21-.98-1.93-.29c-.07-.99-.41-1.42-.96-2.25C20.97 7.46 19 4.5 19 4.5c-2.4 0-4.81 2.57-5.67 3.59L12 8m-3 3a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m6 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m-4 3h2l-.7 1.39c.2.64.76 1.11 1.45 1.11a1.5 1.5 0 001.5-1.5h.5a2 2 0 01-2 2c-.75 0-1.4-.41-1.75-1-.35.59-1 1-1.75 1a2 2 0 01-2-2h.5a1.5 1.5 0 001.5 1.5c.69 0 1.25-.47 1.45-1.11L11 14z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-[1rem] text-white">
                  ช่วยเหลือและดูแล
                </h3>
                <p className="text-white">
                  สัตว์ทุกตัวที่ถูกทิ้งและไร้การ ช่วยเหลือเราจะจัดการทั้งหมดเอง
                </p>
              </div>
              <div className="relative top-[-50%] p-6 bg-[#F9F1E7] rounded-lg">
                <div className="flex justify-center items-center my-4">
                  <div className="bg-white rounded-full p-2">
                    <div className="bg-[#FF7F50] rounded-full p-3">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="white"
                        className="w-12 h-12"
                      >
                        <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
                      </svg>
                    </div>
                  </div>
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
