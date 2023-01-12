import { create } from 'zustand';

const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

export function BearCounter() {
    const bears = useBearStore((state) => state.bears);
    const increase = useBearStore((state) => state.increasePopulation);
    return (
        <>
            <h1><span id="bear-count">{bears}</span> around here ...</h1>
            <button id="bear-button" onClick={increase}>Increase</button>
        </>
    );
}