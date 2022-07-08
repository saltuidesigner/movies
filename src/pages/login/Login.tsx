import React from 'react'
import {useFormik} from 'formik'
import { NavLink } from 'react-router-dom';

type Props = {}

export default function Login({ }: Props) {

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: values => {
      console.log('values',values);
    },
  });

  return (
      <form onSubmit={formik.handleSubmit} className="col-sm-6 text-black">
        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }} />
          <span className="h1 fw-bold mb-0"></span>
        </div>
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <div style={{ width: '23rem' }}>
            <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>CYBERLEARN</h3>
            <div className="form-outline mb-4">
              <input name='taiKhoan' onChange={formik.handleChange} type="Nhập vào tài khoản" id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form2Example18">Tài khoản</label>
            </div>
            <div className="form-outline mb-4">
              <input name='matKhau' onChange={formik.handleChange} type="Nhập vào password" id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form2Example28">Mật khẩu</label>
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="button">Đăng nhập</button>
            </div>
            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Quên mật khẩu?</a></p>
            <p>Bạn chưa có tài khoản? <NavLink to={'register'} className="link-info">Đăng ký</NavLink></p>
          </div>
        </div>
      </form>
  )
}