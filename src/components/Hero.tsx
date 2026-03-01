import React from 'react';

const Hero: React.FC = () => {
    return (
        <div
            className="hero min-h-screen relative overflow-hidden"
            style={{ backgroundImage: `url('/hero-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="hero-overlay bg-gradient-to-r from-base-300/90 to-base-300/60 mix-blend-multiply"></div>

            <div className="hero-content text-left w-full max-w-7xl flex-col lg:flex-row justify-between items-center relative z-10 pt-20">

                <div className="max-w-2xl text-base-content animate-fade-in-up">
                    <div className="badge badge-primary badge-lg mb-6 font-semibold uppercase tracking-wider">
                        Sénégal
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-sm text-white">
                        Plateforme de <br />
                        <span className="text-primary">Mobilité Urbaine</span> <br />
                        Intelligente
                    </h1>
                    <p className="py-6 text-xl lg:text-2xl font-light text-white/90 drop-shadow-md mb-8">
                        Optimisez vos déplacements quotidiens. <br className="hidden lg:block" />
                        Une gestion unifiée et innovante pour les réseaux de <strong className="font-bold text-white">Bus</strong>, <strong className="font-bold text-white">BRT</strong> et <strong className="font-bold text-white">TER</strong> dans tout le pays.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform">
                            Planifier un trajet
                        </button>
                        <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-base-300 shadow-lg hover:scale-105 transition-transform">
                            Découvrir le réseau
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
