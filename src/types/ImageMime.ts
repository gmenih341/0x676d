export enum MimeType {
    PNG = 'image/png',
    WEBP = 'image/webp',
}

export type ImageSet = Record<MimeType, string>;
