import { useParams } from "react-router-dom";
import { postApi } from "../services/api";
import { User } from "../Components/User/User";

export const Post = () => {
  const { id } = useParams();
  const { data } = postApi.useFetchPostByIdQuery(id);

  return data && <User {...data} />;
};
