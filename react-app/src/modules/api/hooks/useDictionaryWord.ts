import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DictionaryDto } from "../interfaces/DictionaryDto";
// import { DictionaryError } from "../interfaces/DictionaryError";
import { dictionaryWordKey } from "../keys/dictionaryWordKey";
import { queryDictionaryWord } from "../routes/queryDictionaryWord";
import { DictionaryError } from "../exceptions/DictionaryError";

interface UseDictionaryWordOptions<TData>
  extends Omit<
    UseQueryOptions<
      DictionaryDto[],
      DictionaryError,
      TData,
      ReturnType<typeof dictionaryWordKey>
    >,
    "queryKey" | "queryFn" | "initialData"
  > {
  initialData?: () => undefined;
}

export function useDictionaryWord<TData = DictionaryDto[]>(
  query: string,
  options?: UseDictionaryWordOptions<TData>
) {
  return useQuery(
    dictionaryWordKey(query),
    ({ queryKey }) => queryDictionaryWord(queryKey[1]),
    options
  );
}
