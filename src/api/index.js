import axios from 'axios';
import { stringify }  from 'qs';
import { API_URL } from './../utils';

export const getPost = (page, size) => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/posts`,
        params: { page, size } 
    });
};

export const showPost = id => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/posts/${id}`
    });
};