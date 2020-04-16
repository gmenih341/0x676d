export enum MimeType {
    PNG = 'image/png',
    JPEG = 'image/jpeg',
    WEBP = 'image/webp',
}

export type ImageSet = Partial<Record<MimeType, string>>;
