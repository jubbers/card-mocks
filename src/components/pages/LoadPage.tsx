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
import { ControlButton } from '~components/atoms';
import defaultForm from '~CardForms';

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

const loadTemplate = (key: string): CardForm => {
  const formString = localStorage.getItem(key);
  if (formString === null) throw new Error(`Invalid template key for loadTemplateCopy [${key}]`);
  return JSON.parse(formString) as CardForm;
}

const LoadPage = ({cardForm, setForm}: LoadPageProps) => {
  const [modalText, setModalText] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [keys, setKeys] = useState<string[]>(Object.keys(localStorage));
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
      const formCopy = { ...loadTemplate(localStorageKey), templateName: generate(3).join('-') };
      setForm(formCopy);
      setShowModal(true);
      setModalText('template copy name:');
    }

    const loadTemplateForEdit = (localStorageKey: string) => {
      setForm(loadTemplate(localStorageKey));
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
  const dialogueClose = (e: React.MouseEvent<HTMLButtonElement>) => { 
    localStorage.clear();
    e.stopPropagation();
    setShowModal(false);
  };
  const dialogueUpdate = (newName: string) => {
    const formCopy = { ...cardForm };
    formCopy.templateName = newName;
    setForm(formCopy);
  };

  const createNewTemplate = () => {
    setModalText('new template name:');
    setForm({ ...defaultForm, templateName: generate(3).join('-') });
    setShowModal(true);
  }

  return (
    <Root>
      <Header />
      <Body>
        <LoadOptions>
          { ...renderFormOptions(keys) }
          <ControlButton onClick={createNewTemplate}>create a new template</ControlButton>
        </LoadOptions>
        <Divider />
        <Canvas cardForm={cardForm} />
      </Body>

      { 
        showModal && 
        <ControlDialogue 
          label={modalText}
          inputContent={cardForm.templateName}
          buttonContent={'continue'}
          continueAction={dialogueContinue} 
          closeAction={dialogueClose} 
          updateAction={dialogueUpdate} /> 
      }
    </Root>
  )
}

export default LoadPage;