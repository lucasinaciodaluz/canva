import React, { useState } from 'react';
import uploadXmlFile from "./uploadXmlFile.ts";

const UploadXmlFile: React.FC = () => {
    const [jsonData, setJsonData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const xmlData = e.target?.result as string;
                try {
                    const json = await uploadXmlFile(xmlData);
                    setJsonData(simplifyJson(cleanEmptyFields(removeHtmlTags(json))));
                } catch (err) {
                    setError("Erro ao converter o XML para JSON");
                    console.error('Error:', err);
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" accept=".tssx" onChange={handleFileUpload} />
            {error && <div>{error}</div>}
            {jsonData && (
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            )}
        </div>
    );
};

const simplifyJson = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let simplified = {};
    for (const key in obj) {
        if (key === '$') {
            Object.assign(simplified, obj[key]);
        } else if (key === '_') {
            simplified = obj[key];
        } else {
            simplified[key] = simplifyJson(obj[key]);
        }
    }
    return simplified;
};

const cleanEmptyFields = (obj : string | object) => {
    if (typeof obj === 'string') {
        const trimmed = obj.trim();
        return trimmed === '' ? null : trimmed;
    }

    if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            obj[key] = cleanEmptyFields(obj[key]);
        }
    }

    return obj;
};

const removeHtmlTags = (str: string) => {
    if (typeof str !== 'string') return str;
    return str.replace(/<\/?[^>]+(>|$)/g, '');
};

export default UploadXmlFile;
