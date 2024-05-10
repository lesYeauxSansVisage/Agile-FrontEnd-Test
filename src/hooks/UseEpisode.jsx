import useSWR from "swr";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useEpisode = () => {
  const { data, error } = useSWR(
    "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    episodeData: data,
    error: error,
    isLoading: !data && !error,
  };
};
