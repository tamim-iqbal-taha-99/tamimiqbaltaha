import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { Scene } from "./Scene";
import { Overlay } from "./Overlay";

export function Portfolio3D() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 2]}>
          <color attach="background" args={["#05070f"]} />
          <fog attach="fog" args={["#05070f", 10, 26]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[6, 4, 6]} intensity={40} color="#67e8f9" />
          <pointLight position={[-6, -3, -4]} intensity={30} color="#818cf8" />
          <Suspense fallback={null}>
            <Scene pointer={pointer} />
          </Suspense>
        </Canvas>
      </div>
      <Overlay />
    </div>
  );
}
