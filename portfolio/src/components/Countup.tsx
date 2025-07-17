import { useState, useEffect, useRef } from "react";

function CountUp({ end, start = 0, duration = 2000, prefix = "", suffix = "" }) {
    const [count, setCount] = useState(start);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Get start time for animation
                    const startTime = Date.now();

                    // Animation function
                    const animate = () => {
                        // Calculate how much time has passed
                        const timeElapsed = Date.now() - startTime;

                        // Calculate progress (0 to 1)
                        const progress = Math.min(timeElapsed / duration, 1);

                        // Use easing function for smoother animation
                        const easedProgress = 1 - Math.pow(1 - progress, 3);

                        // Calculate current count value
                        const currentCount = Math.floor(start + (end - start) * easedProgress);

                        // Update count state
                        setCount(currentCount);

                        // Continue animation if not complete
                        if (progress < 1) {
                            countRef.current = requestAnimationFrame(animate);
                        }
                    };

                    // Start animation
                    countRef.current = requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 } // Trigger when at least 10% of element is visible
        );

        // Start observing the current element
        const currentElement = document.getElementById(`count-${end}`);
        if (currentElement) {
            observer.observe(currentElement);
        }

        // Clean up animation and observer when component unmounts
        return () => {
            if (countRef.current) {
                cancelAnimationFrame(countRef.current);
            }
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [end, start, duration, hasAnimated]);

    return (
        <span id={`count-${end}`}>
            {prefix}{count}{suffix}
        </span>
    );
}

export default CountUp;