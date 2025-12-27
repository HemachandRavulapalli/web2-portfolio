import { SunLight } from './SunLight';
import { MoonLight } from './MoonLight';
import { Clouds } from './Clouds';
import { Stars } from './Stars';
import { Meteors } from './Meteors';

export const AmbientBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
            {/* Light Mode Elements */}
            <SunLight />
            <Clouds />

            {/* Dark Mode Elements */}
            <MoonLight />
            <Stars />
            <Meteors />

            {/* Global Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};
