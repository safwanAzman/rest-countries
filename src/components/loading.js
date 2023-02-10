import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import loadingAnimated from '@/components/loading.json'

const Loading = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
        lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: loadingAnimated,
        });
        }

        return () => {
        lottie.destroy();
        };
    }, [containerRef]);

    return (
        <div className="h-[80vh] flex items-center justify-center flex-col">
            <div
                className="w-96"
                ref={containerRef}
            />
            <main>
                <p className="pt-2 pl-4 text-lg myFontLight">Searching <span className="animate-pulse">...</span></p>
            </main>
        </div>
    );
};

export default Loading;