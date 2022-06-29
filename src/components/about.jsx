
import {useState} from 'react';



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
     <h1>My name is Kyle</h1>

     { visible ? <h4>asdasdasdasd@gmail.com</h4> : "click on the button below"}
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
