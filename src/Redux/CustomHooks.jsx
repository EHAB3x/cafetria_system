// api.js

import axios from 'axios';

const BASE_URL = 'https://cafe.highdam-sk.com/api/admin/';

const defaultHeaders = {
  Accept: 'application/json',
  Lang: 'ar',
  Authorization: 'bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y'
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders
});

export const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const remove = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
