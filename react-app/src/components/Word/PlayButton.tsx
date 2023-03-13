import { useRef } from "react";

interface PlayButtonProps {
  audio: string;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ audio }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleToggle() {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.play();
  }

  return (
    <button onClick={handleToggle}>
      <audio src={audio} ref={audioRef}></audio>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        className="text-primary group"
      >
        <g fill="currentColor" fill-rule="evenodd">
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            className="opacity-25 group-hover:opacity-100 transition-opacity"
          />
          <path
            d="M29 27v21l21-10.5z"
            className="group-hover:text-white dark:group-hover:text-gray-600 transition-colors"
          />
        </g>
      </svg>
    </button>
  );
};
