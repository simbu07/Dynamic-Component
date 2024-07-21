import React, { useState } from 'react'
import './ToodleComponent.css'

const ToodleComponent = () => {
    const name = "Silambarasan K";
    const regno = 212221230101;
    const [isVisibile, setVisibile] = useState(false);
    const update = () =>{
        if(isVisibile)
        {
            setVisibile(false);
            document.querySelector('.show-details').innerHTML = 'Know More';
        }
        else
        {
            setVisibile(true)
            document.querySelector('.show-details').innerHTML = 'See Here';
        }
    }

  return (
    <React.Fragment>
        <div className="main-div">
            <div className="box-items">
             <img src='https://static.vecteezy.com/system/resources/previews/009/393/680/original/eye-icon-sign-symbol-design-free-png.png' alt='eye image' width={130} height={70}/>
            <h2>Name: {name}</h2>
            <h2>Reg No: {regno}</h2>
            <button onClick={()=> update()} className='show-details'><strong>Know More</strong></button>{isVisibile ? <p>Hello!! I'm  Silambarasan K currently pursuing B.Tech Final Year at saveetha engineering college.</p>: <p></p>}
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default ToodleComponent