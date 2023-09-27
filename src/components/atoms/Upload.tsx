import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BorderColors } from '~colors';
import { ControlRemoveButton } from '~components/molecules';

interface UploadProps {
  id: string;
  onFileUpload: (f: File) => void;
}

const HiddenInput = styled.input`
  display: none;
`

const UploadZone = styled.div<{ $borderColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  border: 2px solid ${(props) => props.$borderColor};
  border-radius: 4px;
  transition: 0.2s;

  a {
    text-decoration: underline;
    cursor: pointer;
  }

`

const Upload = ({ id, onFileUpload }: UploadProps) => {
  const [drag, setDrag] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('');
  const input = React.useRef<HTMLInputElement>();

  const getBorderColor = () => {
    if (fileName) return BorderColors.ACTIVE;
    return drag ? BorderColors.HOVER : BorderColors.DEFAULT;
  }

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDrag(true);
    } else if (e.type === 'dragleave') {
      setDrag(false);
    }
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);

    // Bail out if files invalid;
    if (!e.dataTransfer || !e.dataTransfer!.files || !e.dataTransfer!.files[0]) return;
    onFileUpload(e.dataTransfer!.files[0]);
  };

  const handleTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    input.current!.click();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target || !e.target!.files || !e.target!.files[0]) return;
    onFileUpload(e.target!.files[0]);
  }

  return (
    <UploadZone 
      $borderColor={getBorderColor()} 
      id={id}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}>

      {
        fileName 
          ? <p>{fileName}</p>
          : <p>Drag and drop <br/>or <a onClick={handleTextClick}>click to upload</a></p>
      }
      
      <HiddenInput 
        type={'file'} 
        multiple={false} 
        ref={input} 
        accept={'.csv'}
        onChange={handleInputChange}/>
    </UploadZone>
  )
}

export default Upload;