import { createContext } from 'react';
import { CardForm } from '~types';
import baseCard from '~CardForms';

export const FormContext = createContext<CardForm>(baseCard)