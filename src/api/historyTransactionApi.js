import apiClient from './index';

const historyTransactionApi = {
    getTotalEarnedByWalletID : (id) => apiClient.get(`/history/total-earned/${id}`),
};

export default historyTransactionApi;