import type Lenis from "lenis";

const KEY = "__cyLenis" as const;

type LenisHost = { [KEY]?: Lenis };

export function setLenis(instance: Lenis | undefined) {
  if (typeof window === "undefined") return;
  (window as unknown as LenisHost)[KEY] = instance;
}

export function getLenis(): Lenis | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as LenisHost)[KEY];
}
