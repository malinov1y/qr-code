import { Link } from "react-router-dom";
import s from './navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/qr-code/generate">Генерировать QR код</Link>
            <Link to="/qr-code/scan">Сканировать QR код</Link>
            <Link to="/qr-code/scanImage">Сканировать QR код по изображению</Link>
            <Link to="/qr-code/generateHistory">История генерирования</Link>
            <Link to="/qr-code/scanHistory">История сканирования</Link>
        </nav>
    );
};