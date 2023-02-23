import { useState } from "react";
import { Link } from "react-router-dom";
import "./rightBar.scss";

const latestActivity = [
  { id: 1, name: "Madison ", activity: "liked a post", time: "1 min ago", img: "https://picsum.photos/204" },
  { id: 2, name: "Kajus ", activity: "liked a post", time: "15min ago", img: "https://picsum.photos/203" },
  { id: 3, name: "Zaina ", activity: "share a post", time: "1 hour ago", img: "https://picsum.photos/202" },
  { id: 4, name: "Elise ", activity: "comment a post", time: "3 hour ago", img: "https://picsum.photos/201" },
];
const suggestedArea = [
  { id: 1, name: "Sara Combs", online: true, img: "https://picsum.photos/205" },
  { id: 2, name: "Ahmed Molina", online: true, img: "https://picsum.photos/206" },
  { id: 3, name: "Mahnoor Weaver", online: true, img: "https://picsum.photos/208" },
];
const friends = [
  { id: 1, name: "Madison Alvarez", online: true, img: "https://picsum.photos/210" },
  { id: 2, name: "Zaina Gillespie", online: true, img: "https://picsum.photos/211" },
  { id: 3, name: "Kajus Parks", online: false, img: "https://picsum.photos/212" },
  { id: 4, name: "Solomon Knight", online: true, img: "https://picsum.photos/214" },
  { id: 5, name: "Elise Holman", online: false, img: "https://picsum.photos/215" },
  { id: 6, name: "Sara Combs", online: true, img: "https://picsum.photos/216" },
  { id: 7, name: "Leonie Carroll", online: true, img: "https://picsum.photos/217" },
];

function RightBar() {
  const [suggestedAreaArray, setSuggestedAreaArray] = useState(suggestedArea);
  const [friendsArray, setFriendsArray] = useState(friends);

  const handleDismiss = (index) => {
    const array = [...suggestedAreaArray];
    array.splice(index, 1);
    setSuggestedAreaArray(array);
  };

  const handleAdd = (index) => {
    const array = [...friendsArray, suggestedAreaArray[index]];
    setFriendsArray(array);
    handleDismiss(index);
  };

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Latest activity</span>
          {latestActivity.map((user, index) => (
            <div className="userinfo" key={index}>
              <div className="user">
                <img src={user.img} alt="" />
                <div>
                  <Link to={`/profile/${index}`}>
                    <span>{user.name} </span>
                  </Link>
                  {user.activity}
                </div>
              </div>
              <div>{user.time}</div>
            </div>
          ))}
        </div>
        {suggestedAreaArray.length !== 0 && (
          <div className="item">
            <span>Suggested for you</span>
            {suggestedAreaArray.map((user, index) => (
              <div className="userinfo" key={index}>
                <div className="user">
                  <img src={user.img} alt="" />
                  <Link to={`/profile/${index}`}>
                    <span>{user.name}</span>
                  </Link>
                </div>
                <div className="buttons">
                  <button onClick={() => handleAdd(index)}>follow</button>
                  <button onClick={() => handleDismiss(index)}>dismiss</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="item">
          <span>Friends </span>
          {friendsArray.map((user, index) => (
            <div className="userinfo" key={index}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="online" style={{ backgroundColor: !user.online && "red" }}></div>
                <Link to={`/profile/${index}`}>
                  <span>{user.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightBar;
