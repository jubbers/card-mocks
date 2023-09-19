import * as React from "react";
import { useEffect } from "react";
import useForm from "~hooks/UseForm";
import { FormContext } from "~hooks/FormContext";
import { Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  EditPage, 
  ErrorPage,
  HomePage, 
  LoadPage, 
} from "~components/pages";
import 'reset.css';



export default () => {
  // State that needs to be hoisted out of page-level components
  const [form, setForm] = useForm();

  const router = createBrowserRouter([
    { 
      path: '/',
      element: <HomePage cardForm={form} setForm={setForm}  />
    },
    {
      path: '/load',
      element: <LoadPage cardForm={form} setForm={setForm} />
    },
    {
      path: '/edit',
      element: <EditPage cardForm={form} setForm={setForm} />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
        {/* <BrowserRouter key='browser-router'>
          <Routes key='routes'>
            <Route path='/' key='home' Component={() => } />
            <Route path='/load' Component={() => <LoadPage cardForm={form} setForm={setForm} showModal={showModal} setShowModal={setShowModal} />} />
            <Route path='/edit' Component={() => <EditPage cardForm={form} setForm={setForm} />} />
            <Route errorElement path='*' Component={() => <ErrorPage />} />
          </Routes>
        </BrowserRouter> */}
    </React.StrictMode>
  )
};
