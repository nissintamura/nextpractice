'use client'
import React, { useState } from 'react';
import Button from "@/components/Button";
import Label from "@/components/Label";
import Text from "@/components/Text";

const Main = () => {
    const [date, setDate] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [pay, setPay] = useState("");
    const [listData, setListData] = useState<{ date: string; from: string; to: string; pay: string; }[]>([]);

    const submitEvent = () => {
        //未入力チェック
        if (!date || !from || !to || !pay) {
            alert("未入力の項目があります");
            return;
        }
        const newListData = [...listData];
        newListData.push({ date, from, to, pay });
        setListData(newListData);
    };

    const deleteSelectedItems = () => {
        const checkboxes = document.querySelectorAll('.target');    //チェックボックス
        const updatedListData = listData.filter((_, index) => !(checkboxes[index] as HTMLInputElement).checked);    //チェックされていない項目のみを新しい配列updatedListDataに残す
        setListData(updatedListData);
        // チェックボックスの状態を初期化
        checkboxes.forEach(checkbox => {
            (checkbox as HTMLInputElement).checked = false;
        });
    };

    return (
        <div className="flex flex-col items-start w-1/2">
            <div className="mb-4 flex items-center w-full">
                <Label value="日付：" /><Text type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-4 flex items-center w-full">
                <Label value="FROM：" /><Text type="input" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <div className="mb-4 flex items-center w-full">
                <Label value="TO：" /><Text type="input" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
            <div className="mb-4 flex items-center w-full">
                <Label value="金額：" /><Text type="number" value={pay} onChange={(e) => setPay(e.target.value)} />
            </div>
            <div className="flex space-x-4">
                <Button eventName={submitEvent} name="登録"/>
                <Button eventName={deleteSelectedItems} name="削除" />
            </div>
            {listData.length > 0 && (
                <div className="w-full">
                    <h3 className="font-bold">入力内容</h3>
                    <div className="flex mb-2">
                        <h4 className="w-1/5 font-bold">日付</h4>
                        <h4 className="w-1/5 font-bold">FROM</h4>
                        <h4 className="w-1/5 font-bold">TO</h4>
                        <h4 className="w-1/5 font-bold">金額</h4>
                        <h4 className="w-1/5 font-bold">CHECK</h4>
                    </div>
                </div>
            )}
            <div className="w-full">
                {listData.map((data, index) => (
                    <div key={index} className="flex flex-col mb-2">
                        <div className="flex">
                            <p className="w-1/5">{data.date}</p>
                            <p className="w-1/5">{data.from}</p>
                            <p className="w-1/5">{data.to}</p>
                            <p className="w-1/5">{data.pay}円</p>
                            <input type="checkbox" className="target w-1/7" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;