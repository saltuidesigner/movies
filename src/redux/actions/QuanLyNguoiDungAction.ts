import { QuanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService"
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import { baseService } from "../../Services/baseService";




export const dangNhapAction = (thongTinDangNhap:any) => {
    
    
    return async (dispatch:any) => {

        try{
            const result = await QuanLyNguoiDungService.dangNhap(thongTinDangNhap);
            

            if(result.data.statusCode === 200){
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }
            

            console.log('result',result);
        } catch (error:any){
            console.log('error',error.response.data);
        }
    }




}




