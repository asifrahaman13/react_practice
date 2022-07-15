import React, { useState } from 'react';


export default function Forms() {

    const [text, setText] = useState("Hello");
    const [fullName,setFullName] = useState({
        fname: "",
        lname: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);//value means the text values within the HTML tag that we have.
        console.log(event.target.name);//The rows attribute tells about the row number of the text area.

        const value=event.target.value;
        const name=event.target.name;

        setFullName((preValue)=>{
            if(name==="fName"){
                return{
                    fname:value,
                    lname:preValue.lname,
                }
            }
            else if(name==="lName"){
                return{
                    fname:preValue.fname,
                    lname:value,
                }
            }
        });

    }

    const change = () => {
        setText("");
    }


    return (
        <><div className="back">
            <div className="container">
                {text}{fullName.fname}
                <form action="">
                    <textarea id="text" cols="100" rows="10" onChange={inputEvent} name="fName"></textarea>
                </form>
                <button onClick={change}><h1>Click Me</h1></button>
            </div>
        </div>
        </>
    )
}
