import { Link } from "react-router-dom";
import { postApi } from "../../services/api";
import styles from "./styles.module.css";

export const UserCard = ({ id, title, body }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <Link to={"/app/post/" + id}>Подробнее</Link>
    </div>
  );
};
