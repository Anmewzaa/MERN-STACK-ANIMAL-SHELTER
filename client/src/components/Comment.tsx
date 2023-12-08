import { useUserAuth } from "../contexts/UserAuthContext";
import { useState } from "react";
import axios from "axios";
// React router dom
import { useParams } from "react-router-dom";

import { commentType } from "../types/globalType";

const Comment = ({ comment }: commentType) => {
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useUserAuth();
  const [newComment, setNewComment] = useState("");
  const addComment = () => {
    axios
      .put(`${API_URL}/comment/${id}`, {
        comment: [
          ...comment,
          {
            authorUid: user.uid,
            authorName: user.displayName,
            authorProfile: user.photoURL,
            Text: newComment,
          },
        ],
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      {JSON.stringify(comment)}
      {user ? (
        <>
          {comment &&
            comment.map((item) =>
              item.authorUid === user.uid ? (
                <>
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="Profile" src={item.authorProfile} />
                      </div>
                    </div>
                    <div className="chat-bubble bg-gray-200">
                      <div className="chat-header font-bold text-black">
                        {item.authorName}
                      </div>
                      <div className="text-gray-800">{item.Text}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="Profile" src={item.authorProfile} />
                      </div>
                    </div>
                    <div className="chat-bubble bg-gray-200">
                      <div className="chat-header font-bold text-black">
                        {item.authorName}
                      </div>
                      <div className="text-gray-800">{item.Text}</div>
                    </div>
                  </div>
                </>
              )
            )}
        </>
      ) : (
        <>
          {comment &&
            comment.map((item) => (
              <>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Profile" src={item.authorProfile} />
                    </div>
                  </div>
                  <div className="chat-bubble bg-gray-200">
                    <div className="chat-header font-bold text-black">
                      {item.authorName}
                    </div>
                    <div className="text-gray-800">{item.Text}</div>
                  </div>
                </div>
              </>
            ))}
        </>
      )}
      <div className="my-4 flex gap-2">
        <input
          type="text"
          className="input input-bordered w-full"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        {user ? (
          <>
            <button className="btn btn-outline" onClick={addComment}>
              Comment
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline btn-disabled">Comment</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
