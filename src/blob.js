import React, { useEffect } from 'react';
import './blob.css';

const Blob = () => {
    useEffect(() => {
        const loadKuteJs = async () => {
            try {
                const kuteJsModule = await import('https://cdn.jsdelivr.net/npm/kute.js@2.2.4/+esm');
                const KUTE = kuteJsModule.default;

                const tween = KUTE.fromTo(
                    '#blob1',
                    { path: '#blob1' },
                    { path: '#blob2' },
                    { repeat: 999, duration: 3000, yoyo: true }
                );
                tween.start();
            } catch (error) {
                console.error('Error loading kute.js:', error);
            }
        };

        loadKuteJs();
    }, []); 

    return (
        <div className="blob">
            
                <svg className='blob-motion' id="visual" viewBox="0 0 900 600" width="450" height="300"  version="1.1">
                    <g transform="translate(440.8176774915531 253.43643829987866)">
                        <path id='blob1' d="M126.1 -123.3C155.1 -97.1 164.6 -48.6 162.1 -2.5C159.6 43.6 145.2 87.2 116.2 137.2C87.2 187.2 43.6 243.6 -0.7 244.3C-45 245 -90 190 -115 140C-140 90 -145 45 -144 1.1C-142.9 -42.9 -135.8 -85.8 -110.8 -112C-85.8 -138.1 -42.9 -147.6 2.8 -150.4C48.6 -153.2 97.1 -149.4 126.1 -123.3" fill="#F7770F" />
                    </g>
                    <g transform="translate(449.07189415103437 280.7246915942824)" style={{ visibility: 'hidden' }}>
                        <path id='blob2' d="M157 -171.7C182 -132 166 -66 165.2 -0.8C164.4 64.3 178.7 128.7 153.7 178.7C128.7 228.7 64.3 264.3 11.5 252.8C-41.2 241.2 -82.5 182.5 -114.7 132.5C-146.8 82.5 -169.9 41.2 -169.1 0.8C-168.3 -39.6 -143.5 -79.2 -111.4 -118.9C-79.2 -158.5 -39.6 -198.3 13.2 -211.5C66 -224.7 132 -211.3 157 -171.7" fill="#F7770F" />
                    </g>
                </svg>
            
        </div>
    );
};

export default Blob;
