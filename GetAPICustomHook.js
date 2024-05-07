


import { useEffect, useState } from "react";
import axios from "axios";

export default function GETAPICustomHook(url){
    const [mydata, setMydata] = useState();

    useEffect(() => {
        axios.get(url).then((response)=>{
        console.log('get API called')
        setMydata(response.data.data);
        })
      }, []);

      return {mydata}
}

