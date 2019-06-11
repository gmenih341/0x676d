type ObjectKey = string | number | boolean;

export function toQueryString(object: Record<string, ObjectKey | ObjectKey[]>): string {
    let result: string[] = [];
    Object.entries(object).map(([key, value]: [string, ObjectKey | ObjectKey[]]) => {
        if (Array.isArray(value)) {
            value.forEach((item: ObjectKey) => {
                result.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(item as string)}`);
            });
        } else if (value === null || typeof value !== 'object') {
            result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`);
        }
    });
    return result.join('&');
}
