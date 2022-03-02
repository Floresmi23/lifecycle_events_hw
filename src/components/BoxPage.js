import {useParams} from "react-router-dom";

function BoxPage(){

    const list = [
        {
            message: "Hello there",
            nm:"Michael",
            num:5
        },
        {
            message: "Hello Flores",
            nm:"Flores",
            num:8
        },
        {
            message: "Hello Text",
            nm:"Text",
            num:3
        },
        {
            message:"Test1 is Test",
            nm: "Test",
            num: 4
        }
    ];

    const params = useParams()

    const curObj = list.find(obj => obj.nm ===params.id);




    return(
        <div>
            <h1>{curObj.nm}</h1>
            <p>{curObj[0].message}</p>
        </div>
    )
}

export default BoxPage;