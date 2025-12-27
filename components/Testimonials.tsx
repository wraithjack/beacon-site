import { Card } from "./ui/Card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
    const testimonials = [
        {
            name: "John Miller",
            role: "Owner, Miller Plumbing",
            content: "Beacon rebuilt our site and within two weeks we were getting calls from people who found us through Google Search. It's been a game changer for our business.",
        },
        {
            name: "Sarah Jenkins",
            role: "Founder, Sweet Bites Bakery",
            content: "I finally have a website I'm proud to show my customers. The process was so simple and they handled everything from the photos to the hosting.",
        },
    ];

    return (
        <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.1),transparent_70%)]"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                        Loved By Local Business Owners
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
                        Join 50+ local businesses that have grown their presence with Beacon Web Solutions.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {testimonials.map((t) => (
                        <Card key={t.name} className="bg-white/5 border-white/10 backdrop-blur-sm text-white relative transition-all duration-300 hover:bg-white/10 hover:border-white/20 p-8 rounded-3xl group">
                            <Quote className="absolute top-8 right-8 h-16 w-16 text-white/5 group-hover:text-primary/10 transition-colors" />
                            <div className="flex gap-1.5 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-xl leading-relaxed text-slate-200 relative z-10 italic font-medium">
                                "{t.content}"
                            </p>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-lg">{t.name}</div>
                                    <div className="text-base text-primary font-semibold">{t.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
