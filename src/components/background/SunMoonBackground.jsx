import Moon from "./Moon";
import Stars from "./Stars";
import Meteors from "./Meteors";
import LightBackground from "./LightBackground";

export default function SunMoonBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 bg-background">
            {/* New Light Mode System */}
            <LightBackground />

            {/* Dark Mode System (Preserved) */}
            <Moon />
            <Stars />
            <Meteors />

            {/* Legacy Noise Overlay - Restrict to Dark Mode to preserve original look */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay hidden dark:block"></div>
        </div>
    );
}
