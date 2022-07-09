import Axios from "axios"
import {DOMAIN,TOKEN} from '../utility/settings/config'

export class baseService {
    //put json về phía backend
    put = (url:any,model:any) => {
        return  Axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }

    post = (url:any,model:any) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }


    get = (url:any) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url:any) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}