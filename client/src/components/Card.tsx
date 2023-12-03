import { postType } from "../types/globalType";
import { useNavigate } from "react-router-dom";

const Card = ({
  animalId,
  animalName,
  animalSpecies,
  animalHabit,
  animalDesciption,
  animalImage,
  comment,
  authorUid,
  authorName,
  authorEmail,
  authorProfile,
  date,
}: postType) => {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/adopt/${animalId}`)}
    >
      <div className="card bg-base-100 shadow-xl">
        <figure className="relative">
          <img
            src={`${IMAGE_URL}/${animalImage}`}
            alt={animalName}
            className="hover:scale-105 ease-in duration-200"
          />
        </figure>
        <div className="card-body">
          <h4 className="font-bold mb-2 text-2xl">
            Bruno <span className="text-sm font-normal">({animalSpecies})</span>
          </h4>
          <p className="mb-2">{animalHabit}</p>
          <div
            dangerouslySetInnerHTML={{ __html: animalDesciption }}
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
