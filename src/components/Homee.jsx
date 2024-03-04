import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slide.css';
import { Typography } from '@mui/material';
import blood_logo from "./img/blood1.jpg"
import  blood_loogo from './img/blood2.jpg' 
import bloood_logo from './img/blood4.jpg'


const Example = () => {
    

    return (
           
          
        <Slide>
              <div style ={{paddingTop:"80px",paddingBottom:"80px"}}>
            <div className="each-slide-effects">
            <img src={blood_logo} alt="" height="400px" Width="400px" />
                   
                
            </div>
           </div>
           <div style ={{paddingTop:"80px"}}>
            <div className="each-slide-effect">
          
                <img src={blood_loogo} alt="" height="400px" Width="400px"/>
                  
                
            </div>
            </div>
            <div style ={{paddingTop:"80px"}}>
            <div className="each-slide-effectss">
            
            <img src={bloood_logo} alt=""  height="400px" Width="400px"/>
                   
         
            </div>
            </div>
        

        
        </Slide>
        


    
       
        );
};


export default Example;
   
  

