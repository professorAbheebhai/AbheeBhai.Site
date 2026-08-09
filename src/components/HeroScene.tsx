import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const Scene3D = lazy(() => import("./Scene3D"));

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
