import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function LightBackground() {
    const reduce = useReducedMotion();

    const variants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            filter: ["blur(80px)", "blur(120px)", "blur(80px)"],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden dark:hidden bg-white">
            {/* Soft Ambient Mesh Gradient */}
            {!reduce && (
                <>
                    {/* Top Left: Gentle Cyan */}
                    <motion.div
                        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-cyan-200/40 rounded-full mix-blend-multiply"
                        variants={variants}
                        animate="animate"
                    />

                    {/* Top Right: Soft Purple */}
                    <motion.div
                        className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] bg-purple-200/40 rounded-full mix-blend-multiply"
                        variants={variants}
                        animate="animate"
                        style={{ animationDelay: "-5s" }}
                    />

                    {/* Bottom Left: Yellow/Orange Warmth */}
                    <motion.div
                        className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-yellow-200/40 rounded-full mix-blend-multiply"
                        variants={variants}
                        animate="animate"
                        style={{ animationDelay: "-10s" }}
                    />

                    {/* Bottom Right: Blue Depth */}
                    <motion.div
                        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-blue-300/40 rounded-full mix-blend-multiply"
                        variants={variants}
                        animate="animate"
                        style={{ animationDelay: "-15s" }}
                    />
                </>
            )}

            {/* Glass Overlay to Unify */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[80px]" />

            {/* Grain for Texture (Very subtle) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>
    );
}
