import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas } from '~components/organisms';
import { ControlDialogue, ControlTemplateLoader } from '~components/molecules';
import { Divider, Header } from '~components/organisms';
import { Body, Root } from '~components/pages';
import { CardForm, FormProps } from '~types';
import { generate } from 'random-words';

interface LoadPageProps extends FormProps {};

const LoadOptions = styled.ul`
  display: flex;
  flex: 1;

  flex-direction: column;
  overflow-y: scroll;
  list-style-type: none;
  padding: 24px 32px;
  gap: 4px;
`

const LoadPage = ({cardForm, setForm}: LoadPageProps) => {
  const [keys, setKeys] = useState<string[]>(Object.keys(localStorage));
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const renderFormOptions = (localStorageKeys: string[]) => {
    const removeFromLocalStorage = (key: string) => {
      localStorage.removeItem(key);
      setKeys((current: string[]) => {
        return current.filter(k => k != key);
      })
    }

    const loadTemplateCopy = (localStorageKey: string) => {
      console.log('Loading template copy action...');
      const formString = localStorage.getItem(localStorageKey);
      if (formString === null) throw new Error(`Invalid template key for loadTemplateCopy [${localStorageKey}]`);
      
      const formCopy: CardForm = JSON.parse(formString) as CardForm
      formCopy.templateName = generate(3).join('-');
      setForm(formCopy as unknown as CardForm);
      setDisplayModal(true);
    }

    const loadTemplateForEdit = (localStorageKey: string) => {
      console.log('Loading template copy action...');
      const formString = localStorage.getItem(localStorageKey);
      if (formString === null) throw new Error(`Invalid template key for loadTemplateCopy [${localStorageKey}]`);
      setForm(JSON.parse(formString) as CardForm);
      console.log('Setting template to:')
      console.log(JSON.parse(formString) as CardForm);
      navigate('/edit');
    }

    return localStorageKeys.map((localStorageKey: string, index: number) => {
      return (
        <ControlTemplateLoader
          key={`load_template_button_${index}`}
          templateKey={localStorageKey}
          modified={'HH:MMxx'}
          actionCloseDialogue={loadTemplateForEdit} 
          actionEdit={loadTemplateForEdit} 
          actionCopy={loadTemplateCopy} 
          actionDelete={removeFromLocalStorage} /> 
      )
    })
  }

  const dialogueContinue = () => navigate('/edit');
  const dialogueClose = (e: React.MouseEvent<HTMLDivElement>) => { 
    localStorage.clear();
    e.stopPropagation();
    setDisplayModal(false);
  };
  const dialogueUpdate = (newName: string) => {
    const formCopy = { ...cardForm };
    formCopy.templateName = newName;
    setForm(formCopy);
  };

  return (
    <Root>
      { displayModal && 
        <ControlDialogue 
          label={'duplicate template name:'}
          inputContent={cardForm.templateName}
          buttonContent={'continue'}
          continueAction={dialogueContinue} 
          closeAction={dialogueClose} 
          updateAction={dialogueUpdate} /> 
      }
      <Header />
      <Body>
        <LoadOptions>
          { ...renderFormOptions(keys) }
        </LoadOptions>
        <Divider />
        <Canvas cardForm={cardForm} />
      </Body>
    </Root>
  )
}

export default LoadPage;