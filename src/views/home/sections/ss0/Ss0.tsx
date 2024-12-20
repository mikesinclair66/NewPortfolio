import './ss0.scss';
import '../../../../assets/styles/bubble.scss';
import { useClamShells } from './hooks/useClamShells';
import wait from '../../../../assets/scripts/wait';

import React, { useState, useRef, useEffect } from 'react';
import Anim from '../../../../components/anim/Anim';
import BlurredVideoContainer from '../../../../components/blurred_video_container/BlurredVideoContainer';
import PlatformTarget from 'src/components/target/PlatformTarget';
import OnHoverIcon from '../../../../components/on_hover_icon/OnHoverIcon';
import TV from '../../../../components/TV';

interface Ss0Props {
    desktopImplementation: boolean;
    tvVaporized: boolean;
    scrollFunctionAdded: boolean;
    setTvVaporized: () => void;
    getInTouch: () => void;
    selectDmic: (i: number) => void;
    hoverDmic: (i: number) => void;
    resetDmic: (i: number) => void;
}

const Ss0: React.FC<Ss0Props> = ({ desktopImplementation, tvVaporized, scrollFunctionAdded, setTvVaporized, getInTouch,
selectDmic, hoverDmic, resetDmic }) => {
    const [splashSectLoading, setSplashSectLoading] = useState<boolean>(true);
    const [customHighlight, setCustomHighlight] = useState<boolean>(false);
    const { csCoords, csDisplays, csLaunched, tvDisplay } = useClamShells(tvVaporized, setTvVaporized, desktopImplementation);

    useEffect(() => wait(100, () => setSplashSectLoading(false)), []);

    const scrollAllTheWay = () => {
        getInTouch();
        if(!tvVaporized && scrollFunctionAdded)
            setTvVaporized();
    }

    return (
        <div id="ss-0" className='scroll-section fill'>
            { desktopImplementation && <BlurredVideoContainer src="/graphics/ocean.mp4" loading={ splashSectLoading } /> }

            <PlatformTarget id="splash-content-container" appendedClasses="fill" desktopEnabledClasses='align-center'
            desktopImplementation={desktopImplementation}>
                <div id="sc">
                    <div id="sc-title">
                        <h1>My Name Is Michael Sinclair</h1>
                        <h3>and you&#39;re about to dive in an ocean of great software designs and experience.</h3>
                    </div>

                    <div id="intro-button" onPointerDown={scrollAllTheWay}
                    onMouseEnter={() => { setCustomHighlight(true); hoverDmic(5); }}
                    onMouseLeave={() => { setCustomHighlight(false); resetDmic(5); }} onClick={() => selectDmic(3)}>
                        <div id="ib-inner" className="align-center">
                            <Anim target="ib-background" toggled={customHighlight}></Anim>

                            <div className="button-caption">Follow Me</div>
                            <OnHoverIcon iconSrc="/graphics/nav/update.png"
                            hoverSrc="/graphics/nav/update_highlight.png" alt="Email Michael"
                            desktopImplementation={desktopImplementation} override={customHighlight} />
                        </div>
                    </div>
                </div>
            </PlatformTarget>

            <div id="tv-container-abs">
                <Anim toggled={tvVaporized} target="tca">
                    <div id="speech-bubble">
                        <div className="bubble bottom">
                            <span className="bubble-text">If you hire me, I&#39;ll...</span>
                        </div>
                    </div>
                    <div id="tv" onClick={() => selectDmic(1)} onMouseEnter={() => hoverDmic(1)} onMouseLeave={() => resetDmic(1)}>
                        <div id="clam-shells">
                            <img src="/graphics/shells/1.png" alt="Michael Sinclair&#8230;s Portfolio"
                            style={{
                                left: `${csCoords[0][0]}px`, top: `${csCoords[0][1]}px`,
                                display: (csDisplays[0] ? 'block' : 'none'), opacity: (csLaunched ? '0' : '1')
                            }} />
                            <img src="/graphics/shells/2.png" alt="Michael Sinclair&#8230;s Portfolio"
                            style={{
                                left: `${csCoords[1][0]}px`, top: `${csCoords[1][1]}px`,
                                display: (csDisplays[1] ? 'block' : 'none'), opacity: (csLaunched ? '0' : '1')
                            }} />
                            <img src="/graphics/shells/3.png" alt="Michael Sinclair&#8230;s Portfolio"
                            style={{
                                left: `${csCoords[2][0]}px`, top: `${csCoords[2][1]}px`,
                                display: (csDisplays[2] ? 'block' : 'none'), opacity: (csLaunched ? '0' : '1')
                            }} />
                            <img src="/graphics/shells/4.png" alt="Michael Sinclair&#8230;s Portfolio"
                            style={{
                                left: `${csCoords[3][0]}px`, top: `${csCoords[3][1]}px`,
                                display: (csDisplays[3] ? 'block' : 'none'), opacity: (csLaunched ? '0' : '1')
                            }} />
                            <img src="/graphics/shells/5.png" alt="Michael Sinclair&#8230;s Portfolio"
                            style={{
                                left: `${csCoords[4][0]}px`, top: `${csCoords[4][1]}px`,
                                display: (csDisplays[4] ? 'block' : 'none'), opacity: (csLaunched ? '0' : '1')
                            }} />
                            <img src="/graphics/shells/6.png" alt="Michael Sinclair&#8230;s Portfolio"
                            style={{
                                left: `${csCoords[5][0]}px`, top: `${csCoords[5][1]}px`,
                                display: (csDisplays[5] ? 'block' : 'none'), opacity: (csLaunched ? '0' : '1')
                            }} />
                        </div>
                        <div id="tv-headshot" style={{opacity: (tvDisplay ? '1' : '0')}}>
                            <TV />
                        </div>
                    </div>
                </Anim>
            </div>
        </div>
    );
}

export default Ss0;