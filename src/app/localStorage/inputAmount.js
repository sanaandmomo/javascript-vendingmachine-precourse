import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import { getNumber } from './index.js';

export const getInputAmount = () => getNumber(STORAGE_KEY.inputAmount);

export const setInputAmount = (inputAmount) =>
    localStorage.setItem(STORAGE_KEY.inputAmount, inputAmount);
