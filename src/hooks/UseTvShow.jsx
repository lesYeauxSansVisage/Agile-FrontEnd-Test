import { fetcher } from "./UseEpisode";
import useSWR from "swr";

export const useTvShow = () => {
  const { data, error } = useSWR(
    "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    showData: data,
    error: error,
    isLoading: !data && !error,
  };
};
