import axios from 'axios';

// Cấu hình Axios
const apiClient = axios.create({
  baseURL: "https://e0c21987-e955-4814-88fa-ee71c91177d0.mock.pstmn.io", //'http://localhost:8080', // URL cơ bản của backend
  timeout: 10000, // Thời gian chờ request (10 giây)
  headers: {
    'Content-Type': 'application/json', // Loại dữ liệu gửi lên server
  },
});

// Middleware xử lý trước khi gửi request
apiClient.interceptors.request.use(
  (config) => {
    // Bạn có thể thêm logic khác ở đây nếu cần
    console.log(`Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Middleware xử lý sau khi nhận response
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi
    if (error.response) {
      console.error(`Error ${error.response.status}: ${error.response.data.message}`);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
