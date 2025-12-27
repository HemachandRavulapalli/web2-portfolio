import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/mwprkkkz", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });

            if (response.ok) {
                toast({
                    title: "Message sent!",
                    description: "I'll get back to you as soon as possible.",
                });
                e.target.reset();
            } else {
                throw new Error('Failed');
            }
        } catch (err) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-text-primary">
                        Let's <span className="text-accent">Collaborate</span>
                    </h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Open for full-stack engineering roles, AI research collaborations, or just a coffee chat about the future of tech.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-surface rounded-full text-accent shadow-sm border border-border">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-text-primary">Email</h4>
                                <a href="mailto:ravulapallihemachand@gmail.com" className="text-text-secondary hover:text-accent transition-colors">ravulapallihemachand@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-surface rounded-full text-accent shadow-sm border border-border">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-text-primary">Phone</h4>
                                <a href="tel:+916309129336" className="text-text-secondary hover:text-accent transition-colors">+91 6309129336</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-surface rounded-full text-accent shadow-sm border border-border">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-text-primary">Location</h4>
                                <p className="text-text-secondary">Andhra Pradesh, India</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary transition-colors"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary transition-colors"
                        />
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Your Message..."
                            required
                            className="w-full p-4 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary transition-colors resize-none"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-text-primary text-background font-bold rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
