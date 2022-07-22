import { categoryData } from '@utils/fetchCategory';
import { writable } from 'svelte/store';

export const category = writable();
export const products = writable();
export const promotions = writable();
export const product = writable();
