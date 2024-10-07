import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import _ from 'lodash';

const BASE_URL = `${window.location.origin}/api`;

const config = {
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
};

interface IError {
    msg: string;
}

class AxiosClient {
    token!: string;

    init = (token: string): void => {
        const client = axios.create(config);
        client.interceptors.request.use(this.requestInterceptor, this.rejectInterceptor);
        client.interceptors.response.use(this.responseInterceptor, this.rejectInterceptor);

        this.token = token;
    };

    responseInterceptor = (
        response: AxiosResponse<any, any>,
    ): Promise<AxiosResponse<any, any>> | AxiosResponse<any, any> => {
        return response;
    };

    requestInterceptor = async (
        requestConfig: InternalAxiosRequestConfig<any>,
    ): Promise<InternalAxiosRequestConfig<any>> => {
        if (_.isString(this.token)) {
            _.setWith(requestConfig, 'headers.Authorization', `Bearer ${this.token}`, Object);
        }
        return requestConfig;
    };

    rejectInterceptor = ({ response, message }: AxiosError<IError>): Promise<never> => {
        if (response && response?.status > 500) {
            if (response?.data?.msg) {
                const modifiedResponse = {
                    ...response,
                    data: {
                        ...response.data,
                        msg: 'Oops, something went wrong. Please try again.',
                    },
                };
                return Promise.reject({ response: modifiedResponse, message });
            } else {
                const modifiedMessage = 'Oops, something went wrong. Please try again.';
                return Promise.reject({ response, message: modifiedMessage });
            }
        }
        return Promise.reject({ response, message });
    };
}

export default AxiosClient;