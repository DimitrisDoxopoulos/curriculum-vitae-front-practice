import axios from 'axios';
import {IPersonalInfo} from "../interfaces/IPersonalInfo";

const API_BASE_URL: string | undefined = process.env.REACT_APP_API_BASE_URL;

if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not defined in the environment variables');
}

export const fetchPersonalInfo = async(): Promise<IPersonalInfo[]> => {
    try {
        const response = await axios.get<IPersonalInfo[]>(`${API_BASE_URL}/personal-information/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching personal information: ', error);
        throw error;
    }
};
