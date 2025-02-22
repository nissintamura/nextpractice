'use client'
import React from 'react';
import { useState } from 'react';
import Label from "@/components_mitsui/Label";
import Button from "@/components_mitsui/Button";

const Login =()=>{

    const [id , setId] = useState("");
    const [pass , setPass] = useState("");

    const loginEvent = () => {
        console.log("Login button clicked");
        if (id === "admin" && pass === "nis2685") {
            window.location.href = '/main';

        } else {
            alert("IDもしくはパスワードが間違えてます");
        }
    };

    return(
        <>
            <Label value="ID:" /><input type="text" value={id} onChange={(e) => setId(e.target.value)} style={{ color: 'black' }} />
            <Label value="PASS:" /><input type="text" value={pass} onChange={(e) => setPass(e.target.value)} style={{ color: 'black' }} />            
            <Button eventName={loginEvent} name="ログイン" />
        </>
    );
};

export default Login;