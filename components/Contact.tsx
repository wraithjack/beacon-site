import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            Ready To Start Your Project?
                        </h2>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Fill out the form and we'll get back to you within 24 hours with a custom quote and
                            a free audit of your current online presence.
                        </p>

                        <div className="mt-12 space-y-10">
                            {[
                                { icon: Mail, title: "Email Us", detail: "hello@beaconwebsolutions.com" },
                                { icon: Phone, title: "Call Us", detail: "(555) 123-4567" },
                                { icon: MapPin, title: "Office", detail: "123 Main St, Suite 100, Cityville, ST 12345" },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-6 group">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-lg shadow-primary/10">
                                        <item.icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                        <p className="text-lg text-muted-foreground mt-1">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="rounded-3xl border border-primary/10 bg-white p-10 shadow-2xl shadow-primary/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 h-2 w-full bg-gradient-to-r from-primary/50 to-primary"></div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div className="space-y-3">
                                <label htmlFor="name" className="text-sm font-bold text-foreground uppercase tracking-wider">Name</label>
                                <Input id="name" placeholder="John Doe" required className="h-12 rounded-xl border-muted bg-muted/50 focus:bg-white transition-all" />
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="email" className="text-sm font-bold text-foreground uppercase tracking-wider">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl border-muted bg-muted/50 focus:bg-white transition-all" />
                            </div>
                        </div>
                        <div className="mt-8 space-y-3">
                            <label htmlFor="business" className="text-sm font-bold text-foreground uppercase tracking-wider">Business Name</label>
                            <Input id="business" placeholder="The Local Bakery" required className="h-12 rounded-xl border-muted bg-muted/50 focus:bg-white transition-all" />
                        </div>
                        <div className="mt-8 space-y-3">
                            <label htmlFor="message" className="text-sm font-bold text-foreground uppercase tracking-wider">Message</label>
                            <Textarea id="message" placeholder="How can we help you?" required className="min-h-[150px] rounded-xl border-muted bg-muted/50 focus:bg-white transition-all" />
                        </div>
                        <Button variant="primary" className="mt-10 w-full h-14 text-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all" type="submit">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
