'use client';
import { useEffect, useRef } from 'react';

const ScrollToTopButton: React.FC = () => {
    const scrollButton = useRef<HTMLDivElement | null>(null);

    const scrollUp = () => {
        // console.log('Button clicked - Attempting to scroll to top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            // console.log('Scrolling...', window.scrollY); // Log scroll position
            if (scrollButton.current) {
                if (window.scrollY > 100) {
                    // console.log('Adding visible class'); // Confirm visibility change
                    scrollButton.current.classList.remove('opacity-0');
                } else {
                    // console.log('Hiding button'); // Confirm hiding button
                    scrollButton.current.classList.add('opacity-0');
                }
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="back-to-top opacity-0"  // Initial state is hidden
            ref={scrollButton}
            onClick={scrollUp}
        >
            <span className="icon-angle-up"></span>
        </div>
    );
};

export default ScrollToTopButton;
