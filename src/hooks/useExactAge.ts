import {useMemo} from 'react';

const EARTH_REVOLUTION = 365.256363004;
const DAY_IN_MILLISECONDS = 86400000;

const calculateAge = (date: Date): number => (Date.now() - date.getTime()) / DAY_IN_MILLISECONDS / EARTH_REVOLUTION;

export function useExactAge(date: Date, decimals: number): string {
    return useMemo(() => calculateAge(date).toFixed(decimals), [decimals, date]);
}
