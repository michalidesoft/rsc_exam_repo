import {useQuery, UseQueryResult} from 'react-query';
import axios from 'axios';

const getSuggestionsFiltered = async (param: any) => {
    if (param === undefined || param.trim() == ''){return }
    try {
        const { data } = await axios.get(`http://localhost:8000/api/v1/suggestions-filtered/${param}`);
        console.log(data)
        return data;
    }
    catch (e) {
        console.error(e)
        return [];
    }
};

export const useFilteredSuggestions = (param: any):UseQueryResult<any, unknown> => useQuery([ 'suggestions-filtered', param ], () => getSuggestionsFiltered(param),{
    cacheTime: 35000,
});

