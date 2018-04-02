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

export const createPost = params => {
    return axios({
        method: 'post',
        url: `${API_URL}/api/posts`,
        data: stringify(params)
    });
};

export const updatePost = (id, params) => {
    return axios({
        method: 'put',
        url: `${API_URL}/api/posts/${id}`,
        data: stringify(params)
    });
};

export const removePost = id => {
    return axios({
        method: 'delete',
        url: `${API_URL}/api/posts/${id}`
    });
};

// *********** Images API *********
export const getImages = (size, page) => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/images`,
        params: { page, size }
    });
};