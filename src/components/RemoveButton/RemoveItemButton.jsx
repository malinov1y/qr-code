import s from './removeItemButton.module.scss';

export const RemoveItemButton = ({ item, data, setData, storageKey }) => {
    const handleRemove = () => {
        const updatedData = data.filter((element) => element !== item);
        localStorage.setItem(storageKey, JSON.stringify(updatedData));
        setData(updatedData);
    };

    return(
        <button onClick={handleRemove} className={s.button}>Удалить</button>
    )
};