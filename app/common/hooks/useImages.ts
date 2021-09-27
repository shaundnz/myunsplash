import useSWR from "swr";
import {Image} from "../types/Image";
import axios, {AxiosError} from "axios";



const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const useImages = () => {
  const { data, error} = useSWR<Image[]>(`/api/images`, fetcher)

  return {
    images: data,
    isLoading: !error && !data,
    isError: error
  }
}

