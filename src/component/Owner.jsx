import React from 'react'
import Nav from './Nav'
import '../App.css'

function Owner() {
  return (
  <>
    <Nav/>
    <div className='owner'>
      <h1>Fluk - Group 5 - 01</h1>
      <div className='img'>
      <img src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t1.18169-9/1935096_561883927294772_2899684547793140603_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE4INzy9pvcPKF5Zsl78Vb24IVteNpTV7XghW142lNXtYSnQsla-ex7iYRCsbtonOXoWGnXSSe-IKuvY2gOnscP&_nc_ohc=v6rvUT1c8JUAX839fiI&_nc_ht=scontent.fcnx2-1.fna&oh=00_AfC_-TRD54JHob7OJn_bK5IKw7ZpmevV_Q4IekgTRTxo9w&oe=652928BE" alt="ผมเอง" />
      </div>
      <h3>อภิสิทธิ์ วณิชเจริญกุล</h3>
      <p>สวัสดีครับ !! ผมชื่อฟลุคนะครับ ทำ MiniProject เพื่อส่ง Assignment ในหัวข้อ React ครับ<br/> ตัวเว็บไซต์สามารถสร้าง User และลบ User ได้ในหน้า HomeAmin ครับ ส่วนหน้า HomeUser สามารถแสดงผล Data ของ Member ได้ครับ </p>
    </div>
  </>
  )
}

export default Owner