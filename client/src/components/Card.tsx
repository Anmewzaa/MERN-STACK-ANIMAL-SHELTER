import { postType } from "../types/globalType";
import { useNavigate } from "react-router-dom";

const Card = ({
  animalId,
  animalName,
  animalSpecies,
  animalHabit,
  animalDesciption,
  animalImage,
}: postType) => {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/adopt/${animalId}`)}
    >
      <div className="card bg-base-100 shadow-xl bg-cover bg-center duration-300 bg-no-repeat h-[500px] rounded-lg">
        <figure className="relative">
          <img
            src={`${IMAGE_URL}/${animalImage}`}
            alt={animalName}
            className="hover:scale-110 ease-in duration-200"
          />
        </figure>
        <div className="card-body my-4">
          <div className="flex flex-col justify-around h-[150px]">
            <h4 className="font-bold mb-2 text-2xl">
              {animalName}{" "}
              <span className="text-sm font-normal">({animalSpecies})</span>
            </h4>
            <p className="mb-2">{animalHabit}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: animalDesciption.slice(0, 150),
              }}
              className="mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
