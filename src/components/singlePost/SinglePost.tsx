import "./singlePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://i.picsum.photos/id/654/800/800.jpg?hmac=gi-ImBCSXApw0arnugXoCa9IJ2qcmdxleEjzIcUNHfw" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Bruno</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur quos. In vero beatae consequuntur fuga nihil, amet itaque eligendi, veritatis quas nobis porro tenetur quia officiis, voluptatibus autem! Vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur quos. In vero beatae consequuntur fuga nihil, amet itaque eligendi, veritatis quas nobis porro tenetur quia officiis, voluptatibus autem! Vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur quos. In vero beatae consequuntur fuga nihil, amet itaque eligendi, veritatis quas nobis porro tenetur quia officiis, voluptatibus autem! Vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur quos. In vero beatae consequuntur fuga nihil, amet itaque eligendi, veritatis quas nobis porro tenetur quia officiis, voluptatibus autem! Vero.</p>
      </div>
    </div>
  )
}

export default SinglePost;