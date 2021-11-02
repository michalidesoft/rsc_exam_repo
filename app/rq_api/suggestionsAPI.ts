import {useQuery, UseQueryResult} from 'react-query';
import axios from 'axios';

const getSuggestions = async (param: any) => {
    if (param === undefined || param.trim() == ''){return }
    try {
        const { data } = await axios.get(`http://localhost:8000/api/v1/suggestions/${param}`);
        console.log(data)
        return data;
    }
    catch (e) {
        console.error(e)
        return [];
    }
};

export const useSuggestions = (param: any):UseQueryResult<any, unknown> => useQuery([ 'suggestions', param ], () => getSuggestions(param),{
    cacheTime: 35000,
});

