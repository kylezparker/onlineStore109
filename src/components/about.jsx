
import {useState} from 'react';
import "./about.css";


const About = () =>{
    const [visible,setVisible]=useState(false);

    const changeVisibility = () =>{
    if(visible){
        setVisible(false);
    }else{
    
        setVisible(true);
    }

    }
    return(
        <div>
    
        <br></br>
        <br></br>
     { visible ? <h4>johnhohnson234@gmail.com</h4> : <h3>click on the button below</h3>}
     <br></br>
     <button onClick={changeVisibility}>show info</button>

     <br />
     <br />
     <br />
     <br />
     </div>
    );

};

export default About;




// <button onClick={() => setVisible(true)}>show info</button>
//const changeVisibility = () =>{
//setVisible(!visible)
//}
