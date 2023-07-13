import {ChangeEvent} from 'react';
import Form from 'react-bootstrap/Form';

export default function Description({view, setView, placeholder,descriptionValue, setDescriptionValue} : {
    view : boolean,
    setView: React.Dispatch<React.SetStateAction<boolean>>,
    placeholder : string,
    descriptionValue: string,
    setDescriptionValue: React.Dispatch<React.SetStateAction<string>>
}) {
    
  
    const handleDescription = (event : ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        const value = event.currentTarget.value;
        setDescriptionValue(value);
        setView(view)
    };
    return <>
    <h4 className ={!view? "p-3 mb-2 bg-secondary-subtle text-emphasis-secondary":""}>
                    Observações
                </h4>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onSubmit={handleDescription}>
        <Form.Control as="textarea"
            placeholder={`Ex: Tirar ${placeholder}`}
            value={descriptionValue}
            onChange={ ({target}) => setDescriptionValue(target.value)}
            rows={3}/>
            <div  className="d-flex justify-content-end weight-400"><span>{descriptionValue.length}/200</span></div>
    </Form.Group>
    </>
}
