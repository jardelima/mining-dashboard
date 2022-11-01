import React from "react";
import styles from "./BoxArea.module.css";

// Image
import cloud from "../../assets/images/cloud.svg";

import { 
    ResponsiveContainer,
    AreaChart,
    Tooltip,
    Area,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

export default function BoxArea() {
    const data = [
        {name: "A", uv: 12, pv: 24, ar: 6,},
        {name: "B", uv: 9, pv: 18, ar: 20,},
        {name: "C", uv: 30, pv: 15, ar: 15,},
    ];

    return (
        <div className={styles.boxArea}>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <AreaChart data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.7}/>
                        </linearGradient>

                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.7}/>
                        </linearGradient>

                        <linearGradient id="colorAr" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F04545" stopOpacity={0.7}/>
                            <stop offset="95%" stopColor="#F04545" stopOpacity={0.7}/>
                        </linearGradient>
                    </defs>

                    <Tooltip />

                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="ar" stroke="#F04545" fillOpacity={1} fill="url(#colorAr)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>

            <button>Compartilhar</button>

            <button>
                <img src={cloud} alt="Download" />
            </button>
        </div>
        
    )
}
