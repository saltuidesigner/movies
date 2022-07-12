import React from 'react'

type Props = {}

export default function Detail({}: Props) {
  return (
    <div style={{ backgroundImage:'url(https://picsum.photos/1000)', minHeight:'100vh' }}>

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
        </div>
        
    </div>
  )
}