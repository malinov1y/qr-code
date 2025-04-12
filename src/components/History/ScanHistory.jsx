import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { GENERATE_DATA, SCAN_DATA } from '../../constants.js';
import { RemoveItemButton } from '../RemoveButton/RemoveItemButton.jsx'
import { DownloadButton } from '../DownloadButton/DownloadButton.jsx'
import s from './history.module.scss';

export const ScanHistory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setData(storedData);
    }, []);

    const handleClearAll = () => {
        localStorage.removeItem(SCAN_DATA);
        setData([]);
    }

    return (
        <div className={s.container}>
            <button onClick={handleClearAll} className={s.clearButton}>Очистить историю</button>
            {data.map((text) => (
                <div key={text} className={s.qrItem}>
                    <p className={s.qrText}>{text}</p>
                    <QRCodeCanvas id="qr-code-canvas" value={text} size={100} />
                    <div className={s.buttons}>
                        <DownloadButton canvasID="qr-code-canvas" fileName={text}/>
                        <RemoveItemButton
                            item={text}
                            data={data}
                            setData={setData}
                            storageKey={SCAN_DATA}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};