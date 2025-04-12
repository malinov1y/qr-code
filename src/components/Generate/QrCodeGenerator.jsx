import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import s from './qrCodeGenerator.module.scss';
import { GENERATE_DATA } from '../../constants';
import { DownloadButton } from '../DownloadButton/DownloadButton'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        if (!value.trim()) {
            return;
        }

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className={s.container}>
            <input
                type="text"
                value={value}
                placeholder="Введите текст..."
                onChange={onChangeHandler}
                className={s.input}>
            </input>
            <button type="button" className={s.button} onClick={onClickHandler}>
                Сгенерировать QR
            </button>

            { result !== '' ?
            <div className={s.qrWrapper}>
                <QRCodeCanvas id="qr-code-canvas" value={result} size={200} />
                <DownloadButton canvasID="qr-code-canvas" fileName={result} />
            </div> :
            null }
        </div>
    );
};