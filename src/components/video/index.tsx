import React, { useState, useMemo } from "react";

import styles from "./style.css";
import clsx from "clsx";
import { URL } from "url";

export const Video: React.FC<{
  url: string;
}> = props => {
  const [visible, setVisible] = useState(false);

  const { iframeSrc, isYoutubeVideo } = useMemo(() => {
    const url = new URL(props.url);

    if (!url.origin.endsWith(".youtube.com")) {
      return {
        iframeSrc: null,
        isYoutubeVideo: false
      };
    }
    const id = url.searchParams.get("v");
    return {
      iframeSrc: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?rel=0",
      isYoutubeVideo: true
    };
  }, [props.url]);

  if (!isYoutubeVideo) {
    throw new Error("The provided URL '" + props.url + "' is not a YouTube URL.");
  } else if (iframeSrc == null) {
    throw new Error(
      "Unable to create a proper embed URL for the provided URL: '" + props.url + "'"
    );
  }

  return (
    <div className={styles.videoFrame}>
      <iframe
        onLoad={() => setVisible(true)}
        className={clsx(styles.video, { [styles.visible]: visible })}
        src={iframeSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...{
          referrerPolicy: "no-referrer"
        } as any}
      />
    </div>
  );
};
