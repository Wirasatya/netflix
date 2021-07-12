import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./featured.scss";
import axios from "../../axios";
import requests from "../../request";

const baseImgUrl = "https://image.tmdb.org/t/p/original";
const Featured = ({ type }) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      console.log(response.data.results);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);
  return (
    <div className="featured">
      {true && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={`${baseImgUrl}${movie?.backdrop_path}`} alt="" />
      <div className="info">
        <h1>{movie?.original_name}</h1>
        <span className="desc">{movie?.overview}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow></PlayArrow>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined></InfoOutlined>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
