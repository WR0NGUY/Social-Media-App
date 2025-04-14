import { TiDelete } from "react-icons/ti";

const Post = ({ post }) => {

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <TiDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag">#{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {post.reactions} Reacted to this Post.
        </div>
      </div>
    </div>
  );
};

export default Post;
