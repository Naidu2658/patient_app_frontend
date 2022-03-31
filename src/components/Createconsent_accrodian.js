import React, { useState } from 'react';

import './Accordian.css'

const Createconsent_accrodian = (props) => {
  const [isActive, setIsActive] = useState(false);
  
  const [userinfo, setUserInfo] = useState({
    languages: []
  });
  const [episodeids, setepisodeids] = useState({
    episodes: []
  });
  const handleChange = (e) => {
    // Destructuring
    const obj = {
      eid : "",
      encid :""
    }
    //obj.eid = e.target.value[0];
    //obj.encid = 
    const { value, checked } = e.target;
    const { languages } = userinfo;
    
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value)
      });
    }

   
  };

   
  const submitHandl =(e)=>{
    userinfo.languages.map((item)=>{
      console.log("Item " + item);
      let ar=item.split(",")
      
      
    
      setepisodeids({
        episodes: [{episodeId: ar[0],encounterId:ar[1]}, ...episodeids.episodes]
        
      });
      
     
    })
    console.log(episodeids.episodes)
    
  }
  
  return (
    
    <div className="accordion-item">
      <div className="form-floating mt-3 mb-3 text-center">
              
  <textarea
    className="form-control text"
    name="response"
    value={userinfo.languages}
    placeholder="The checkbox values will be displayed here "
    id="floatingTextarea2"
    style={{ height: "150px" }}
   
  
  >  {console.log("hello " + userinfo.languages)}</textarea>
  <button onClick={submitHandl}>submit</button>
</div>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
      {
      props.content.map(({encounters , episodeId, episodeName  }) => (
              <div>
                  <h3>Episodes:</h3>
                        <li className="episodes">Episode Id : {episodeId}</li>
                        <li className="episodes">Episode Name : {episodeName}</li>
                  {
                    encounters.map(({doctorName,encounterId,op_records})=>(
                       <div>
                           <h3 className="episodes">Encounters :</h3>  
                     
            <div className="row">
              <div className="col-md-6">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value={[episodeId,encounterId]}unction
                    id="flexCheckDefault"
                    onClick={handleChange}
                  />
        </div>
      </div>
                           <li className="encounter">Doctor Name : {doctorName}</li>
                           <li className="encounter">Encounter Id : {encounterId}</li>
                             
                           {
                                op_records.map(({diagnosis,op_record_id,record_details,timestamp})=>(
                                  <div>
                                    <h3 className="encounter">OpRecords:</h3>
                                    <li className="op_records">Diagnosis : {diagnosis}</li>
                                    <li className="op_records">Op Record Id : {op_record_id}</li>
                                    <li className="op_records">Complaints : {record_details.complaints}</li>
                                    <li className="op_records">Prescription : {record_details.prescription}</li>  
                                    <li className="op_records">Followup Plan : {record_details.followupplan}</li>                                       
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

export default Createconsent_accrodian;