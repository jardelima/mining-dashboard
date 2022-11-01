import React from "react";
import styles from "./GraphicGenders.module.css";

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

export default function GraphicGenders() {
    const data = [
        {
          name: "January",
          masculine: -800,
          feminine: -710,
          amt: 2400
        },
        {
          name: "February",
          masculine: 0,
          feminine: -510,
          amt: 2210
        },
        {
          name: "March",
          masculine: 500,
          feminine: 200,
          amt: 2290
        },
        {
          name: "April",
          masculine: 400,
          feminine: 50,
          amt: 2000
        },
        {
          name: "May",
          masculine: -720,
          feminine: -200,
          amt: 2181
        },
        {
          name: "June",
          masculine: -400,
          feminine: 590,
          amt: 2500
        },
        {
          name: "July",
          masculine: -600,
          feminine: -200,
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
                        <Line yAxisId="left" type="monotone" dataKey="feminine" stroke="#D98B72" strokeWidth={6} activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="masculine" stroke="#7469BB" strokeWidth={6} />
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
                        <Line yAxisId="left" type="monotone" dataKey="feminine" stroke="#D98B72" strokeWidth={6} activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="masculine" stroke="#7469BB" strokeWidth={6} />
                    </LineChart>
                </div>
            }
        </div>
    )
}
