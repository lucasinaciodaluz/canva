import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Importando useParams para acessar o parâmetro da URL
import CardGuide from './CardGuide';
import AddIcon from '../assets/AddIcon.svg';
import { getArtifact } from '../services/protectedService.ts';
import Guide, { CauseGuide } from '../json/Guide.tsx';
import Sidebar from "./SideBar.tsx";
import Header from "./Header.tsx";
import { getEmail } from "../services/authService.ts"; // Importando as interfaces

const GuideList = () => {
    const [artifact, setArtifactData] = useState<Guide | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Capturando o parâmetro fileName da URL
    const { fileName } = useParams<{ fileName: string }>();

    useEffect(() => {
        // Busca o email do localStorage quando o componente é montado
        const storedEmail = getEmail();
        if (storedEmail) {
            setEmail(storedEmail);
        }
        const fetchArtifact = async () => {
            try {
                if (!fileName) {
                    throw new Error("No fileName provided");
                }
                console.log(fileName);

                console.log("Arquivo selecionado:", fileName);
                const result = await getArtifact(fileName); // Chamando a função de forma assíncrona com o fileName
                setArtifactData(result); // Define o artefato retornado no estado
            } catch (err) {
                setError('Failed to get artifact');
                console.error('Failed to load artifact:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchArtifact();
    }, [fileName]); // O useEffect agora depende de fileName

    const renderedCards = artifact?.causes.map((cause: CauseGuide) => {
        return (
            <div key={cause.id} className="flex flex-col gap-6 my-6">
                <CardGuide
                    id={cause.id}
                    stepsData={cause.steps}
                    problem={cause.name}
                    description={cause.explanation}
                />
            </div>
        );
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <button type="button" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center" disabled>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                </button>
            </div>
        );
    }

    if (error) return <div>{error}</div>;

    return (
        <div className="flex bg-[#F5F5F5] border-b border-gray-300 rounded-lg">
            <Sidebar />
            <div className="flex-1">
                <div className="px-[30px] py-[48px] ">
                    <Header userName={email} />
                    <div className="flex flex-col w-full h-full bg-[#F5F5F5] overflow-y-scroll min-h-screen">
                        <div className="flex flex-col gap-6 my-6">
                            <span className="font-bold text-2xl leading-7 text-[#5050C4]">
                                Guide: {artifact?.guideId}
                            </span>
                        </div>
                        {renderedCards}

                        <div className="text-center">
                            <button
                                className="w-[113px] h-[48px] border-2 px-4 py-2 rounded-lg mb-5 border-[#FF5C00]"
                            >
                                <div className="flex items-center gap-[10px] text-[#FF5C00] font-bold">
                                    <img src={AddIcon} alt="AddIcon" />
                                    cause
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideList;
