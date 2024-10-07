import {getToken} from './authService';
import axios from 'axios';
import {
  convertToArrayIfNeeded,
  convertXmlToJson,
} from '../utils/parseTssxToJson.ts'
import {transform} from "./transformJsonToEntity.ts";

const token = getToken();

export const listArtifacts = async (name: string): Promise<string[]> => {
  try {
    const token = getToken();

    const response = await axios.get('/api/v2/artifacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const files: string[] = [];

    response.data.artifacts.forEach((data: any) => {
      if (data.name === name) {
        files.push(...data.files);
      }
    });

    console.log(files);

    return files;
  } catch (error) {
    console.error('Failed to get protected data:', error);
    throw error;
  }
};


export const getArtifact = async (fileName: string | undefined) => {
  try {
    // F5_Commissioning_missing.tssx
    // Changing_the_Gearbox.tssx
    // F10_C_B_Gen_fault.tssx
    // F12_C_B_Fault_contactor__2.tssx
    // F5_Commissioning_missing.tssx
    // F6_Emergency_stop.tssx
    // F7_CB_Gen_I_I_I_.tssx
    // _S9X_FM412_Temp_Closed_YawMotorBrake1_.tssx
    const pathFile = 'dezide_data_science/'.concat(fileName);
    const signedDownload = await getSignedDownloadUrl(pathFile);

    const dataFile = await axios.get(signedDownload.signedUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const jsonData = await convertXmlToJson(dataFile.data);
    const result = convertToArrayIfNeeded(jsonData);

    return await transform(result);
    // return simplifyJson(cleanEmptyFields(removeHtmlTags(jsonData)));
  } catch (error) {
    console.error('Failed to get protected data:', error);
    throw error;
  }
};

export const getSignedDownloadUrl = async (path: string) => {
  try {
    const response = await axios.get(`/api/v2/artifacts/download-signed-url`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        path,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar a URL assinada:', error);
    throw error;
  }
};
