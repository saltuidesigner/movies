import '../../assets/styles/circle.scss';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import { QuanLyPhimReducer } from '../../redux/reducers/TrangChu/QuanLyPhimReducer';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';

const { TabPane } = Tabs;

type TabPosition = 'left' | 'right' | 'top' | 'bottom';


type Props = {
    match: any;
    QuanLyPhimReducer:any,
    filmDetail: any,
}

export default function Detail(props: Props) {

    const {filmDetail} = useSelector((state:RootState) =>state.QuanLyPhimReducer);

    const dispatch = useDispatch();

    useEffect(() =>{
        let {id} = props.match.params;

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (_dispatch:any)=>(layThongTinChiTietPhim(id))
    },[])

    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: '100vh' }}>

            <div className='grid grid-cols-12'>
                <div className='col-span-4 col-start-4'>
                    <div className='grid grid-cols-2'>
                        <img src='https://picsum.photos/200/350' alt='123' />
                        <div>
                            <p>Tên phim</p>
                            <p>Mô tả</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='c100 p50 big'>
                        <span>99%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-20 container'>
            <Tabs tabPosition={'left'}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
            </div>
            
        </div>
    )
}