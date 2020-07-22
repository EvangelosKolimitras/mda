import React, {useState} from 'react';
import MainProps from "../../Layouts/Main/assets/ts/interfaces/Main.interface";

const Form: React.FC<MainProps> = () => {

    const state = ""
    const [name,setName] = useState(state);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(name)
    }

    const handleValueChange = (e:{ preventDefault: () => void, target: { value: string } }) => {
        e.preventDefault();
        setName(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" />
                <input type="text" id="name" value={name} onChange={handleValueChange} />
                <button type="submit" >Submit</button>
            </form>
        </>
    )
};


export default Form;
