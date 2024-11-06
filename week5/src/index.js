import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GreetingElementwithProp from "./myGreetingProp";
import AppColor from "./AppbackgroundColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GreetingElementwithProp msg="Hello, it's Sunday!" />
    <GreetingElementwithProp msg="Hello, it's Monday!" />
    <GreetingElementwithProp msg="Hello, it's Tuesday!" />
    <GreetingElementwithProp msg="Hello, it's Wednesday!" />
    <GreetingElementwithProp msg="Hello, it's Thursday!" />
    <GreetingElementwithProp msg="Hello, it's Friday!" />
    <GreetingElementwithProp msg="Hello, it's Saturday!" />
    <AppColor heading="This is the first element" lbl="Name:" color="green" />
    <AppColor heading="This is the second element" lbl="Name:" color="blue" />
    <AppColor heading="This is the third element" lbl="Name:" color="yellow" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
