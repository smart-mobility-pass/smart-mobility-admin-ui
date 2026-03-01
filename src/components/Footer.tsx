import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="footer p-10 max-w-7xl mx-auto">
                <aside>
                    <div className="text-3xl font-black tracking-tight text-primary mb-4">
                        SmartMobility<span className="text-neutral-content">SN</span>
                    </div>
                    <p>
                        Plateforme intégrée de Mobilité<br />
                        (Bus, BRT, TER) au Sénégal.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Réseaux concernés</h6>
                    <a href="#" className="link link-hover">Bus Dakar Dem Dikk</a>
                    <a href="#" className="link link-hover">BRT SunuBRT</a>
                    <a href="#" className="link link-hover">TER Dakar-Diamniadio</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Informations voyageurs</h6>
                    <a href="#" className="link link-hover">Calculateur d'itinéraires</a>
                    <a href="#" className="link link-hover">Tarifs & Abonnements</a>
                    <a href="#" className="link link-hover">Actualités et perturbations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Légal & Contact</h6>
                    <a href="#" className="link link-hover">Conditions d'utilisation</a>
                    <a href="#" className="link link-hover">Confidentialité</a>
                    <a href="#" className="link link-hover">Nous contacter</a>
                </nav>
            </div>
            <div className="footer footer-center p-4 border-t border-base-300 border-opacity-20 text-neutral-content/60">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Tous droits réservés par SmartMobility SN</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
