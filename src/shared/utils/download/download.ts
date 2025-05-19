export const download = (url: string) => {
    const downloadUrl = url;

    const link = document.createElement('a');
    link.href = downloadUrl;

    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};
