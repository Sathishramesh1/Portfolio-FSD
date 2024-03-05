import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const UseLottieAnimation = ({ data, loop = true, autoplay = true, className }) => {
    const container = useRef(null);
    const animationData = JSON.parse(data);
    
    useEffect(() => {
       const animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData
       });

       return () => {
           animation.destroy();
       };
    }, []);

    return (
        <div ref={container} className={className}></div>
    );
};

export default UseLottieAnimation;
