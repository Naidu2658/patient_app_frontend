import React, { useState } from 'react';

const ViewEhr= (props) => {
  const [isActive, setIsActive] = useState(false);
   //console.log(props.title)
   //console.log(props.content[0].episodeId)
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>

      {isActive && <div className="accordion-content">
      {
      props.content.map(({encounters , episodeId, episodeName  }) => (
          
              <div>
                  <h2>Episodes:</h2>
                        <li>{episodeId}</li>
                        <li>{episodeName}</li>
                
                  {
                    encounters.map(({doctorName,encounterId,op_records})=>(
                       <div>
                           <h2>Encounters:</h2>
                           <li>{doctorName}</li>
                           <li>{encounterId}</li>
                               
                           {
                                op_records.map(({diagnosis,op_record_id,record_details,timestamp})=>(
                                <div>
                                    <h2>OpRecords:</h2>
                                    <li>{diagnosis}</li>
                                    <li>{op_record_id}</li>
                                    <li>{record_details.complaints}</li>
                                    <li>{record_details.prescription}</li>  
                                    <li>{record_details.followupplan}</li>                                       
                                    </div>
                                    


                                ))
                        }


                        </div>
                        


                    ))
                }

              </div>
            ))
     }
        </div>
    }
    </div>
  );
};

export default ViewEhr;