
import React from 'react';

const Imagelink=({ onInputChange, onButtonSubmit })=>{

return (


<div className="center">

<p style={{color:"white"}}>this app will detect faces</p>
<div className="center">
<input type="text" onChange={onInputChange}/>
<button onClick={onButtonSubmit}>detect</button>
</div>


</div>



	);



}

export default Imagelink;