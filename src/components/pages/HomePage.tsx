import * as React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { generate } from 'random-words';
import { Header } from '~components/organisms';
import { Root, Body } from '~components/pages';
import { FormProps } from '~types';
import defaultForm from '~CardForms';
import { ControlDialogue } from '~components/molecules';
import IconCard from '~assets/icon-card.png';
import IconFolder from '~assets/icon-folder.png';
import { ControlButton } from '~components/atoms';

interface HomePageProps extends FormProps {};

const CenteredBody = styled(Body)`
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const OptionButton = styled(ControlButton)`
  min-width: 250px;
  min-height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;

  border: 2px solid #2D2D30;
  border-radius: 4px;
  background-color: #252526;
  transition: 0.2s;

  img {
    height: 84px;
  }

  &:hover {
    cursor: pointer; 
    background-color: #2D2D30;
  }
`

const HomePage = ({ cardForm, setForm }: HomePageProps) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const newTemplateOnClick = () => {
    console.log('new button click registered');
    setForm({ ...defaultForm, templateName: generate(3).join('-') });
    setShowModal(true);
    console.log('showModal set to true');
  }

  const dialogueContinue = () => navigate('/edit');
  const dialogueClose = () => { 
    localStorage.clear();
    setShowModal(false);
  };
  const dialogueUpdate = (newName: string) => {
    const formCopy = { ...cardForm };
    formCopy.templateName = newName;
    setForm(formCopy);
  };

  return (
    <Root>
      <Header />
      { showModal && 
        <ControlDialogue 
          key={'homepage-control-dialogue'}
          label={'new template name:'}
          inputContent={cardForm.templateName}
          buttonContent={'continue'}
          continueAction={dialogueContinue} 
          closeAction={dialogueClose} 
          updateAction={dialogueUpdate} />
      }
      <CenteredBody>
        <OptionButton onClick={newTemplateOnClick}>
          <h3>generate<br/>new template</h3>
          <img src={IconCard} alt='Card Icon with Plus In Center' />
        </OptionButton>


        <Link to={'/load'}>
          <OptionButton>
            <h3>load existing<br/>template (local)</h3>
            <img src={IconFolder} alt='Card Icon with Plus In Center' />
          </OptionButton>  
        </Link>
      </CenteredBody>
    </Root>
  )
}

export default HomePage;