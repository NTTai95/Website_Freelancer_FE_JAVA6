import apiClient from './index';

const languageApi = {
  getAll: ({page, size, name, iso}) => apiClient.get('/languages', { params: { page, size, search: `name,${name || ""},iso,${iso || ""}` } }),
  getById: (id) => apiClient.get(`/languages/${id}`),
  add: (language) => apiClient.post('/languages', language),
  update: (id, language) => apiClient.put(`/languages/${id}`, language),
  delete: (id) => apiClient.delete(`/languages/${id}`),
};

export default languageApi;