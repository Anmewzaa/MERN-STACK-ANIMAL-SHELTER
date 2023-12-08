// Components
import Navbar from "../components/Navbar";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
// Image
import Dog from "../images/dog.png";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1200px] my-20">
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-0 xl:mx-0 mx-4">
          <img
            src={Dog}
            alt="About image"
            className="rounded-xl shadow-lg lg:h-[100%]"
          />
          <div className="my-8 xl:mx-0 mx-4">
            <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl xl:w-[600px] font-amctic text-[#292929] font-bold mb-8">
              About us
            </h2>
            <p className="mb-8 text-[#58585B] text-xl">
              เว็บไซต์นี้ถูกสร้างขึ้นตั้งแต่ปี 2023 เราได้ช่วยสุนัขและแมวให้พบ
              ครอบครัวใหม่ เพื่อช่วยแก้ไขปัญหาสัตว์จรจัด
              ซึ่งเป็นเรื่องสำคัญที่เราต้อง
              ดึงความสนใจของผู้คนไปยังปัญหาที่มีอยู่ และพวกเราต้องการให้
              การอยู่ร่วมกันระหว่างมนุษย์และสัตว์
            </p>
            <div className="flex mb-8">
              <div className="flex flex-col justify-center items-center mr-8">
                <span className="text-5xl">30</span>{" "}
                <span className="block">มองหาบ้าน</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-5xl">57</span>{" "}
                <span className="block">หาบ้าน</span>
              </div>
            </div>
            <p className="mb-4 text-[#58585B] text-xl">
              พื้นที่ของกิจกรรม : การควบคุมจำนวนสัตว์จรจัด (ช่วยเหลือ ดูแล
              หาบ้าน) การเก็บลูกสุนัข ลูกแมว สัตว์ที่ป่วยหนัก
              ที่พักพิงสำหรับสัตว์ไร้บ้าน สัตว์พิการ
              ที่ต้องการการดูแลอย่างต่อเนื่อง
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-[1200px] my-20 rounded-xl">
          <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl xl:w-[600px] font-amctic text-[#292929] font-bold mb-8 xl:mx-0 mx-4 lg:text-start text-center">
            Our team
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-20 gap-10 xl:mx-0 mx-4">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFGQDyNkAZNUQ/profile-displayphoto-shrink_800_800/0/1691511669236?e=1707350400&v=beta&t=CCabB95T9P9JwV2vqt1l2uejBM3tM3ZCmHtqlkhhBHg"
                alt="profile picture"
                className="rounded-xl mb-4 lg:w-[100%] md:w-[75%] w-[50%]"
              />
              <h4 className="text-lg font-bold mb-2">นายปุณยกร เพชรแก้ว</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.6435-9/169827499_1455429891454595_628811604176943478_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=V_LGvxkCMJIAX_g-qEQ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfBuHBL99skxohW-VS52JN-SjzOfojtW_HrBaqHto20BIA&oe=659A2E42"
                alt="profile picture"
                className="rounded-xl mb-4 lg:w-[100%] md:w-[75%] w-[50%]"
              />
              <h4 className="text-lg font-bold mb-2">นางสาวณัฐรุจา พระพล</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/318100076_1508069669676170_6251487764969729093_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=VK4N4ZiHm7cAX-icGRB&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC8ZnZlwHCk31UUyP6FOvBC2sgJQc3IahKJ0LXdA5PT7w&oe=6578A2CF"
                alt="profile picture"
                className="rounded-xl mb-4 lg:w-[100%] md:w-[75%] w-[50%]"
              />
              <h4 className="text-lg font-bold mb-2">นายสิรวิชญ์ แสงกล้าหาญ</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.6435-1/30595299_1960071657640563_1164376298349395968_n.jpg?stp=dst-jpg_s320x320&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=G9mToafdVo8AX_HPZ_y&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfALOSWt-J-N3x6iTopOGZgUKFtsSbsrrrtSsijrDhszMA&oe=659A2F64"
                alt="profile picture"
                className="rounded-xl mb-4 lg:w-[100%] md:w-[75%] w-[50%]"
              />
              <h4 className="text-lg font-bold mb-2">
                นายบุริศร์ สมเกียรติกุล
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Contactus />
      <Footer />
    </>
  );
};

export default AboutPage;
