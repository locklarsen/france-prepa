import React from "react";

const Video = ({ url }) => {
  return (
    <video className="h-full w-full rounded-lg" controls>
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
