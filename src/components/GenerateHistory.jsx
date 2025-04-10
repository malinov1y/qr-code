import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';
import { RemoveItemButton } from '../components/RemoveItemButton.jsx'

export const GenerateHistory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        setData(storedData);
    }, []);

    const handleClearAll = () => {
        localStorage.removeItem(GENERATE_DATA);
        setData([]);
    }

    return (
        <div>
            <button onClick={handleClearAll}>Очистить историю</button>
            {data.map((text) => (
                <div key={text}>
                    <p>{text}</p>
                    <QRCodeSVG value={text} size="100" />
                    <RemoveItemButton
                        item={text}
                        data={data}
                        setData={setData}
                        storageKey={GENERATE_DATA}
                    />
                </div>
            ))}
        </div>
    );
};