import axios from 'axios';
import {SearchResponse, ItemDetails, SeasonDetails} from './apiInterface';

const BASE_URL = "http://www.omdbapi.com";
const OMDB_API_KEY: string = process.env.REACT_APP_OMDB_API_KEY as string;

export const fetchDefaultDashboard = async (page: number, type: string, year: string, searchParam: string): Promise<SearchResponse> => {
    const encodedSearchParam = encodeURIComponent(searchParam);
    const response = await axios.get<SearchResponse>(`${BASE_URL}/?s=${encodedSearchParam}&y=${year}&type=${type}&apikey=${OMDB_API_KEY}&page=${page}`);
    return response.data;
}

export const searchEpisodesByParam = async (imbdId: string, seasonNumb: number): Promise<SeasonDetails> => {
    const response = await axios.get<SeasonDetails>(`${BASE_URL}/?i=${imbdId}&Season=${seasonNumb}&apikey=${OMDB_API_KEY}`);
    return response.data;
}

export const getItemsById = async (result: SearchResponse): Promise<ItemDetails[]> => {
    const itemList: ItemDetails[] = [];
    if(result.Search) {
        for (const item of result.Search) {
            const response = await axios.get<ItemDetails>(`${BASE_URL}/?i=${item.imdbID}&apikey=${OMDB_API_KEY}`);
            itemList.push(response.data);
        }
        return itemList;
    } else {
        return itemList;
    }
}

export const getItemById = async (itemId: string): Promise<ItemDetails> => {
    const response = await axios.get<ItemDetails>(`${BASE_URL}/?i=${itemId}&apikey=${OMDB_API_KEY}`);
    return response.data;
}
