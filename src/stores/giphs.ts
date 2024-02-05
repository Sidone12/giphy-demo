import { defineStore } from "pinia";
import getGiphs from "@/api/getGiphs";
import searchGiphs from "../api/searchGiphs";
import type { ApiMethod, Gif } from "../api/types";

interface GiphsStore {
  giphs: Gif[];
  searchToken: string;
}

export const useGiphsStore = defineStore("giphs", {
  state: (): GiphsStore => ({
    giphs: [],
    searchToken: "",
  }),
  actions: {
    async fetchRandomGiphs(): Promise<void> {
      this.giphs = await this.loadGifs();
    },
    async searchNewGiphs(giph: string): Promise<void> {
      this.searchToken = giph;
      this.giphs = await this.loadGifs();
    },
    async addMoreOnScroll(): Promise<void> {
      let result = await this.loadGifs();
      this.giphs = this.giphs.concat(result);
    },
    loadGifs(): Promise<Gif[]> {
      return getGiphs(this.searchToken.length > 0 ? 'search': 'trending', this.giphs.length, this.searchToken);
    },
  },
});

// import { defineStore } from "pinia";
// import getGiphs from "@/api/getGiphs";
// import searchGiphs from "../api/searchGiphs";
// import type { Gif } from "../api/types";

// interface GiphsStore {
//   giphs: Gif[];
//   searchToken: string,
// }

// export const useGiphsStore = defineStore("giphs", {
//   state: (): GiphsStore => ({
//     giphs: [],
//     searchToken:''
//   }),
//   actions: {
//     async fetchRandomGiphs(): Promise<void> {
//       this.giphs = await getGiphs();
//     },
//     async searchNewGiphs(giph: string): Promise<void> {
//       this.searchToken = giph
//       this.giphs = await searchGiphs(giph, this.giphs.length);
//     },
//     async addMoreOnScroll(): Promise<void> {
//       let result = await searchGiphs(this.searchToken, this.giphs.length);
//       this.giphs = this.giphs.concat(result);
//     },
//   },
// });
