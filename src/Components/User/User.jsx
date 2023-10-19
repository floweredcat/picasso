import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";

export const User = (props) => {
  const { title, body } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <Link to={"/picasso"}>На главную</Link>
    </div>
  );
};
