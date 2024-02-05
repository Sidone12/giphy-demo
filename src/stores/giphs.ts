import { defineStore } from "pinia";
import getGiphs from "@/api/getGiphs";
import searchGiphs from "../api/searchGiphs";
import type { Gif } from "../api/types";

interface GiphsStore {
  giphs: Gif[];
}

export const useGiphsStore = defineStore("giphs", {
  state: (): GiphsStore => ({
    giphs: [],
  }),
  actions: {
    async fetchRandomGiphs(): Promise<void> {
      this.giphs = await getGiphs();
    },
    async searchNewGiphs(giph: string): Promise<void> {
      if (giph.length == 0) {
        giph = "funny";
      }
      this.giphs = await searchGiphs(giph);
    },
    async addMoreOnScroll(): Promise<void> {
      let result = await getGiphs(this.giphs.length);
      this.giphs = this.giphs.concat(result);
    },
  },
});
