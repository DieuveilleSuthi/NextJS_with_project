import React from "react";
import dev from '../images/undraw_developer.png'
import Image from 'next/image'

const Home1 = () => {
    return (
        <div className='bloc1'>
        <div className='text'>
          <h1>Hi,<br/>
            My name is Dieuveille <br />
            And I am a computer engineering student</h1>
        </div>
        <div className='img1'>
          <Image src={dev} alt='dev' />
        </div>
      </div>
    )
}
export default Home1;