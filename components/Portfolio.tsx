import { Card, CardTitle, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
    const projects = [
        {
            title: "Riverside Plumbing",
            category: "Service Industry",
            image: "bg-slate-200",
        },
        {
            title: "Sweet Bites Bakery",
            category: "Retail/Food",
            image: "bg-emerald-50",
        },
        {
            title: "Oak Ridge Law Firm",
            category: "Professional Services",
            image: "bg-slate-100",
        },
    ];

    return (
        <section id="work" className="py-32 bg-slate-50/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            Our Recent Work
                        </h2>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Check out how we've helped other local businesses transform their digital presence and reach more customers.
                        </p>
                    </div>
                    <Button variant="outline" className="px-8 h-12 text-base font-bold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        View Full Portfolio
                    </Button>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.title} className="group p-0 overflow-hidden border-none shadow-none bg-transparent hover:-translate-y-2 transition-transform duration-300">
                            <div className={`aspect-[16/10] w-full rounded-3xl ${project.image} flex items-center justify-center border border-primary/10 shadow-lg shadow-primary/5 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <Button variant="primary" className="rounded-full h-12 px-6">Case Study</Button>
                                </div>
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{project.title}</span>
                            </div>
                            <CardContent className="px-4 mt-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl font-extrabold">{project.title}</CardTitle>
                                        <p className="text-base font-semibold text-primary/80 mt-1 uppercase tracking-wide">{project.category}</p>
                                    </div>
                                    <Button variant="ghost" className="h-12 w-12 p-0 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all">
                                        <ExternalLink className="h-5 w-5" />
                                        <span className="sr-only">View Site</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
