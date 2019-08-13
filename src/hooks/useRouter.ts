import {RouterContext} from '../context/RouterContext';
import {useContext} from 'react';

export const useRouter = () => {
    return useContext(RouterContext);
};
