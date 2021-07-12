import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import Youtube from "react-youtube";
import axios from "../../axios";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

const ListItem = ({
  index,
  item,
  setTrailerUrl,
  trailerUrl,
  genres,
  isLargeRow,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `movie/${item.id}/videos?api_key=eb1ee3c0a15ce7ca0b82a834e3b1f3f8`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      onClick={handleClick}
      className="listItem"
      style={{
        height: isLargeRow && "300px",
        left: isHovered && index * 225 - 50 + index * 2.5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={
          isLargeRow
            ? `${baseImgUrl}${item.backdrop_path}`
            : `${baseImgUrl}${item.poster_path}`
        }
        alt={`${item.title}`}
      />
      {isHovered && (
        <>
          {trailerUrl && (
            <Youtube className="trailer" videoId={trailerUrl} opts={opts} />
          )}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{item.title}</span>
              <span className="limit">{item.adult ? "18+" : "SU"}</span>
              <span>
                {item.release_date
                  ? item.release_date?.substring(0, 4)
                  : item.first_air_date?.substring(0, 4)}
              </span>
            </div>
            <div className="desc">{item.overview}</div>
            {genres
              .filter((f) => f.id === item.genre_ids[0])
              .map((genre) => (
                <div key={genre.id} className="genre">
                  {genre?.name}
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
