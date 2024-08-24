import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputPros  ={
 type: string,
 name: string,
 label?: string
}

const PHinput = ({type, name, label}: TInputPros) => {
    return (
        <div style={{marginBottom: "10px"}}>
            {label? `${label}: ${" "} `: null}
            <Controller 
            name={name}
            render={({field})=> <Input {...field} type={type} id={name}/>}
            />
             
        </div>
    );
};

export default PHinput;