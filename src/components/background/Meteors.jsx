import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Meteor = ({ id, style }) => (
    <motion.div
        key={id}
        initial={{ x: style.startX, y: style.startY, opacity: 0, scale: 0.5 }}
        animate={{ x: style.endX, y: style.endY, opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: style.duration, ease: "linear" }}
        className="fixed pointer-events-none z-0 hidden dark:block"
        style={{
            width: style.length,
            height: '2px', // Thin tail
            background: 'linear-gradient(90deg, transparent, white)',
            transform: `rotate(${style.angle}deg)`,
            transformOrigin: "left center",
            boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
    >
        {/* Head of the Meteor */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]" />
    </motion.div>
);

export default function Meteors() {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const angle = Math.random() * 20 + 20; // 20 to 40 degrees steep
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * (window.innerHeight * 0.2); // Top 20%
            const length = Math.random() * 150 + 100;
            const duration = Math.random() * 2 + 3; // 3s to 5s (Much Slower)

            // Calculate end point
            const travel = 800; // Pixels to travel
            const endX = startX - Math.cos(angle * Math.PI / 180) * travel; // Move Left
            const endY = startY + Math.sin(angle * Math.PI / 180) * travel; // Move Down

            setMeteors(prev => [...prev, { id, startX, startY, endX, endY, angle, length, duration }]);

            // Cleanup
            setTimeout(() => {
                setMeteors(prev => prev.filter(m => m.id !== id));
            }, 2000);

        }, 1500 + Math.random() * 2000); // Random interval 1.5s - 3.5s

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {meteors.map(m => (
                <Meteor key={m.id} id={m.id} style={m} />
            ))}
        </AnimatePresence>
    );
}
