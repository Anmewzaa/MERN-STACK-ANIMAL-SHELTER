import { postType } from "../types/globalType";
import { Link, useNavigate } from "react-router-dom";

const Card = ({
  postId,
  postTitle,
  postDesciption,
  postImage,
  postComment,
  authorUid,
  authorName,
  authorEmail,
  authorProfile,
}: postType) => {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/adopt/${postId}`)}
    >
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={`${IMAGE_URL}/${postImage}`}
            alt={postTitle}
            className="max-h-[250px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-2 text-2xl">{postTitle}</h2>
          <p className="mb-2 text-sm">{postDesciption}</p>
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
