import React from 'react';

const HomeModal= (props)=>{
        let modal=null;      
        if(props.title){
            let installmentPrice=0;
            props.installments===0? installmentPrice=props.price: installmentPrice=props.price/props.installments;              
             modal=  <div className="four wide column">
                          <div className="ui card" style={{width:"220px"}}>
                                <a className="image" href="/">
                                    <img alt="user" src={props.img} style={{ height:"300px"}}/>
                                </a>
                                <div style={{textAlign:"center"}} className="content">
                                   
                                    {props.title.length>22?<a className="header" href="/">{props.title}</a>:
                                    <a style={{marginBottom:"25px"}} className="header" href="/">{props.title}</a>}
                                <div className="description">
                                    <strong>$ </strong>{props.price}
                                </div> 
                                    <div className="meta">
                                    <a href='/'>or {!props.installments?1:props.installments} X {installmentPrice.toFixed(2)}</a>
                                    </div>
                                 </div>
                         </div>
                     </div>  
            }

            return <>
                     {modal}
                     </>
                
            
}

export default HomeModal;