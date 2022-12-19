import Post from "../post/Post";
import "./posts.scss";

function Posts() {
  const posts = [
    {
      id: 1,
      name: "Harry",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
