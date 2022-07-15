import React from 'react';

// const newData = [
//     { id: 1, name: "Harsh Vardhan", degree: "Msc" },
//     { id: 2, name: "Raj Verman", degree: "Btech" },
//     { id: 3, name: "Rahul Verma", degree: "MTech" }
// ];




export default function Card(props) {
    console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypc" className="card_img" />
                    <div className="card_info">
                        <span className={props.title}>
                            <h3 className="card_title">
                                <a href={props.link} target="blank">
                                    <button>{props.sname}</button>
                                </a>
                            </h3>
                        </span>
                    </div>
                </div>
            </div>
            <h1>The following is the headline:</h1>
            <input type="text" value="text" />
            <p className="showDatas" id="showDatas" />

        </>
    )
}

//The above function was made to be used multiple times in the program.




