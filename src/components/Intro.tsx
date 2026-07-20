import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

export function Intro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const laptopLidRef = useRef<HTMLDivElement>(null);
  const laptopScreenRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !logoRef.current || !laptopRef.current || !laptopLidRef.current || !laptopScreenRef.current || !glowRef.current || !profileRef.current) return;

    // Three.js setup for particles
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    const orangeColor = new THREE.Color('#FF6A1A');
    const whiteColor = new THREE.Color('#FFFFFF');

    for(let i = 0; i < particlesCount * 3; i+=3) {
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i+2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? orangeColor : whiteColor;
      colorArray[i] = mixedColor.r;
      colorArray[i+1] = mixedColor.g;
      colorArray[i+2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 10;

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            cancelAnimationFrame(rafId);
            renderer.dispose();
            onComplete();
          }
        });
      }
    });

    // Reset initial states
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0, filter: 'blur(10px)' });
    gsap.set(profileRef.current, { scale: 0.8, opacity: 0, filter: 'blur(10px)' });
    gsap.set(laptopRef.current, { scale: 0, opacity: 0, rotationX: 20, rotationY: -10, z: -500 });
    gsap.set(laptopLidRef.current, { rotationX: -90 });
    gsap.set(laptopScreenRef.current, { opacity: 0 });
    gsap.set(glowRef.current, { opacity: 0, scale: 0 });

    // Scene 1: Glow and Profile appears
    tl.to(glowRef.current, { opacity: 0.5, scale: 1, duration: 0.8, ease: "power2.out" }, 0);
    tl.to(material, { opacity: 0.6, duration: 0.8 }, 0);
    tl.to(profileRef.current, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: "expo.out" }, 0.2);

    // Scene 2: Profile transforms to Logo
    tl.to(profileRef.current, { scale: 1.1, opacity: 0, filter: 'blur(10px)', duration: 0.4, ease: "power2.in" }, 1.0);
    tl.to(logoRef.current, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.6, ease: "expo.out" }, 1.2);
    
    // Scene 3: Break apart
    tl.to(logoRef.current, { scale: 1.1, opacity: 0, filter: 'blur(20px)', duration: 0.4, ease: "power2.in" }, 1.8);
    tl.to(particlesMesh.scale, { x: 2, y: 2, z: 2, duration: 0.6, ease: "power2.inOut" }, 1.8);
    tl.to(material, { opacity: 0, duration: 0.4 }, 2.0);

    // Scene 4: Laptop appears
    tl.to(laptopRef.current, { scale: 1, opacity: 1, z: 0, duration: 0.8, ease: "expo.out" }, 2.0);
    tl.to(laptopLidRef.current, { rotationX: 0, duration: 0.6, ease: "power3.inOut" }, 2.2);
    tl.to(laptopScreenRef.current, { opacity: 1, duration: 0.3 }, 2.6);

    // Scene 5: Laptop zoom to fill
    tl.to(laptopRef.current, { 
      rotationX: 0, 
      rotationY: 0, 
      scale: 5, 
      z: 500,
      opacity: 0,
      duration: 0.8, 
      ease: "power3.in" 
    }, 3.0);

    return () => {
      cancelAnimationFrame(rafId);
      renderer.dispose();
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden perspective-[1000px] cursor-pointer" onClick={onComplete}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Orange Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[100px] z-10"
      />

      <div className="absolute z-20 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {/* Profile Image (First phase) */}
        <div ref={profileRef} className="absolute w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          <img src="/salehrizwanlogo.png" alt="Profile" className="w-full h-full object-cover bg-brand-black p-4" />
        </div>
        
        {/* Logo (Second phase) */}
        <div 
          ref={logoRef} 
          className="absolute w-48 h-48 bg-white rounded-full flex items-center justify-center drop-shadow-[0_0_30px_rgba(255,106,26,0.5)] overflow-hidden"
        >
          <img 
            src="/salehrizwanlogo.png" 
            alt="Saleh Rizwan" 
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      </div>

      {/* 3D Laptop */}
      <div 
        ref={laptopRef}
        className="absolute z-30 flex flex-col items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          ref={laptopLidRef}
          className="w-[80vw] max-w-[800px] aspect-[16/10] bg-zinc-900 rounded-t-2xl border-t-4 border-x-4 border-zinc-800 shadow-[0_-20px_50px_rgba(255,106,26,0.2)] overflow-hidden origin-bottom relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div 
            ref={laptopScreenRef}
            className="absolute inset-2 bg-white rounded-t-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
          >
            <div className="text-3xl font-bold tracking-tight text-brand-black flex gap-2">
              Saleh<span className="text-brand-orange font-normal">Rizwan</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          </div>
        </div>
        
        <div 
          className="w-[84vw] max-w-[840px] h-[30px] bg-zinc-800 rounded-b-xl shadow-2xl relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[10px] bg-zinc-900 rounded-b-md" />
           <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700 rounded-b-xl" />
        </div>
      </div>
    </div>
  );
}
