import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1a202fcfbfmsh61758ded6a548cap13751djsn89a64a62f041",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Movies & Series</h1>
        <div className={styles.card_section}>
          {main_data.map((curElem, i) => {
            return <MovieCard key={i} {...curElem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movie;
