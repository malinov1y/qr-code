export const RemoveItemButton = ({ item, data, setData, storageKey }) => {
    const handleRemove = () => {
        const updatedData = data.filter((element) => element !== item);
        localStorage.setItem(storageKey, JSON.stringify(updatedData));
        setData(updatedData);
    };

    return(
        <button onClick={handleRemove}>Удалить</button>
    )
};