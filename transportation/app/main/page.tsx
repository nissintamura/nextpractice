'use client'
import React from 'react';
import { useState } from 'react';
import Button from "@/components/Button";
import Label from "@/components/Label";
import Text from "@/components/Text";

const Main =()=>{

    const [date , setDate] = useState("");
    const [from , setFrom] = useState("");
    const [to , setTo] = useState("");
    const [pay , setPay] = useState("");    
    const [listData, setListData] = useState<{ date: string; from: string; to: string; pay: string; }[]>([]);

    const submitEvent = () => { 
        setListData([...listData, { date, from, to, pay }]);
    };

    return(
        <>
            <Label value="日付　　："/><Text type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <Label value="ＦＲＯＭ："/><Text type="input" value={from} onChange={(e) => setFrom(e.target.value)}/>
            <Label value="ＴＯ　　："/><Text type="input" value={to} onChange={(e) => setTo(e.target.value)}/>
            <Label value="金額　　："/><Text type="input" value={pay} onChange={(e) => setPay(e.target.value)}/>
            <Button eventName = {submitEvent} name="登録" />
            {listData.length > 0 && (
                <div>
                    <h3>入力内容</h3>
                </div>
            )}

            {listData.map((data, index) => (
                <div key={index}>
                    <p>日付: {data.date} FROM-TO: {data.from} ~ {data.to} 金額: {data.pay}円</p>
                </div>
            ))}                                       
        </>
    );
    
};
export default Main;