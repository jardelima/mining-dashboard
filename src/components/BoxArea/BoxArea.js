import React from "react";
import styles from "./BoxArea.module.css";

// Image
import cloud from "../../assets/images/cloud.svg";

import { 
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";

export default function BoxArea() {
    const data = [
        {name: "Detratores", uv: 2, pv: 2, ar: 2,},
        {name: "Neutros", uv: 3, pv: 0.5, ar: 5,},
        {name: "Promotores", uv: 1, pv: 2, ar: 3,},
    ];

    return (
        <div className={styles.boxArea}>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <AreaChart data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FAA924" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#FAA924" stopOpacity={1}/>
                        </linearGradient>

                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#04CE7A" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#04CE7A" stopOpacity={1}/>
                        </linearGradient>

                        <linearGradient id="colorAr" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F04545" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#F04545" stopOpacity={1}/>
                        </linearGradient>
                    </defs>

                    <Area type="monotone" dataKey="ar" stroke="#F04545" fillOpacity={1} fill="url(#colorAr)" />
                    <Area type="monotone" dataKey="uv" stroke="#FAA924" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#04CE7A" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>

            <button>Compartilhar</button>

            <button>
                <img src={cloud} alt="Download" />
            </button>
        </div>
        
    )
}
