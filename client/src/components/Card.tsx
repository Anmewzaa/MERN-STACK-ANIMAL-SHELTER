import { postType } from "../types/globalType";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={`${IMAGE_URL}/${postImage}`}
            alt={postTitle}
            className="max-h-[250px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postTitle}</h2>
          <p>{postDesciption}</p>
          <div className="card-actions justify-end">
            <Link to={`/adopt/${postId}`} className="btn btn-primary">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
