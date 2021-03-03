import React from 'react';


const View = (props) => {
  // have just title and delete button available per recipe
  console.log('props for view: ', props);
  return(
    <div className="viewAppointment" id="props.result.id">
      <h3>{props.result.start_time}</h3>
      <p>{props.result.end_time}</p>
      <p>{props.result.price}</p>
      <p>{props.result.status}</p>
      <br/>
      <button className="button" onClick={(e) => props.updateStatus(props.appointment)}>
        Update Status
      </button>
      <button className="button" onClick={(e) => props.deleteAppointment(props.appointment)}>
         Delete
      </button>
    </div>
   )
}

export default View;
