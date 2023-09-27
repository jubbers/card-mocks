import * as React from "react";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EditPage, ErrorPage, HomePage, LoadPage } from "~components/pages";
import { CardForm } from "~types";
import baseCard from "~CardForms"
import 'reset.css';

import { Buffer } from 'buffer';


export default () => {
  const [form, setForm] = useState<CardForm>({ ...baseCard});

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

  useEffect(() => {
    // @ts-ignore
    window.Buffer = Buffer;
  })

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
};
