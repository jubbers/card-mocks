import * as React from "react";
import useForm from "~hooks/UseForm";
import CardTemplateEditor from "~components/layouts/CardTemplateEditor";
import 'reset.css';


export default () => {
  // placeholder, will be swapped out based on user pref going forward
  const [form, setForm] = useForm('card-mocks_most-recent-page');

  return (
    <CardTemplateEditor cardForm={form} setForm={setForm}/>
  )
};
