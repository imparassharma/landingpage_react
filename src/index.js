import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const rootElement = document.getElementById("root");
const Root = createRoot(rootElement);

Root.render(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)