import { useState } from 'react'
import { generate } from 'random-words';
import { CardForm } from '~types';
import baseCard from '~CardForms';

// Custom hook for helping with localstorage management
const useForm = (): [CardForm, (setForm: CardForm) => void, () => void] => {
  const [form, setForm] = useState<CardForm>({ ...baseCard});
  const updateForm = (newForm: CardForm) => {
    if (newForm.templateName !== form.templateName) {
      window.localStorage.removeItem(form.templateName);
      updateLocalStorage();
    }
    setForm(newForm);
  }

  const updateLocalStorage = () => {
    window.localStorage.setItem(form.templateName, JSON.stringify(form));
  }

  return [form, updateForm, updateLocalStorage];
}

export default useForm;