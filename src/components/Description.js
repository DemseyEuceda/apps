import React from "react";
import '../styleheest/Description.css';

function Description(props){

    return(<div className="description">
        <img
        className='image'
        src={require(`../image/${props.image}`)}
        alt='foto bad benito'
        />
        <div className='text'>
         <p className='name'>{props.name}</p>
            <p className='profession'>{props.profession} </p>
            <p className='description-personal'>{props.description}</p>  


      </div>
    


    </div>);
}

export default Description