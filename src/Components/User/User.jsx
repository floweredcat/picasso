import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { postApi } from "../../services/api";

export const User = (props) => {
  const { title, body } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <Link to={"/app"}>На главную</Link>
    </div>
  );
};
