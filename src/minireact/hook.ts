const counterSeed = { seed: 0 };
const genCounter = () => counterSeed.seed++;
export const resetCounter = () => (counterSeed.seed = 0);
const hookCache: unknown[] = [];

const rerenderListeners: (() => void)[] = [];
export const addRerenderListener = (listener: () => void) =>
  rerenderListeners.push(listener);

export const useState = <Value>(init: Value) => {
  const count = genCounter();

  const state = (hookCache[count] as Value) ?? init;
  console.log(count, state);

  const updater = (newValue: Value | ((value: Value) => Value)) => {
    const oldValue = hookCache[count];
    if (typeof newValue === "function") {
      // @ts-ignore
      hookCache[count] = newValue(oldValue);
    } else {
      hookCache[count] = newValue;
    }

    if (newValue !== oldValue) {
      rerenderListeners.forEach((listener) => listener());
    }
  };

  return [state, updater] as const;
};
