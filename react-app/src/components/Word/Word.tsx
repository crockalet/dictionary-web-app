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
          <h1 className="text-3xl md:text-heading-l font-bold">{word.word}</h1>
          <em className="font-sans-serif text-primary not-italic text-body-m md:text-heading-m mt-2 block">
            {word.phonetic ?? phonetic?.text}
          </em>
        </div>

        {phonetic?.audio && <PlayButton audio={phonetic.audio} />}
      </div>
    </div>
  );
};
