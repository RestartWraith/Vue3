import axios from "axios"
import querystring from "querystring"

//参考文档 https://www.kancloud.cn/yunye/axios/234845
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('语义有误');
            break;
        case 401:
            console.log('服务器认证失败');
            break;
        case 403:
            console.log('服务器拒绝访问');
            break;
        case 404:
            console.log('地址错误');
            break;
        case 500:
            console.log('服务器遇到意外');
            break;
        case 502:
            console.log('服务器无响应');
            break;
        default:
            console.log(info);
            break;
    }
}

const instance = axios.create({
    //网络请求公共配置
    timeout: 5000
})

//拦截器(最常用的)

//发送数据之前
instance.interceptors.request.use(
    config => {
        if (config.method === "post") {
            //如果是post请求则转换数据
            config.data = querystring.stringify(config.data)
        }
        //config包含了网络请求的所有信息
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

//获取数据之前
instance.interceptors.response.use(
    response => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error => {
        //错误的数据是最需要关注的
        const { response } = error; //使用解构语法.这句话的作用是从 error 对象中提取 response 属性，并将其赋值给一个同名的变量 response
        errorHandle(response.status,response.info)
    }
)
export default instance;