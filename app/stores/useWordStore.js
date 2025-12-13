import { defineStore } from "pinia";

export const useWordStore = defineStore("wordStore", {
  state: () => ({
    selectedWord: null,
  }),
});
