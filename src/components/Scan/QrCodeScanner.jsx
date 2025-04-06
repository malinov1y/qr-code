import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };

    return (
        <div className={s.container}>
            <Scanner
            onScan={scanHandler}
            components={{
                audio: false,
                finder: false,
            }}
            styles={{
                container: { width: 200 }
            }} />
            <a
                href={scanned}
                target="_blank"
                rel="noopener noreferrer"
                className={s.result}
            >
                {scanned}
            </a>
        </div>
    );
};