import "./post.css";

function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://i.picsum.photos/id/654/800/800.jpg?hmac=gi-ImBCSXApw0arnugXoCa9IJ2qcmdxleEjzIcUNHfw" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius quae nesciunt facilis rerum eum suscipit, earum quisquam illo voluptatibus, velit blanditiis qui repudiandae autem eaque libero modi delectus quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius quae nesciunt facilis rerum eum suscipit, earum quisquam illo voluptatibus, velit blanditiis qui repudiandae autem eaque libero modi delectus quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius quae nesciunt facilis rerum eum suscipit, earum quisquam illo voluptatibus, velit blanditiis qui repudiandae autem eaque libero modi delectus quidem!</p>
    </div>
  )
}

export default Post;