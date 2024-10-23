
import './home.css'

function Home() {
    return (
        <div className='home' >
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=0FD2CFEFD086F7A50528CED5DE06C9D282E11C07D4F6D7D7" className="card-img-top" alt="" />
                <div className="card-body">
                    <p className="card-text" >
                        <b style={{color:'black'}}>66031036&nbsp;-&nbsp;ธนภัทร&nbsp;หนูบุญมี</b>
                        <br />
                        <b style={{color:'black'}}>(ปัจจุบันผมสีดำแล้วนะครับ)</b>
                        <br />
                    </p>
                </div>
            </div>
            <div className='lorem' style={{color:'black'}}>
                <>
                    <b style={{color:'black'}}>ระดับการศึกษาปัจจุบัน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b><span style={{color:'black'}}>ปริญญาตรี&nbsp;(&nbsp;ปี&nbsp;2&nbsp;)</span><br />
                    <b style={{color:'black'}}>สถาบันการศึกษาปัจจุบัน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b><span style={{color:'black'}}>มหาวิทยาลัยศรีปทุม</span><br />
                    <b style={{color:'black'}}>สาขาวิชาที่เรียนเลือกเรียน&nbsp;&nbsp;&nbsp;:&nbsp;</b><span style={{color:'black'}}>วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</span>
                </>
                <hr />
                <>
                    <b style={{color:'black'}}>เป้าหมาย&nbsp;&nbsp;&nbsp;:&nbsp;</b><span style={{color:'black'}}>Full Stack Developer</span><br />
                    <b style={{color:'black'}}>ความเชื่อ&nbsp;&nbsp;&nbsp;:&nbsp;</b><span style={{color:'black'}}>"ไม่มีอะไรที่เราทำไม่ได้"</span><br />
                </>
                <hr />
                {/* <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnp5dmdybm5zenlkbTFqYno2dHB2Z283Y2NjZTR2ZHRreTUxY2NyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q61LJj43H48z1FIK4X/giphy.webp' className='gif' ></img> */}
            </div>
        </div>
    )
}
export default Home;