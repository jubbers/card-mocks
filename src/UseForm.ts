import { useEffect, useState } from 'react'
import { CardForm } from '~types';
import baseCard from '~CardForms';

// Modified useState to also update local storage on each update
const useForm = (): [CardForm, (setForm: CardForm) => void] => {
  const localStorageKey = 'card-mocks_most-recent-page';
  const savedFormString: string | null = window.localStorage.getItem(localStorageKey); 
  
  let defaultForm: CardForm;
  if (savedFormString == null) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(baseCard));
    defaultForm = baseCard;
  } else {
    defaultForm = JSON.parse(savedFormString) as CardForm;
  }

  const [form, setForm] = useState<CardForm>(defaultForm);
  const updateForm = (newForm: CardForm) => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(newForm));
    setForm(newForm);
  }

  return [form, updateForm];
}

export default useForm;