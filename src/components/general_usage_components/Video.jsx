import React from "react";

//IMPORTER IMAGE
import image_preview from "../../../src/assets/images/gallerie/orientation.JPG";

const Video = ({ url }) => {
  return (
    <video controls poster={image_preview} width={'100%'} className="h-full w-full rounded-lg">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
