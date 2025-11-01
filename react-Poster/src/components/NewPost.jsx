import classes from './NewPost.module.css'

const NewPost = (props) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.ChangeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={props.changeAuthorHandler}/>
        
      </p>
    </form>
  );
};

export default NewPost;
