import { baseService } from "./baseService";
import { GROUPID} from '../utility/settings/config'
export class QuanLyNguoiDungService  extends baseService{
    static dangNhap: any;

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap:any) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }

    
    
    
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
