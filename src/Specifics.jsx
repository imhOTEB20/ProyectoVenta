import { useState } from "react";

export default function Specifics () {
    const specifics = {
        "processor":"Atom N 2600 Dual Core 1.66 GHz",
        "ram":"2 GB DDR3",
        "hd":"Wester Digital 320 GB",
        "display":"LED Display 16:9 (widescreen) 1024 x 600 px.",
        "batery":"Autonomia 3 horas",
        "so":"Windows 7 Home x86",
        "apps":"Office 2010 plus"
    }

    const [showProcesor, setShowProccesor] = useState(false);
    const [showRam, setShowRam] = useState(false);
    const [showHD, setShowHD] = useState(false);
    const [showDisplay, setShowDisplay] = useState(false);
    const [showBatery, setShowBatery] = useState(false);
    const [showSO, setShowSO] = useState(false);
    const [showApps, setShowApps] = useState(false);

    const handleProccesorButton = () => {
        setShowProccesor((prevShowProccesor) => !prevShowProccesor);
    };

    const handleRamButton = () => {
        setShowRam((prevShowRam) => !prevShowRam);
    };

    const handleHDButton = () => {
        setShowHD((prevShowHD) => !prevShowHD);
    };

    const handleDisplayButton = () => {
        setShowDisplay((prevShowDisplay) => !prevShowDisplay);
    };

    const handleBateryButton = () => {
        setShowBatery((prevShowBatery) => !prevShowBatery);
    };

    const handleSOButton = () => {
        setShowSO((prevShowSO) => !prevShowSO);
    };

    const handleAppsButton = () => {
        setShowApps((prevShowApps) => !prevShowApps);
    };

    return (
        <div className="grid"> 
            <aside class="menu">
                <p class="menu-label">Hardware</p>
                <ul class="menu-list">
                    <li>
                        <button className={showProcesor ? "is-active" : ""} onClick={handleProccesorButton}>Procesador</button>
                        {showProcesor ? (<ul>
                            <li>
                                {specifics.processor}
                            </li>
                        </ul>) : null}
                    </li>
                    <li>
                        <button className={showRam ? "is-active" : ""} onClick={handleRamButton}>Memoria Ram</button>
                        {showRam ? (<ul>
                            <li>
                                {specifics.ram}
                            </li>
                        </ul>) : null}
                    </li>
                    <li>
                        <button className={showHD ? "is-active" : ""} onClick={handleHDButton}>Disco Rigido</button>
                        {showHD ? (<ul>
                            <li>
                                {specifics.hd}
                            </li>
                        </ul>) : null}
                    </li>
                    <li>
                        <button className={showDisplay ? "is-active" : ""} onClick={handleDisplayButton}>Pantalla</button>
                        {showDisplay ? (<ul>
                            <li>
                                {specifics.display}
                            </li>
                        </ul>) : null}
                    </li>
                    <li>
                        <button className={showBatery ? "is-active" : ""} onClick={handleBateryButton}>Bateria</button>
                        {showBatery ? (<ul>
                            <li>
                                {specifics.batery}
                            </li>
                        </ul>) : null}
                    </li>
                </ul>
                <p class="menu-label">Software</p>
                <ul class="menu-list">
                    <li>
                        <button className={showSO ? "is-active" : ""} onClick={handleSOButton}>Sistema Operativo</button>
                        {showSO ? (<ul>
                            <li>
                                {specifics.so}
                            </li>
                        </ul>) : null}
                    </li>
                    <li>
                        <button className={showApps ? "is-active" : ""} onClick={handleAppsButton}>Programas instalados</button>
                        {showApps ? (<ul>
                            <li>
                                {specifics.apps}
                            </li>
                        </ul>) : null}
                    </li>
                </ul>
            </aside>
        </div>
    );
}