import React from "react";

function Video() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aTC_RNYtEb0?si=shKE4PTg6MMK66bH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-full h-[500px] object-cover p-5"
      ></iframe>
    </div>
  );
}

export default Video;
