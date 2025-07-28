import { create } from "zustand";

interface Memo {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MemoStore {
  memos: Memo[];
  selectedMemo: Memo | null;
  isLoading: boolean;
  setMemos: (memos: Memo[]) => void;
  addMemo: (memo: Memo) => void;
  updateMemo: (id: string, memo: Partial<Memo>) => void;
  deleteMemo: (id: string) => void;
  setSelectedMemo: (memo: Memo | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useMemoStore = create<MemoStore>((set) => ({
  memos: [],
  selectedMemo: null,
  isLoading: false,
  setMemos: (memos) => set({ memos }),
  addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo] })),
  updateMemo: (id, memo) =>
    set((state) => ({
      memos: state.memos.map((m) => (m.id === id ? { ...m, ...memo } : m)),
    })),
  deleteMemo: (id) =>
    set((state) => ({
      memos: state.memos.filter((m) => m.id !== id),
    })),
  setSelectedMemo: (memo) => set({ selectedMemo: memo }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
