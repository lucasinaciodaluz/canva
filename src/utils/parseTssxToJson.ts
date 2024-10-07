import {parseString} from "xml2js";

export const convertXmlToJson = (xml: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        parseString(xml,
            {
                explicitArray: false,
                attrkey: "attributes",
                charkey: "value",
                trim: true
            }, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
    });
};

export const simplifyJson = (obj) => {
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

export const cleanEmptyFields = (obj) => {
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

export const removeHtmlTags = (str: string) => {
    if (typeof str !== 'string') return str;
    return str.replace(/<\/?[^>]+(>|$)/g, '');
};

export const convertToArrayIfNeeded = (obj: any) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Verificar se todas as chaves são numéricas consecutivas
    const isNumericArray = Object.keys(obj).every((key, index) => key === String(index));

    // Se for o caso, converte em array
    if (isNumericArray) {
        return Object.keys(obj)
            .sort((a, b) => parseInt(a, 10) - parseInt(b, 10)) // Ordenar as chaves numericamente
            .map((key) => obj[key]); // Converter em array
    }

    // Se não, aplica recursivamente para todas as chaves
    for (const key in obj) {
        obj[key] = convertToArrayIfNeeded(obj[key]);
    }

    return obj;
};