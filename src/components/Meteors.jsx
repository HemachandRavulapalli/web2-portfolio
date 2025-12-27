import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Meteor = ({ id, style }) => (
    <motion.div
        layoutId={id}
        initial={{ x: style.startX, y: style.startY, opacity: 1, scale: 0.5 }}
        animate={{ x: style.endX, y: style.endY, opacity: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed w-32 h-0.5 bg-gradient-to-r from-blue-300 to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] dark:block hidden"
        style={{
            zIndex: -1,
            transform: `rotate(${style.angle}deg)`,
            transformOrigin: "left center"
        }}
    />
);

export const Meteors = () => {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const angle = Math.random() * 45 + 135; // Shooting down-right mostly
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * (window.innerHeight / 2); // Start from top half
            const distance = Math.random() * 300 + 400; // Travel distance

            const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
            const endY = startY + Math.sin(angle * Math.PI / 180) * distance;

            setMeteors(prev => [...prev, { id, startX, startY, endX, endY, angle }]);

            // Cleanup
            setTimeout(() => {
                setMeteors(prev => prev.filter(m => m.id !== id));
            }, 1500);

        }, 3000); // New meteor every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {meteors.map(m => (
                <Meteor key={m.id} id={m.id} style={m} />
            ))}
        </AnimatePresence>
    );
};
