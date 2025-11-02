import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostLists.module.css";
import Modal from "./Modal";

const PostLists = ({ isPosting, onStopPosting }) => {
  const [post, setPost] = useState([]);
  function addPostHandler(PostData) {
    setPost((existingPost) => [PostData, ...existingPost]);
  }
  // let modalContent;
  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         ChangeBodyHandler={ChangeBodyHandler}
  //         changeAuthorHandler={ChangeAuthorHandler}
  //       />
  //     </Modal>
  //   );
  // }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} addPostHandler={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {post.length > 0 &&
          post.map((post, postId) => (
            <Post key={postId} author={post.author} text={post.body} />
          ))}
          {post.length===0 && <div style={{textAlign:'center',color:'AppWorkspace'}}>
            <h2>There is no post Yet!</h2>
            <p>start something nice...</p>
            </div>}
      </ul>
    </>
  );
};

export default PostLists;
