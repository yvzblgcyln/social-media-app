import Post from "../post/Post";
import "./posts.scss";

const posts = [
  {
    id: 1,
    time: "15 min ago",
    name: "Harry",
    userId: 1,
    profilePic: "https://picsum.photos/220",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 12,
    comments: [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://picsum.photos/221",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        time: "1 min ago",
      },
      {
        id: 2,
        name: "Johny Doe",
        profilePicture: "https://picsum.photos/225",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        time: "1 hour ago",
      },
    ],
  },
  {
    id: 2,
    time: "4 hour ago",
    name: "John",
    userId: 2,
    profilePic: "https://picsum.photos/230",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    img: "",
    likes: 52,
    comments: [],
  },
  {
    id: 3,
    time: "15 hour ago",
    name: "Ahmet",
    userId: 2,
    profilePic: "https://picsum.photos/235",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    img: "",
    likes: 26,
    comments: [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "https://picsum.photos/221",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
        time: "1 min ago",
      },
    ],
  },
];

function Posts() {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
