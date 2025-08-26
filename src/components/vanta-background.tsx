
'use client';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import { useTheme } from 'next-themes';

export const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (FOG) {
        const effect = FOG({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x6d7bd6,
            midtoneColor: 0x89d4d6,
            lowlightColor: 0xb6b4c5,
            baseColor: theme === 'dark' ? 0x0 : 0xf0f4f8,
            blurFactor: 0.8,
            speed: 1.5,
            zoom: 0.6,
        });
        setVantaEffect(effect);

        return () => {
            if (effect) effect.destroy();
        };
    }
  }, [theme]);


  return <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0" />;
};
