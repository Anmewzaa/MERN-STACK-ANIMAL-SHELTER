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
        <figure>
          <img
            src={`${IMAGE_URL}/${animalImage}`}
            alt={animalName}
            className="max-h-[250px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-2 text-2xl">{animalName}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: animalDesciption }}
            className="mb-2"
          />
          <div className="avatar">
            <div className="w-6 rounded-full mr-2">
              <img src={authorProfile} />
            </div>
            <p className="text-gray-500">{authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
