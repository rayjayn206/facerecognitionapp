import React from 'react';

import 'tachyons';

function Navigation({ onRouteChange, issignedin })
{


if (issignedin)
{

return (
			
		<nav onClick={()=>{onRouteChange('signout')}}className="pointer link f4"style={{display:"flex",justifyContent:"flex-end",color:"white"}}>sign out</nav>
		
);


}
else
{


	return (<div>
	
		<nav onClick={()=>{onRouteChange('signin')}}className=" f4 pointer link pa1" style={{display:"flex",justifyContent:"flex-end",color:"white"}}>Sign in</nav>
		
		<nav onClick={()=>{onRouteChange('register')}}className=" f4 pointer link pa1"style={{display:"flex",justifyContent:"flex-end",color:"white"}}>Register</nav>
		
		</div>
	
		);
		
		


}


}

export default Navigation;