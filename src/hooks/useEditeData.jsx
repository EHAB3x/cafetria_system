import baseURL from "../Api/baseURL"

const useEditData =async(url,params)=> {
    const res = await baseURL.put(url,params);
    return res
}
export default useEditData;