import { useEffect, useState } from "react";

import "./styles/ImageCarousel.css";

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    return (
        <div
            className="grid is-full carousel-container"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <img
                src={images[currentIndex]}
                alt="carousel"
            />
            {hovering && (
                <button
                    className="prev-button"
                    onClick={handlePrev}
                >
                    {"<"}
                </button>
            )}
            {hovering && (
                <button
                    className="next-button"
                    onClick={handleNext}
                >
                    {">"}
                </button>
            )}
        </div>
    );
};