// 1. 引入axios依赖包
import axios from "axios";
// 2. axios创建对象
const request = axios.create({
    baseURL: "https://api.shop.eduwork.cn/", //管理后台要使用的接口的基地址
    timeout: 8000, //超时时间
})


// 3. 定义前置拦截器，请求拦截器，请求发送出去之前触发的
request.interceptors.request.use((config) => {
    //config 接口请求的配置信息
    return config;
}, (error) => {
    //报错的是时候抛出一个报错的信息
    return Promise.reject(error);
});

request.interceptors.response.use((response) => {
    //响应回来的数据操作
    return response.data;

}, (error) => {
    //报错的是时候抛出一个报错的信息
    return Promise.reject(error);
})

// 5. 抛出对象的信息
export default request;

