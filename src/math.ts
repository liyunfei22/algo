export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  if (a === 0) {
    return b;
  }
  return a - b;
}

export const multiply = (a: number, b: number): number => {
  return a * b;
};
