import { Link } from "react-router-dom";
import s from './navigation.module.scss';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link className={s.link} to="/qr-code/generate">Генерировать QR код</Link>
            <Link className={s.link} to="/qr-code/scan">Сканировать QR код</Link>
            <Link className={s.link} to="/qr-code/scanImage">Сканировать QR код по изображению</Link>
            <Link className={s.link} to="/qr-code/generateHistory">История генерирования</Link>
            <Link className={s.link} to="/qr-code/scanHistory">История сканирования</Link>
        </nav>
    );
};