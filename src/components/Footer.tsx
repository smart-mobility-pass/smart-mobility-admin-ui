import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="footer p-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <aside className="max-w-xs">
                    <div className="text-3xl font-black tracking-tighter text-primary flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-content shadow-lg shadow-primary/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        SmartMobility<span className="text-base-content opacity-70">SN</span>
                    </div>
                    <p className="text-sm leading-relaxed opacity-60 font-medium">
                        La plateforme de référence pour la gestion et l'optimisation de la mobilité urbaine au Sénégal. Un réseau connecté pour des trajets simplifiés.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a href="https://twitter.com" className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                        <a href="https://linkedin.com" className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://facebook.com" className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </a>
                    </div>
                </aside>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                    <nav className="flex flex-col gap-3">
                        <h6 className="footer-title opacity-100 text-base-content font-bold mb-2">Réseaux</h6>
                        <Link to="/admin/bus" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">Dakar Dem Dikk</Link>
                        <Link to="/admin/brt" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">SunuBRT (BRT)</Link>
                        <Link to="/admin/ter" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">TER Express</Link>
                    </nav>
                    <nav className="flex flex-col gap-3">
                        <h6 className="footer-title opacity-100 text-base-content font-bold mb-2">Administration</h6>
                        <Link to="/admin" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">Tableau de bord</Link>
                        <Link to="/admin/discounts" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">Gestion Tarifs</Link>
                        <Link to="/admin/catalog" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">Offres & Cartes</Link>
                    </nav>
                    <nav className="flex flex-col gap-3 col-span-2 md:col-span-1">
                        <h6 className="footer-title opacity-100 text-base-content font-bold mb-2">Support</h6>
                        <a href="mailto:support@smartmobility.sn" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            support@smartmobility.sn
                        </a>
                        <a href="#" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">Documentation</a>
                        <a href="#" className="link link-hover text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all">Centre d'aide</a>
                    </nav>
                </div>
            </div>

            <div className="footer footer-center p-8 border-t border-base-300 border-opacity-40 text-sm">
                <aside className="flex flex-col md:flex-row gap-2 md:gap-4 items-center opacity-50 font-medium">
                    <p>Copyright © {new Date().getFullYear()} - SmartMobility SN.</p>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-base-content"></div>
                    <p>Propulsé par Advanced Agentic Coding Team.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
