import React from "react";


const ValueList = ({ essentials }) => {

    return(
        <div>
            {
             essentials.map(item => (
                <div key={item.name}>
                    <h2>{item.value}</h2>
                </div>
            ))
            }
        </div>        
    )
}

export default ValueList
