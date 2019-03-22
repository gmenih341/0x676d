export function toQueryString(object: Record<string, object>): string {
    let result: string[] = [];
    Object.entries(object).map(([key, value]: [string, object]) => {
        if (Array.isArray(value)) {
            value.forEach((item: string) => {
                result.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`);
            });
        } else if (value === null || typeof value !== 'object') {
            result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    });
    return result.join('&');
}
