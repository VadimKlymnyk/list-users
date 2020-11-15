import axios from 'axios';

const BASE_PATH = 'http://77.120.241.80:8811/api/';

export async function getAllUsers() {
    try { 
        const response = await axios.get(BASE_PATH + 'users');
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
    } catch (e) {
        throw e
    }
}

export async function addNewUser(data) {
    try {
        const response = await axios.post(BASE_PATH + 'users', data);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
    } catch (e) {
        throw e
    }
}

export async function editUserInfo({id, data}) {
    try {
        const response = await axios.put(BASE_PATH + `user/${id}`, data);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
    } catch (e) {
        throw e
    }
}

export async function removeUser(id) {
    try {
        const response = await axios.delete(BASE_PATH + `user/${id}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
    } catch (e) {
        throw e
    }
}