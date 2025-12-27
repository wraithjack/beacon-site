import { Card, CardTitle, CardDescription } from "./ui/Card";
import { Layout, Search, Settings } from "lucide-react";

export const Services = () => {
    const services = [
        {
            title: "Web Design",
            description: "Custom, mobile-friendly layouts that look great on any device. We build trust with your customers through modern aesthetics.",
            icon: Layout,
        },
        {
            title: "SEO",
            description: "Local search optimization to get you found on Google. We help you rank for terms like 'plumber near me' or 'local law firm'.",
            icon: Search,
        },
        {
            title: "Maintenance",
            description: "We handle updates, security, and hosting so you can focus on running your business. No more worrying about broken links.",
            icon: Settings,
        },
    ];

    return (
        <section id="services" className="bg-white py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 blur-[120px]"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Everything You Need To Succeed Online
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
                        We specialize in helping local businesses establish a professional online presence without the high agency price tags.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.title} className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-primary/5 hover:border-primary/20">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150"></div>
                            <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                                <service.icon className="h-7 w-7" />
                            </div>
                            <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                            <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                                {service.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
