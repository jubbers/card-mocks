import * as React from "react";
import { useEffect } from "react";
import useForm from "~hooks/UseForm";
import { FormContext } from "~hooks/FormContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { 
  EditPage, 
  ErrorPage,
  HomePage, 
  LoadPage, 
} from "~components/pages";
import 'reset.css';


export default () => {
  const [form, setForm, updateLocalStorage] = useForm();

  return (
    <React.StrictMode>
      <FormContext.Provider value={form}>
        <BrowserRouter key='browser-router'>
          <Routes key='routes'>
            <Route path='/' key='home' Component={() => <HomePage key={'homepage'} cardForm={form} setForm={setForm} />} />
            <Route path='/load' Component={() => <LoadPage key={'loadpage'} cardForm={form} setForm={setForm} />} />
            <Route path='/edit' Component={() => <EditPage key={'editpage'} cardForm={form} setForm={setForm} />} />
            <Route errorElement path='*' Component={() => <ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </React.StrictMode>
  )
};
