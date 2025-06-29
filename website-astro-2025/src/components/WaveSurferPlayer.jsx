import { useState, useMemo, useCallback, useRef } from "react";
// import WavesurferPlayer, { useWavesurfer } from "@wavesurfer/react";
import { useWavesurfer } from "@wavesurfer/react";

const WaveSurferPlayer = () => {
  const containerRef = useRef(null);
  const formatTime = (seconds) =>
    [seconds / 60, seconds % 60]
      .map((v) => `0${Math.floor(v)}`.slice(-2))
      .join(":");

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 40,
    splitChannels: true,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: "/audio/test_audio.wav",
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);
  return (
    <>
      <div ref={containerRef} />
      <p>Current time: {formatTime(currentTime)}</p>

      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        <button onClick={onPlayPause} style={{ minWidth: "2em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default WaveSurferPlayer;
