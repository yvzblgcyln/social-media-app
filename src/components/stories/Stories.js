import { useContext } from "react";
import CurrentUserContext from "../../context/authContext";
import "./stories.scss";

function Stories() {
  const { currentUser } = useContext(CurrentUserContext);
  const stories = [
    {
      id: 1,
      name: "Husna Hodges",
      img: "https://picsum.photos/220",
    },
    {
      id: 2,
      name: "Ricky Scott",
      img: "https://picsum.photos/250",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://picsum.photos/260",
    },
    {
      id: 4,
      name: "Izaak Dotson",
      img: "https://picsum.photos/280",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <button>+</button>
        <span>{currentUser.name}</span>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt=""></img>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
