import axios from "./axios";

type CatImage = {
  id?: string;
  width: number;
  height: number;
  url: string;
};

export type Cat = {
  id: string | number;
  name: string;
  image: CatImage;
  temperament: string;
  description: string;
  origin?: string; // "Egypt", "Greece",
};


export async function fetchCats(): Promise<Cat[]> {
  return await axios.get("https://api.thecatapi.com/v1/breeds");
}
