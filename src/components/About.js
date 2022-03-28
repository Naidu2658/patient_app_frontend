import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './hospitallist';
import Accordion from './Accordion';
export default function About(props) {


    const accordionData = [
        {
          title: 'Section 1',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'Section 2',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Section 3',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
      ];


    const resp={
        "ehr_id": 5,
        
        "hospitalrecords": [
          {
    
            "hospitalName": "h1",
            "dataCustodianId": 1,
            "episodes": [
              {
                "episodeId": 11,
                "episodeName":45,
                "encounters": [
                  {
                    "encounterId": 88,
                    "doctorName": "bharat",
                    "op_records": [
                      {
                        "op_record_id": 90,
                        "diagnosis": "diabetis",
                        "record_details": {
                            "complaints" : "hello",
                            "prescription" : "bing",
                            "followupplan" : "raj"
                        },
                        "timestamp": "dfggdgd"
                      }
                    ]
                  }
                ]
                
              },
              {
                "episodeId": 12,
                "episodeName":45,
                "encounters": [
                  {
                    "encounterId": 88,
                    "doctorName": "bharat1234",
                    "op_records": [
                      {
                        "op_record_id": 90,
                        "diagnosis": "diabetissssss",
                        "record_details": {
                            "complaints" : "hello",
                            "prescription" : "bing",
                            "followupplan" : "raj"
                        },
                        "timestamp": "dfggdgd"
                      }
                    ]
                  }
                ]
                
              }
    
            ]
          },
          {
    
            "hospitalName": "h2",
            "dataCustodianId": 1,
            "episodes": [
              {
                "episodeId": 12,
                "episodeName":45,
                "encounters": [
                    {
                        "encounterId": 88,
                        "doctorName": "india",
                        "op_records": [
                          {
                            "op_record_id": 90,
                            "diagnosis": "biscuitdiabetis",
                            "record_details": {
                                "complaints" : "hello",
                                "prescription" : "bing",
                                "followupplan" : "raj"
                            },
                            "timestamp": "dfggdgd"
                          }
                        ]
                      }
                ]
                
              },
              {
                "episodeId": 132,
                "episodeName":45,
                "encounters": [
                    {
                        "encounterId": 88,
                        "doctorName": "nitin",
                        "op_records": [
                          {
                            "op_record_id": 90,
                            "diagnosis": "rajma",
                            "record_details": {
                                "complaints" : "hello",
                                "prescription" : "bing",
                                "followupplan" : "raj"
                            },
                            "timestamp": "dfggdgd"
                          }
                        ]
                      }
                ]
                
              }
    
            ]
          }
        ]
      }









    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    //const obj = resp.hospitalrecords;
    //obj.map((ob))
    console.log("printing here");
    console.log(resp.hospitalrecords);
    //listitems = []
    let val=0;
    return (  <div>
        <h1>EHR Records</h1>
        <div className="accordion">
          {resp.hospitalrecords.map(({hospitalName , dataCustodianId, episodes  }) => (
              
            <Accordion title={hospitalName}  content={episodes} />
          ))}
        </div>
      </div>
    );
    
}