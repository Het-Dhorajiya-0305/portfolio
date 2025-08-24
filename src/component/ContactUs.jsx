import { Mail, Send } from 'lucide-react'
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { cn } from '../lib/utils';

function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setTimeout(() => {
            toast.success("Message sent!", {
                autoClose: 1000,
            });
            setIsSubmitting(false);
        }, 1500);
    };
    return (
        <div id='contact' className='py-24 px-4 relativebg-secondary/30'>
            <div className="container mx-auto max-w-5xl flex flex-col items-center">
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-lg mx-auto'>
                    Have something exciting in mind? Whether it’s a project, collaboration, or just a chat about tech and innovation, I’d love to connect. Together, we can bring ideas to reality and make an impact.
                </p>

                <div
                    className="bg-card p-8 rounded-lg shadow-xs w-lg z-1 max-sm:w-full"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary placeholder:text-secondary"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary placeholder:text-secondary"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none placeholder:text-secondary"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs