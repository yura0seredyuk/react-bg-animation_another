import React from "react";
import Sky from 'react-sky';
import "./style.css";

export default function App() {
  return (
    <div>
        <Sky
          images={{
            0: "https://www.clipartmax.com/png/middle/72-729242_small-star-shape-stars-starred-favourite-outline-star-icon-svg.png",
            1: "https://www.clipartmax.com/png/middle/416-4166823_icon-constellation-comments-silver-star-background.png",
          }}
          how={10} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'100px'} /* size of the rendered images */
        />
      </div>
  );
}
