import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export const ScrollManager = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // SubhanHakim request: "make it smooth". 
        // This hook ensures the loop runs.
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Optional: Expose lenis instance globally if needed for other components
        // (window as any).lenis = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};
