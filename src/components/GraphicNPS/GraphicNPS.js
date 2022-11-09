import React from "react";
import styles from "./GraphicNPS.module.css";

// Graphic
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function GraphicNPS() {
    const data = [
        {
          name: "January",
          negatives: -800,
          stable: -710,
          positives: -600,
          amt: 2400
        },
        {
          name: "February",
          negatives: 0,
          stable: -510,
          positives: -400,
          amt: 2210
        },
        {
          name: "March",
          negatives: 500,
          stable: 200,
          positives: 150,
          amt: 2290
        },
        {
          name: "April",
          negatives: 400,
          stable: 50,
          positives: 100,
          amt: 2000
        },
        {
          name: "May",
          negatives: -720,
          stable: -200,
          positives: -100,
          amt: 2181
        },
        {
          name: "June",
          negatives: -400,
          stable: 590,
          positives: 700,
          amt: 2500
        },
        {
          name: "July",
          negatives: -600,
          stable: -200,
          positives: -100,
          amt: 2100
        }
    ];

    return (
        <div className={styles.graphicGenders}>

            {window.innerWidth > 1200 ? 
                <ResponsiveContainer>
                    <LineChart
                        width={700}
                        height={450}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="10 10 10" />

                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />

                        <Tooltip />

                        <Line yAxisId="left" type="monotone" dataKey="negatives" stroke="#F04545" strokeWidth={6} activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="stable" stroke="#FAA924" strokeWidth={6} />
                        <Line yAxisId="left" type="monotone" dataKey="positives" stroke="#04CE7A" strokeWidth={6} />
                    </LineChart>
                </ResponsiveContainer>

                :

                <div className={styles.graphicMobile}>
                    <LineChart
                        width={700}
                        height={450}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="10 10 10" />
                        
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />

                        <Tooltip />

                        <Line yAxisId="left" type="monotone" dataKey="negatives" stroke="#F04545" strokeWidth={6} activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="stable" stroke="#FAA924" strokeWidth={6} />
                        <Line yAxisId="left" type="monotone" dataKey="positives" stroke="#04CE7A" strokeWidth={6} />
                    </LineChart>
                </div>
            }
        </div>
    )
}
