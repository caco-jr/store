export const STORE_NAME = 'Testtini';

export const slugify = (text: string): string => {
    if (!text || typeof text !== 'string') {
        return '';
    }

    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};
