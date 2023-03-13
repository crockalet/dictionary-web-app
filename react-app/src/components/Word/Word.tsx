import { find } from "lodash";
import { useMemo } from "react";
import { DictionaryDto } from "../../modules/api/interfaces";
import { PlayButton } from "./PlayButton";

interface WordProps extends React.ComponentPropsWithoutRef<"div"> {
  word: DictionaryDto;
}

export const Word: React.FC<WordProps> = ({ word, ...rest }) => {
  const phonetic = useMemo(
    () =>
      find(word.phonetics ?? [], (phonetic) => !!phonetic.audio) ??
      word.phonetics?.[0],
    [word.phonetics]
  );

  return (
    <div {...rest}>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold">{word.word}</h1>
          <em>{phonetic?.text ?? word.phonetic}</em>
        </div>

        {phonetic?.audio && <PlayButton audio={phonetic.audio} />}
      </div>
    </div>
  );
};
