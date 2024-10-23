import Timer from './timer/timer.jsx'
import AddVariable from './variable/add-variable.jsx'
import Temperatures from './temperatures/temperatures.jsx'
import Counter from './counter/counter.jsx'

import './Components.css'

function Components() {
    return (
        <div className='components'>
            <div className='g0'>
                <h2><span className="badge bg-primary badgeg">REACT COMPONENTS</span></h2>
            </div>
            <div className='g00'>

                <div className='g1'>

                    <div className='g2'>
                        <Counter count={""} name="Counter" />
                        <Timer time={0} />
                    </div>

                    <div className='g3'>
                        <AddVariable />
                    </div>

                </div>

                <div className='g4'><Temperatures /></div>

            </div>



            <div className='g5'>
                <h3><span className="badge bg-primary badgeg">นาย ธนภัทร หนูบุญมี 66031036</span></h3>
            </div>
        </div>
    )
}
export default Components;