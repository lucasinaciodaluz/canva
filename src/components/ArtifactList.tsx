import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listArtifacts } from "../services/protectedService.ts";

const ArtifactList: React.FC = () => {
    const [files, setFiles] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArtifacts = async () => {
            try {
                const name = 'dezide_data_science';
                const result = await listArtifacts(name);
                setFiles(result);
            } catch (err) {
                setError('Failed to load artifacts');
                console.error('Error fetching artifacts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchArtifacts();
    }, []);

    const handleFileClick = (fileName: string) => {
        navigate(`/artifact/${fileName}`);
    };

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

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="flex flex-col w-full h-full bg-[#F5F5F5] min-h-screen px-8">
            <h1 className="text-2xl font-bold my-6 text-left text-[#5050C4]">
                Artifacts
            </h1>
            <ul className="flex flex-col gap-4">
                {files.map((file) => (
                    <li
                        key={file}
                        onClick={() => handleFileClick(file)}
                        className="cursor-pointer p-4 bg-white rounded-lg shadow-md w-full text-left hover:bg-gray-100 transition"
                    >
                        {file}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArtifactList;
