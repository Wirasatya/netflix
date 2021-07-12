import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Topbar from "../../components/Topbar/Topbar";
import "./home.scss";
import requests from "../../request";
import { useEffect, useState } from "react";
import axios from "../../axios";

const Home = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(
          `genre/movie/list?api_key=eb1ee3c0a15ce7ca0b82a834e3b1f3f8&language=en-US`
        );
        setGenres(response.data.genres);
      } catch (error) {}
    };
    getGenres();
  }, []);
  return (
    <div className="home">
      <Topbar></Topbar>
      <Featured></Featured>
      <List
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        genres={genres}
        isLargeRow
      />
      <List
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        genres={genres}
      />
      <List
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        genres={genres}
      />
      <List
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        genres={genres}
      />
      <List
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        genres={genres}
      />
      <List
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        genres={genres}
      />
      <List
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        genres={genres}
      />
      <List
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        genres={genres}
      />
    </div>
  );
};

export default Home;
