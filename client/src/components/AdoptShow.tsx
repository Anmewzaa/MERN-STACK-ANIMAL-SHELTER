// React
import { useEffect, useState } from "react";
// Type
import { postType } from "../types/globalType";
// Axios
import axios from "axios";
// Component
import Card from "./Card";

const AdoptShow = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchAPI = async () => {
    await axios
      .get(`${API_URL}/get`)
      .then((response) => {
        setPosts(response.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#F9F1E7] md:py-20 py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <h2 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold font-amctic mb-4 text-center text-[#292929]">
              Who Are Wating for you ?
            </h2>
            <p className="xl:text-xl md:text-lg mb-8 xl:mx-0 mx-4 text-center text-[#58585B]">
              หากคุณต้องการทราบข้อมูลเพิ่มเติมเกี่ยวกับสัตว์เลี้ยง
              เพียงคลิกที่กล่องของมัน
            </p>
            {posts.length === 0 ? (
              <>
                <div className="flex justify-center mt-8">No post found...</div>
              </>
            ) : (
              <>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-4 xl:mx-0 mx-4">
                  {posts.slice(0, 3).map((item) => (
                    <div key={item?.animalId}>
                      <Card {...item} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptShow;
