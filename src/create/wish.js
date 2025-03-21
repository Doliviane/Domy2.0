import React, { Component } from "react";
import background from "../../src/image/Me, Myself and I.png";

const Wish =() =>{

        const myStyle = {
            backgroundImage: `url(${background})`,
            height: "100vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
    return (
        <div style={myStyle}>
            <h1>Text</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi cumque, dignissimos dolores eligendi expedita harum id impedit iusto nostrum omnis pariatur praesentium provident quis totam ullam vero voluptatibus voluptatum!
            </p>
        </div>
    );
    }

    export default Wish;