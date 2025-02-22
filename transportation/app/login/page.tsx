"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/navigation"; 
import Input from "@/components/Input"; 
import Button from "@/components/Button"; 

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter(); //ページ遷移用

    const loginForm = (e: React.FormEvent) => {
        e.preventDefault(); //フォーム送信時のページリロードを防ぐ(リロードが発生し、入力情報が消えてしまうため)
        console.log("ログインボタンが押されました"); // デバッグ用ログ
        if (id === "admin" && password === "password") {
           router.push("/main"); // 遷移
        } else {
            alert("IDまたはパスワードが間違っています");
        }
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">ログイン</h1>
            <form onSubmit={loginForm} className="flex flex-col items-center">
                <Input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <Input type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={() => setMessage("ログイン成功！")}>ログイン</Button> 
            </form>
        </main>
    );
};

export default Login;