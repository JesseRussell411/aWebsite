import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Dialog } from "@mui/material";

function App() {
    const [open, setOpen] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Button onClick={() => setOpen(true)}>open</Button>
                <Dialog open={open}>
                    <Button onClick={() => setOpen(false)}>close</Button>
                </Dialog>
            </header>
        </div>
    );
}

export default App;
