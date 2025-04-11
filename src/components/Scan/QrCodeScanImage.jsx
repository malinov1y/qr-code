import { useState } from 'react';
import { SCAN_DATA } from '../../constants';
import jsQR from 'jsqr';

export const QrCodeScanImage = () => {
    const [scanned, setScanned] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const image = new Image();
                image.src = reader.result;
                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    context.drawImage(image, 0, 0, image.width, image.height);

                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    const code = jsQR(imageData.data, imageData.width, imageData.height);

                    if (code) {
                        const result = code.data;

                        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

                        if (!prevData.includes(result)) {
                            setScanned(result);
                            localStorage.setItem(
                                SCAN_DATA,
                                JSON.stringify([...prevData, result])
                            );
                        } else {
                            setScanned('Этот QR код уже был сканирован');
                        }
                    } else {
                        setScanned('QR код не найден');
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*" // позволяет выбирать только изображения
                onChange={handleImageUpload}
                className="uploadInput"
            />
            {scanned && (
                <p>{scanned}</p>
            )}
        </div>
    );
};
