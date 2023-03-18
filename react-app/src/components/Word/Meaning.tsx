import { Meaning as TMeaning } from "../../modules/api/interfaces";
import { useSearchQuery } from "../../modules/search-query/useSearchQuery";

interface MeaningProps extends React.ComponentPropsWithoutRef<"div"> {
  meaning: TMeaning;
}

export const Meaning: React.FC<MeaningProps> = ({
  meaning: { partOfSpeech, definitions, synonyms, antonyms },
  ...rest
}) => {
  const { setQuery } = useSearchQuery();

  const changeQuery = (query: string) => () => {
    setQuery(query);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div {...rest}>
      <div className="flex items-center gap-x-5">
        <em className="block font-bold">{partOfSpeech}</em>
        <div className="grow h-px bg-gray-200 dark:bg-gray-400"></div>
      </div>

      <div className="mt-8">
        <p className="text-gray-300">Meaning</p>

        <ul className="flex flex-col gap-y-4 mt-5">
          {definitions.map((definition, index) => (
            <li key={index}>
              <p>{definition.definition}</p>
              {definition.example && (
                <q className="text-gray-300 mt-3 block">{definition.example}</q>
              )}
            </li>
          ))}
        </ul>

        {synonyms && synonyms.length > 0 && (
          <p className="font-normal text-gray-300 mt-6">
            Synonyms
            <span className="font-bold text-primary ml-5">
              {synonyms.map((synonym, index) => (
                <a key={index} onClick={changeQuery(synonym)} className="mx-1">
                  {synonym}
                </a>
              ))}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
