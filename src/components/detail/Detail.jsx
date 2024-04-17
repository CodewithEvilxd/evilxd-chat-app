import { updateDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { useChatStore } from "../../lib/chatStore";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

function Detail() {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username || "Anonymous"}</h2>
        <p>Everyone Under EvilXD.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are blocked!"
            : isReceiverBlocked
            ? "User Blocked"
            : "Block User"}
        </button>
        <button className="logoutBtn" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Detail;
