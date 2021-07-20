import create from 'zustand/vanilla';

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

// Create our store using the interface we defined earlier.
const store = create<BearStore>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
