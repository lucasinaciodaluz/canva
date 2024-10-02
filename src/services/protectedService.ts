import { getToken } from './authService'; // Função que recupera o token do localStorage
import axios from 'axios';

export const getArtifacts = async () => {
  try {
    const token = getToken(); // Recupera o token

    // TODO: It should use apiServices instead put token for every request
    const response = await axios.get('/api/v2/artifacts', {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
      },
    });

    // Testing download file
    const newVar = await getSignedDownloadUrl("dezide_data_science/Changing_the_Gearbox.tssx");

    const file = await axios.get(newVar.signedUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
      }
    });

    console.log(file.data);

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados protegidos:', error);
    throw error;
  }
};

export const getSignedDownloadUrl = async (path: string) => {
  try {
    const token = getToken(); // Recupera o token

    // Endpoint que retorna a URL assinada para download
    const response = await axios.get(`/api/v2/artifacts/download-signed-url`, {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
      },
      params: {
        path, // Envia o caminho como parâmetro da URL
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar a URL assinada:', error);
    throw error;
  }
};
