import moment from 'moment';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fDate(date: Date | undefined) {
  return moment(date).format('MMMM d,  yyyy');
}

export function fDateTime(date: Date | undefined) {
  return moment(date).format('dd MMM yyyy HH:mm');
}
