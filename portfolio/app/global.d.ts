export {};

declare global {
  interface Window {
    Spheres2Background: (
      canvas: HTMLCanvasElement | null,
      options?: {
        count?: number;
        colors?: number[];
        minSize?: number;
        maxSize?: number;
      }
    ) => any;
  }
}