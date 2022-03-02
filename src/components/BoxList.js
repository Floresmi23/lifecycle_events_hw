import Box from "./Box";
import React from "react";
// import Style from "./Style";

function BoxList(props){
    const list = [
        {
            num:1
        }
    ];


    const [boxes, setBoxes]=React.useState(list);
    const [changed,setChanged]=React.useState(false);
    const [changed2,setChanged2]=React.useState(false);
    const [message, setMess]=React.useState("");
    const [st, setSt]=React.useState("blue");

    // lifecycles go below your states

    React.useEffect(()=>{
        if(changed){
            setMess("Add");
            // //Changes Color
            // setSt("green");
        }else{
            setMess("Add Again");
            // // Changes Color
            // setSt("red");
        }
    },[changed]);

/////////////////////////////////////////////////////////
    //Changes color not needed//

    React.useEffect(()=>{
        if(changed2){
            setSt("white");
        }else{
            setSt("white");
        }
    },[changed2]);

////////////////////////////////////////////////////////


    let boxEles = boxes.map((obj, idx)=>
        <Box key={idx} number={obj.num}/>
    )

    const add_person = ()=>{
        let newList = boxes;
        newList.push({
            num:1
        })
        setBoxes(newList);
        setChanged(!changed);
    }


    const [num, setNum]= React.useState(0);
    let addUp =(nm)=>{
        let result2 = num+nm;

        setNum(result2);
    }

    let combine =()=>{
        addUp(props.number);
    }



    return(
        <div style={{backgroundColor:st}}>

           <div onClick={combine}>
               <p>{props.nm}</p>
               <p>{num}</p>
           </div>

            <button onClick={add_person}>Add More Boxes</button>
            <button onClick={()=>setChanged2(!changed2)}>Change Color</button>
            <h1>{message}</h1>
            {boxEles}
        </div>
    )
}

export default BoxList;