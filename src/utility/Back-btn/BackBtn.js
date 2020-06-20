import React from 'react'

 function BackBtn() {
    const back = () => {
        window.history.back();
    }
    return (
     
             <div className="buttons back-btn"> 
                     <button onClick={back}>Back</button>  
                     </div>

    )
}
export default BackBtn