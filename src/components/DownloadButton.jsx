export const DownloadButton = ({ canvasID, fileName }) => {
    const handleDownload = () => {
        const canvas = document.getElementById(canvasID);
        const pngUrl = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = pngUrl;
        const filteredFileName = fileName.replace(/[/*?"<>|]/g, '_');
        link.download = `${filteredFileName}.png`;
        link.click();
    };

    return(
        <button onClick={handleDownload}>
            Схранить в PNG
        </button>
    );
};