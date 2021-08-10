import React from "react";
import Card from "../card/card";
import Button from "../button/button";

import "./error-model.styles.css";
const ErrorModel = props => {
    return (
        <div>
        <div className="backdrop" onClick={props.onConfirm} />
        <Card className="modal">
        <header>
            <h2 className="header">{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
        </Card>
        </div>
    )
};

 export default ErrorModel;