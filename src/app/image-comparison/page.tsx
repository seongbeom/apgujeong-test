"use client";

import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";

export default function Page() {
    return (
        <div className={'flex justify-center'}>
            <div className={'relative'}>
                <img src={'/images/comparison/0_left.jpg'} className={'invisible w-auto max-h-screen'}/>
                <ReactCompareSlider
                    className={'!absolute top-0 left-0 w-100 h-100'}
                    itemOne={<ReactCompareSliderImage src="/images/comparison/0_left.jpg" alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="/images/comparison/0_right.jpg" alt="Image two" />}
                />
            </div>
        </div>
    );
}
