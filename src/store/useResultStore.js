import { create } from "zustand";
import { fetchData, fetchDataById } from "../services/fetchData";

export const useResultStore = create((set) => ({
  result: [],
  getResult: async (value) => {
    const data = await fetchData(value);
    set({ result: data });
  },
  clearResult: () => set({ result: [] }),
  user: {},
  getUser: async (id) => {
    const dataUser = await fetchDataById(id);
    set({ user: dataUser });
  },
}));
