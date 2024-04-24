import { defineStore } from 'pinia'
import getGiphs from '@/api/getGiphs'
import type { Gif } from '../api/types'

interface GiphsStore {
    giphs: Gif[]
    searchToken: string
    giph: Gif | null
}

export const useGiphsStore = defineStore('giphs', {
    state: (): GiphsStore => ({
        giphs: [],
        searchToken: '',
        giph: null,
    }),
    actions: {
        async fetchRandomGiphs(): Promise<void> {
            this.giphs = await this.loadGifs()
        },
        async searchNewGiphs(giph: string): Promise<void> {
            this.searchToken = giph
            this.giphs = await this.loadGifs()
        },
        async addMoreOnScroll(): Promise<void> {
            let result = await this.loadGifs()
            this.giphs = this.giphs.concat(result)
        },
        addSelectedGiph(selectedId: string) {
            const foundGiph = this.giphs.find((el) => el.id === selectedId)
            if (foundGiph) {
                this.giph = foundGiph
            }
        },
        loadGifs(): Promise<Gif[]> {
            return getGiphs(
                this.searchToken.length > 0 ? 'search' : 'trending',
                this.giphs.length,
                this.searchToken
            )
        },
    },
})
