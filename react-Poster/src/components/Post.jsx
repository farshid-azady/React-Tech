import classes from './Post.module.css';
function Post({ aouthor, text }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{aouthor}</p>
      <p className={classes.text}>{text}</p>
      
    </li>
  );
}

export default Post;
