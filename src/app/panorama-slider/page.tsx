"use client";

import Script from "next/script";

declare global {
    interface Window {
        CI360?: any;
    }
}

const HOTSPOT_POSITIONS = [];
for (let i = 1; i <= 35; i++) {
    HOTSPOT_POSITIONS.push({imageIndex: i, xCoord: 200 + i, yCoord: 200});
}

const HOTSPOTS_CONFIG = [
    {
        positions: HOTSPOT_POSITIONS,
        variant: {
            title: 'Google',
            url: 'https://google.com',
            newTab: true,
        },
        popupProps: {
            open: false,
        },
        indicatorSelector: 'custom-hotspot' // optional
    }
];

export default function Page() {
    return (
        <>
            <Script
                src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.0/js-cloudimage-360-view.min.js"
                onLoad={() => {
                    console.log('on load');
                }
                }
                onReady={() => {
                    console.log('on ready');
                    // window.CI360.init();
                    window.CI360.addHotspots('hotspot-test', HOTSPOTS_CONFIG);

                    const handleHotspotClick = (e: any) => {
                        const hotspotIconId = e.target.dataset.hotspotIconId;
                        const hotspotPopup = document.querySelector(`[data-hotspot-popup-id="${hotspotIconId}"] a`);

                        if (hotspotPopup) {
                            const href = hotspotPopup.getAttribute('href') || '';
                            const newTab = hotspotPopup.getAttribute('target') || '';
                            if (newTab) {
                                window.open(href, '_blank');
                            } else {
                                window.location.href = href;
                            }
                        }
                    }

                    document.querySelector('.custom-hotspot')?.removeEventListener('click', handleHotspotClick);
                    document.querySelector('.custom-hotspot')?.addEventListener('click', handleHotspotClick);
                }
                }
            />
            <main className="flex flex-col items-center">
                <div className={'relative'}>
                    <img src={'/images/panorama/1_0_0.jpg'} className={'invisible w-auto max-h-screen'}/>
                    <div
                        className="cloudimage-360 !absolute top-0 left-0 w-100 h-100"
                        id="hotspot-test"
                        data-folder="/images/panorama/"
                        data-filename-x="{index}_0_0.jpg"
                        data-amount-x="35"
                        // data-hide-360-logo="true"
                        data-hotspots
                        // data-transformation="func=fit"
                    >
                    </div>
                </div>


            </main>
        </>
    )
}
