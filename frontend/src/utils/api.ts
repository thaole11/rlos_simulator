import axios from 'axios';
import { ILeadDetailsEntity, CreateLeadDetailsDto, FilterLeadDetailsDto } from '../entities/ILeadDetailsEntity';

const API_URL = 'http://localhost:13001';


const axiosInstance = axios.create({
    timeout: 10000, // 10 seconds timeout
    headers: {
      "Content-Type": "application/json",
    },
  });

export const createLeadDetails = async (data: CreateLeadDetailsDto) : Promise<ILeadDetailsEntity> => {
    try {
        const response = await axiosInstance.post(`${API_URL}/lead-details/`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating lead details:', error);
        throw error;
    }
};

export const getLeadDetails = async (id: string) : Promise<ILeadDetailsEntity> => {
    try {
        const response = await axiosInstance.get(`${API_URL}/lead-details/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting lead details:', error);
        throw error;
    }
};

export const filterLeadDetails = async (filter: FilterLeadDetailsDto) : Promise<ILeadDetailsEntity[]> => {
    try {
        const response = await axiosInstance.post(`${API_URL}/lead-details/filter`, filter);
        return response.data;
    } catch (error) {
        console.error('Error filtering lead details:', error);
        throw error;
    }
};