import { nanoid } from "@reduxjs/toolkit";
import { UserCard } from "../Components/UserCard/UserCard";
import { postApi } from "../services/api";
import { useEffect, useState } from "react";
import { ROWS_PER_PAGE } from "../Assets/constants";
import { Loading } from "../Features/Loading/Loading";

export function Main() {
  const [currentId, setCurrentId] = useState(0);
  const [currentData, setCurrentData] = useState();
  const { data, isLoading } = postApi.useFetchAllPostsQuery({
    limit: ROWS_PER_PAGE,
    start: currentId,
  });

  useEffect(() => {
    setCurrentData(currentData ? currentData.concat(data) : data);
  }, [data]);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
        50 &&
      // api предоставляет лишь 100 карточек, потому останавливаем на этом запросы
      currentId < 100
    ) {
      // используем значение хука, чтобы избежать слишком частого вызова api
      setCurrentId(currentId + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        currentData?.map((props) => <UserCard key={nanoid()} {...props} />)
      )}
      {currentId >= 100 && (
        <p>Хорошая работа, Олег. Посты закончились, приходи еще!</p>
      )}
    </>
  );
}
