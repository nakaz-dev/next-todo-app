'use client';

import { useState } from "react";

export default function Profile() {
    const [name, setName] = useState("");
    const [hobby, setHobby] = useState("");
    return (
        <>
            <label>名前：</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>趣味：</label>
            <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)}/>
            <p>こんにちは、{name}さん！趣味は{hobby}なんですね！</p>
        </>
    );
}
    