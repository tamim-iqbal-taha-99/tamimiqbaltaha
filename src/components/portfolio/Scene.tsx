import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.15;
    const t = state.clock.elapsedTime;
    mesh.current.position.y = Math.sin(t * 0.6) * 0.25;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0e7490"
          emissiveIntensity={0.55}
          roughness={0.15}
          metalness={0.85}
          distort={0.38}
          speed={2.2}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const g = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!g.current) return;
    g.current.rotation.z += delta * 0.12;
    g.current.rotation.x += delta * 0.05;
  });
  return (
    <group ref={g}>
      <Torus args={[2.6, 0.02, 16, 128]} rotation-x={Math.PI / 2.4}>
        <meshStandardMaterial color="#67e8f9" emissive="#155e75" emissiveIntensity={0.8} />
      </Torus>
      <Torus args={[3.2, 0.015, 16, 128]} rotation-x={Math.PI / 1.8}>
        <meshStandardMaterial color="#a5b4fc" emissive="#3730a3" emissiveIntensity={0.8} />
      </Torus>
    </group>
  );
}

function Satellite({ radius, speed, size, color, offset }: { radius: number; speed: number; size: number; color: string; offset: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.7) * 0.8, Math.sin(t) * radius);
  });
  return (
    <group ref={ref}>
      <Icosahedron args={[size, 0]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} metalness={0.6} />
      </Icosahedron>
    </group>
  );
}

function Particles({ count = 900 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);
  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#94a3b8" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function Scene({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  const rig = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!rig.current) return;
    const p = pointer.current ?? { x: 0, y: 0 };
    rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, p.x * 0.35, 3, delta);
    rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, p.y * 0.25, 3, delta);
    const scroll = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight || 1), 1);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, 8 - scroll * 3.5, 2, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, -scroll * 2, 2, delta);
  });
  return (
    <group ref={rig}>
      <Core />
      <Rings />
      <Satellite radius={3.4} speed={0.5} size={0.22} color="#22d3ee" offset={0} />
      <Satellite radius={4.1} speed={0.34} size={0.3} color="#818cf8" offset={2.1} />
      <Satellite radius={4.8} speed={0.24} size={0.18} color="#f472b6" offset={4.2} />
      <Particles />
      <Sparkles count={120} scale={12} size={2} speed={0.4} color="#67e8f9" />
    </group>
  );
}
