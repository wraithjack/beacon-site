import { TowerControl, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-100 bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <TowerControl className="h-6 w-6 text-emerald-600" />
                            <span className="text-xl font-bold tracking-tight text-slate-900">Beacon Web Solutions</span>
                        </div>
                        <p className="mt-4 max-w-xs text-slate-600">
                            Transforming local businesses with professional, high-converting websites. Proudly supporting small business owners everywhere.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-emerald-600"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-600"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-600"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-600"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#services" className="text-slate-600 hover:text-emerald-600">Services</a></li>
                            <li><a href="#work" className="text-slate-600 hover:text-emerald-600">Our Work</a></li>
                            <li><a href="#faq" className="text-slate-600 hover:text-emerald-600">FAQ</a></li>
                            <li><a href="#contact" className="text-slate-600 hover:text-emerald-600">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-slate-600 hover:text-emerald-600">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-600">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-600">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
                    <p>© {currentYear} Beacon Web Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
