import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostLists.module.css";
import Modal from "./Modal";

const PostLists = ({ isPosting, onStopPosting }) => {
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
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        
       
        <Post aouthor="farshid" text="check out this video" />
      </ul>
    </>
  );
};

export default PostLists;
