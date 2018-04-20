import axios from 'axios';
import { stringify }  from 'qs';
import { API_URL, getToken } from './../utils';

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
        data: stringify(params),
        headers: { Authorization: `Bearer ${getToken()}` }        
    });
};

export const updatePost = (id, params) => {
    return axios({
        method: 'put',
        url: `${API_URL}/api/posts/${id}`,
        data: stringify(params),
        headers: { Authorization: `Bearer ${getToken()}`}      
    });
};

export const removePost = id => {
    return axios({
        method: 'delete',
        url: `${API_URL}/api/posts/${id}`,
        headers: { Authorization: `Bearer ${getToken()}` }
    });
};

// *********** Images API *********
export const getImages = (size, page) => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/images`,
        headers: { Authorization: `Bearer ${getToken()}`},    
        params: { page, size }
    });
};

export const createImage = data => {
    return axios({
        method:'post',
        url:`${API_URL}/api/images`,
        headers: { Authorization: `Bearer ${getToken()}` },
        data: data
    });
};

// *********** Users API *********
export const login = credentials => {
    return axios({
        method: 'post',
        url: `${API_URL}/api/users/login`,
        data: stringify(credentials)
    });
};