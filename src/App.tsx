import * as React from "react";
import useForm from "~hooks/UseForm";
import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";
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
    </React.StrictMode>
  )
};
