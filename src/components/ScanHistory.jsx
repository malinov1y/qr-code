import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { GENERATE_DATA, SCAN_DATA } from '../constants';
import { RemoveItemButton } from './RemoveItemButton.jsx'
import { DownloadButton } from './DownloadButton.jsx'

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
        <div>
            <button onClick={handleClearAll}>Очистить историю</button>
            {data.map((text) => (
                <div key={text}>
                    <p>{text}</p>
                    <QRCodeCanvas id="qr-code-canvas" value={text} size={100} />
                    <RemoveItemButton
                        item={text}
                        data={data}
                        setData={setData}
                        storageKey={SCAN_DATA}
                    />
                    <DownloadButton canvasID="qr-code-canvas" fileName={text}/>
                </div>
            ))}
        </div>
    );
};