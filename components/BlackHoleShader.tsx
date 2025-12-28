import React, { useRef, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// --- Custom Shader Material ---

const BlackHoleMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorInner: new THREE.Color('#4c1d95'), // Deep Purple
    uColorOuter: new THREE.Color('#7850ff'), // Vibrant Violet
    uColorCore: new THREE.Color('#ffffff'),  // White Singularity Edge
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec3 uColorInner;
    uniform vec3 uColorOuter;
    uniform vec3 uColorCore;
    varying vec2 vUv;

    // --- NOISE ---
    float random (in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      // 1. Coordinates: Centered at bottom
      vec2 center = vec2(0.5, -0.25);
      vec2 uv = vUv - center;
      float dist = length(uv);
      float angle = atan(uv.y, uv.x);

      // 2. Horizon Shape (The bright arc)
      float radius = 0.5;
      float thickness = 0.02;
      float horizon = smoothstep(radius, radius + thickness, dist) * 
                      smoothstep(radius + thickness + 0.15, radius + thickness, dist);
      
      // Make the horizon brighter at the top of the arc
      float topFade = smoothstep(-0.2, 0.6, uv.y);
      // helix *= topFade; // Removed typo
      horizon *= topFade;

      // 3. Glow / Atmosphere (The Violet Aura)
      float glow = smoothstep(radius - 0.1, radius + 0.6, dist) * 
                   smoothstep(radius + 0.8, radius + 0.2, dist);
      
      // 4. Inner "Black Hole" Void
      float core = 1.0 - smoothstep(radius - 0.02, radius, dist);

      // 5. Stars (Background)
      float starNoise = random(vUv);
      float stars = step(0.998, starNoise) * random(vUv * 10.0 + uTime * 0.1); 

      // --- COLOR MIXING ---
      
      // Palette extracted from reference
      vec3 colDeepPurple = vec3(0.05, 0.0, 0.2); // Darkest background
      vec3 colVibrant   = vec3(0.5, 0.2, 1.0);   // Glowing Aura
      vec3 colBright    = vec3(1.0, 1.0, 1.0);   // The rim itself
      
      vec3 finalColor = colDeepPurple; // Base
      
      // Add Glow
      finalColor += colVibrant * glow * 1.5 * topFade;
      
      // Add Horizon (White Hot)
      finalColor += colBright * horizon * 2.0;
      
      // Add Stars (faintly)
      finalColor += vec3(1.0) * stars * 0.5 * (1.0 - glow); // Stars mostly outside the glow

      // Mask Core (The void is dark, but maybe a tiny bit of purple leak)
      finalColor = mix(finalColor, vec3(0.0), core);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ BlackHoleMaterial });

export const BlackHoleShader = () => {
  const materialRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[12, 6, 1]} rotation={[0, 0, 0]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      {/* @ts-ignore */}
      <blackHoleMaterial ref={materialRef} transparent opacity={1} />
    </mesh>
  );
};
