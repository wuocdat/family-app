export const setText = (text?: string) => {
    if (!text) {
        return '';
    }

    if (typeof text !== 'string') {
        return (text as any).toString();
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
};
