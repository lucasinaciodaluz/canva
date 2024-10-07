import { parseString } from 'xml2js';

const uploadXmlFile = (xml: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
        parseString(xml, {
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

export default uploadXmlFile;