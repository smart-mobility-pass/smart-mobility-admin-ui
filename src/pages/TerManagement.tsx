import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { pricingService } from '../services/pricingService';
import type { TransportLine, FareSection } from '../services/pricingService';

const TerManagement: React.FC = () => {
    const navigate = useNavigate();
    const [lines, setLines] = useState<TransportLine[]>([]);
    const [sections, setSections] = useState<FareSection[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadData = async () => {
        setIsLoading(true);
        try {
            const [fetchedLines, fetchedSections] = await Promise.all([
                pricingService.getTransportLines(),
                pricingService.getFareSections()
            ]);
            setLines(fetchedLines.filter(l => l.transportType === 'TER'));

            // Generate some mock fare sections based on the TER stations if none exist
            if (fetchedSections.length === 0) {
                const terLine = fetchedLines.find(l => l.transportType === 'TER');
                if (terLine && terLine.stations) {
                    const mockSections = terLine.stations.map((station, index) => ({
                        id: 100 + index,
                        lineId: terLine.id || 0,
                        sectionOrder: index + 1,
                        priceIncrement: 500, // Explicitly standardizing the TER pricing mapping to sections
                        stationName: station
                    }));
                    setSections(mockSections as any);
                } else {
                    setSections([]);
                }
            } else {
                setSections(fetchedSections);
            }

        } catch (error) {
            console.error("Failed to load data", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-base-100">
            <header>
                <Navbar />
            </header>

            <main className="flex-grow p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-circle btn-ghost btn-sm"
                            title="Retour"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <h1 className="text-4xl font-bold text-base-content">Gestion <span className="text-error text-5xl">TER</span></h1>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center h-48">
                            <span className="loading loading-spinner loading-lg text-error"></span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Lignes TER */}
                            <div className="card bg-base-200 shadow-sm border border-error/20">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl mb-4 text-error flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Infrastructures TER
                                    </h2>

                                    <ul className="list-none p-0 flex flex-col gap-3">
                                        {lines.map((line) => (
                                            <li key={line.id} className="bg-base-100 rounded-lg shadow-sm border border-base-300 overflow-hidden">
                                                <div className="p-4 flex justify-between items-center bg-error/10">
                                                    <div>
                                                        <span className="font-bold text-lg text-error">{line.name}</span>
                                                        <p className="text-sm opacity-70">Ligne ferroviaire principale reliant le centre-ville à la périphérie.</p>
                                                    </div>
                                                    <div className="badge badge-error badge-outline text-xs hidden sm:flex">ID: {line.id}</div>
                                                </div>

                                                {line.stations && line.stations.length > 0 && (
                                                    <div className="p-4 border-t border-error/20">
                                                        <h3 className="font-bold text-sm mb-3">Parcours ({line.stations.length} gares)</h3>
                                                        <ul className="steps steps-vertical lg:steps-horizontal w-full overflow-x-auto text-xs pb-4">
                                                            {line.stations.map((station, idx) => (
                                                                <li key={idx} data-content={idx + 1} className="step step-error hover:font-bold">{station}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                        {lines.length === 0 && (
                                            <div className="text-center opacity-50 py-4 italic">Aucune ligne TER définie.</div>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* Sections Tarifaires TER */}
                            <div className="card bg-base-200 shadow-sm border border-warning/30">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl mb-4 text-warning flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Sections Tarifaires (Zones)
                                    </h2>

                                    <div className="bg-warning/10 p-4 rounded-lg border border-warning/20 mb-4 whitespace-normal text-sm">
                                        <span className="font-bold">Règle de calcul :</span> Le prix de base est défini à 500 FCFA. Chaque section (gare) traversée ajoute un saut tarifaire de 500 FCFA selon la logique inscrite en base.
                                    </div>

                                    <div className="overflow-y-auto max-h-80 pr-2">
                                        <table className="table table-zebra table-sm w-full bg-base-100 shadow-sm rounded-lg">
                                            <thead className="bg-base-300 text-base-content">
                                                <tr>
                                                    <th>Départ</th>
                                                    <th>Gare (Section)</th>
                                                    <th className="text-right">Incrément</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sections.map((section, idx) => (
                                                    <tr key={section.id}>
                                                        {idx === 0 && (
                                                            <td rowSpan={sections.length} className="font-bold border-r border-base-200 bg-base-200/50 align-top pt-4">Dakar</td>
                                                        )}
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <span className="badge badge-accent badge-sm">{section.sectionOrder}</span>
                                                                <span className="font-medium">{(section as any).stationName || `Section ${section.sectionOrder}`}</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-right text-success font-bold text-lg">+{section.priceIncrement} FCFA</td>
                                                    </tr>
                                                ))}
                                                {sections.length === 0 && (
                                                    <tr>
                                                        <td colSpan={3} className="text-center italic opacity-50 py-4">Aucune section tarifaire définie.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TerManagement;
