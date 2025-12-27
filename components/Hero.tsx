import { Button } from "./ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-mesh pb-24 pt-32 lg:pt-40">
            <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 bg-emerald-50/50 [mask-image:radial-gradient(100%_50%_at_50%_0%,#000_20%,transparent_100%)]"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div>
                        <div className="animate-fade-in inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20">
                            <span className="mr-2">✨ New:</span> 2024 Design Packages
                        </div>
                        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
                            We Build Websites That <span className="text-primary text-glow italic">Grow</span> Your Business.
                        </h1>
                        <p className="mt-6 text-xl leading-relaxed text-slate-600">
                            Simple, affordable, and professional web design without the tech headaches. We help plumbers, bakers,
                            and lawyers get more customers online.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button variant="primary" className="h-14 px-10 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="h-14 px-10 text-lg hover:bg-muted transition-colors">
                                View Our Work
                            </Button>
                        </div>
                        <div className="mt-12 flex items-center gap-8">
                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                No Hidden Costs
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                Mobile Friendly
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:ml-10">
                        <div className="glass aspect-[4/3] rounded-3xl p-2 overflow-hidden border-white/40 rotate-1 shadow-2xl">
                            <div className="h-full w-full rounded-2xl bg-slate-900 overflow-hidden relative">
                                {/* Browser Mockup Header */}
                                <div className="h-10 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500"></div>
                                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                                </div>
                                {/* Content */}
                                <div className="p-8 space-y-6">
                                    <div className="h-10 w-48 bg-primary/20 rounded-lg animate-pulse border border-primary/30"></div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-24 bg-slate-800 rounded-xl border border-slate-700"></div>
                                        <div className="col-span-2 h-24 bg-primary/10 rounded-xl border border-primary/20"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 w-full bg-slate-800 rounded-full"></div>
                                        <div className="h-4 w-5/6 bg-slate-800 rounded-full"></div>
                                        <div className="h-4 w-4/6 bg-slate-700 rounded-full"></div>
                                    </div>
                                    <div className="h-32 bg-gradient-to-br from-primary/20 to-emerald-900/40 rounded-2xl border border-primary/20"></div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-primary/30 blur-[100px] -z-10"></div>
                        <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-[80px] -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
