import 'alpinejs'

declare module 'alpinejs' {
  export interface Alpine {
    start(): void;
    data(name: string, callback: () => any): void;
  }

  const alpine: Alpine;
  export default alpine;
}

declare global {
  interface Window {
    Alpine: Alpine;
  }
}
