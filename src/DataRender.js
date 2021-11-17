import React, { Component } from 'react'

const DataRender = (props) =>{
    return(

        <div class="dataContainer">
                <div class="spanItem spanLeft">Email:</div>             <div class="spanItem spanRight">{props.names[0]}</div>
                <div class="spanItem spanLeft">Full Name:</div>         <div class="spanItem spanRight">{props.names[1]}</div>
                <div class="spanItem spanLeft">Adrress:</div>           <div class="spanItem spanRight">{props.names[2]}</div>
                <div class="spanItem spanLeft">City:</div>              <div class="spanItem spanRight">{props.names[3]}</div>
                <div class="spanItem spanLeft">Province:</div>          <div class="spanItem spanRight">{props.names[4]}</div>
                <div class="spanItem spanLeft">Postal Code:</div>      <div class="spanItem spanRight">{props.names[5]}</div>
            </div>
    );
}

export default DataRender