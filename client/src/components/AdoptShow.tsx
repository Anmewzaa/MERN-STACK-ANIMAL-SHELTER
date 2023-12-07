const AdoptShow = () => {
  return (
    <div className="bg-gray-100 md:py-20 py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold font-amctic mb-6 text-center">
              Who Are Wating for you ?
            </h2>
            <p className="xl:text-xl md:text-lg mb-8 xl:mx-0 mx-4 text-center">
              หากคุณต้องการทราบข้อมูลเพิ่มเติมเกี่ยวกับสัตว์เลี้ยง
              เพียงคลิกที่กล่องของมัน
            </p>
          </div>
          <button className="btn rounded-full px-8 bg-white">Meet More</button>
        </div>
      </div>
    </div>
  );
};

export default AdoptShow;
