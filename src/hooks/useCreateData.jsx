import baseURL from "../Api/baseURL"

const useCreateData =async(url,params,config)=> {
    const res = await baseURL.post(url,params,config);
    return res.data
}
export default useCreateData;