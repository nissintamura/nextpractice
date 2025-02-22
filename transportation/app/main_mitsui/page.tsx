'use client'
import React from 'react';
import { useState } from 'react';
import Label from "@/components/Label";
import Button from "@/components/Button";

const Main =()=>{

    const [date , setDate] = useState("");
    const [from , setFrom] = useState("");
    const [to , setTo] = useState("");
    const [pay , setPay] = useState("");
    const [listData, setListData] = useState<{ date: string; from: string; to: string; pay: string; }[]>([]);
    //const [listData, setListData] = useState([]);


    const submitEvent = () => { 
        const inputData = { date, from, to, pay };   
        console.log(...listData);    
        console.log(inputData);
        setListData([...listData, inputData]);
        //setListData([inputData]);
    };

    return(
        <>
            <Label value="日付:" /><input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ color: 'black' }} />
            <Label value="FROM:" /><input type="text" value={from} onChange={(e) => setFrom(e.target.value)} style={{ color: 'black' }} />            
            <Label value="TO:" /><input type="text" value={to} onChange={(e) => setTo(e.target.value)} style={{ color: 'black' }} />            
            <Label value="金額:" /><input type="text" value={pay} onChange={(e) => setPay(e.target.value)} style={{ color: 'black' }} />
            <Button eventName={submitEvent} name="登録" />
            
            {listData.length > 0 && (
                <div>
                    <h3>入力内容</h3>
                    {listData.map((data, index) => (
                        <div key={index}>
                            <p>日付: {data.date} FROM-TO: {data.from} ~ {data.to} 金額: {data.pay}円</p>
                        </div>
                    ))}
                </div>
            )}            
        </>
    );
};

export default Main;