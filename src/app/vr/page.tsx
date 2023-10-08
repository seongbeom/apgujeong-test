"use client";

import React, {useMemo} from "react";
import View360, {CubemapProjection} from "@egjs/react-view360";
import "@egjs/view360/css/view360.min.css";
export default function Page() {
    const projection = useMemo(() => new CubemapProjection({
        src: [
            "/images/vr/pano_r.jpg",
            "/images/vr/pano_l.jpg",
            "/images/vr/pano_u.jpg",
            "/images/vr/pano_d.jpg",
            "/images/vr/pano_f.jpg",
            "/images/vr/pano_b.jpg",
        ]
    }), []);

    return (
        <div>
            <View360 projection={projection} className={'w-screen h-screen'}/>
        </div>
    )
}
