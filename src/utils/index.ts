export const setText = (text?: string) => {
    if (!text) {
        return '';
    }

    if (typeof text !== 'string') {
        return (text as any).toString();
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const collapseText = (text: string, total: number): string => {
    const letters = text.split(' ');
    const shortenedContent: string[] = [];
    let length = 0;
    for (let letter of letters) {
        length += letter.length;
        if (length > total) break;
        else {
            length++;
            shortenedContent.push(letter);
        }
    }
    return shortenedContent.join(' ').concat('...');
};
