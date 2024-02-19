import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from "./MovieRow";
import "./app.css";
import FeaturedMovie from "./featuredMovie.js";
import Header from "./Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {FeaturedData && <FeaturedMovie item={FeaturedData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por{" "}
        <span role="img" aria-label="rock">
          🤟
        </span>{" "}
        Ruan Felippe
        <br />
        GIT: @ruanfelippecode / INSTA: @ruanfelippev
        <br />
        Todos os direitos reservados à NETFLIX Inc.
        <br />
        Dados pegos do site TheMovieDB.org
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
};
