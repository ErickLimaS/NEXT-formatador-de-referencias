import { TextInput, Tooltip } from "@mantine/core";
import { InfoCircledIcon } from "@modulz/radix-icons";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNameAuthor6, setNameAuthor5, setNameAuthor4, setNameAuthor3, setNameAuthor2, setNameAuthor1, setSurAuthor6, setSurAuthor5, setSurAuthor4, setSurAuthor3, setSurAuthor2, setSurAuthor1 } from '../redux/FormContext'

export const Teste = () => {
    const dispatch = useDispatch();
    const { radioCheck, auxNewAuthor, etAlCheckbox, nameAuthor1, nameAuthor2, nameAuthor3, nameAuthor4, nameAuthor5, nameAuthor6, surAuthor1, surAuthor2, surAuthor3, surAuthor4, surAuthor5, surAuthor6, companyName  } = useSelector((state: any) => state.allData)

    //infoicon
    const AuthorFirstInfoCircle = (
        <Tooltip label='Escreva o primeiro nome nessa seção. Se for uma organização que escreveu, bote o nome aqui.' position='top' placement="center" withArrow>
            <InfoCircledIcon color='black' />
        </Tooltip>
    );
    const AuthorSurInfoCircle = (
        <Tooltip label='Escreva o sobrenome nessa seção. Ex: Sousa. Se for uma organização quem escreveu, deixe  esse espaço em branco.' position='top' placement="center" withArrow arrowSize={3}>
            <InfoCircledIcon color='black' />
        </Tooltip>
    );

    //handle
    const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor1(
                e.target.value
            ));
    }
    const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setSurAuthor1(
                e.target.value
            ));
    };
    const handleNameAuthor2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor2(
                e.target.value
            ));
    }
    const handleSurAuthor2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(

            setSurAuthor2(
                e.target.value
            )
        );
    };
    const handleNameAuthor3 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor3(
                e.target.value
            ));
    }
    const handleSurAuthor3 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(

            setSurAuthor3(
                e.target.value
            ));
    };
    const handleNameAuthor4 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor4(
                e.target.value
            ));
    }
    const handleSurAuthor4 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(

            setSurAuthor4(
                e.target.value
            ));
    };
    const handleNameAuthor5 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor5(
                e.target.value
            ));
    }
    const handleSurAuthor5 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(

            setSurAuthor5(
                e.target.value
            ));
    };
    const handleNameAuthor6 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor6(
                e.target.value
            ));
    }
    const handleSurAuthor6 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(

            setSurAuthor6(
                e.target.value
            ));
    };

    let newAuthor: any;
    newAuthor = '';

    if (auxNewAuthor === 1) {
        newAuthor = (
            <div>
                <hr />

                <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: João." type='text'
                    onBlur={handleNameAuthor1} placeholder={nameAuthor1}
                    rightSection={AuthorFirstInfoCircle} />

                <hr />

                <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor1} placeholder={surAuthor1} rightSection={AuthorSurInfoCircle} />
            </div>
        )
    }
    else if (auxNewAuthor === 2) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: João." type='text'
                        onBlur={handleNameAuthor2} placeholder={nameAuthor2}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor2} placeholder={surAuthor2} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Clara." type='text'
                        onBlur={handleNameAuthor3} placeholder={nameAuthor3}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor3} placeholder={surAuthor3} rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (auxNewAuthor === 3) {
        newAuthor = (
            <div>
                <div>
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: João." type='text'
                        onBlur={handleNameAuthor2} placeholder={nameAuthor2}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor2} placeholder={surAuthor2} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: Clara." type='text'
                        onBlur={handleNameAuthor3} placeholder={nameAuthor3}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor3} placeholder={surAuthor3} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Maria." type='text'
                        onBlur={handleNameAuthor4} placeholder={nameAuthor4}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor4} placeholder={surAuthor4} rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (auxNewAuthor === 4) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção Ex: João." type='text'
                        onBlur={handleNameAuthor2} placeholder={nameAuthor2}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor2} placeholder={surAuthor2} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: Clara." type='text'
                        onBlur={handleNameAuthor3} placeholder={nameAuthor3}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor3} placeholder={surAuthor3} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Maria." type='text'
                        onBlur={handleNameAuthor4} placeholder={nameAuthor4}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor4} placeholder={surAuthor4}  rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (auxNewAuthor === 5) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção Ex: João." type='text'
                        onBlur={handleNameAuthor2} placeholder={nameAuthor2}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor2} placeholder={surAuthor2} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: Clara." type='text'
                        onBlur={handleNameAuthor3} placeholder={nameAuthor3}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor3} placeholder={surAuthor3} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Maria." type='text'
                        onBlur={handleNameAuthor4} placeholder={nameAuthor4}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor4} placeholder={surAuthor4}  rightSection={AuthorSurInfoCircle} />
                </div>
                <div>
                    <TextInput required label="5° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Pedro." type='text'
                        onBlur={handleNameAuthor5} placeholder={nameAuthor5}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 5° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor5} placeholder={surAuthor5}  rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (auxNewAuthor !== 1 && auxNewAuthor !== 2 && auxNewAuthor !== 3 && auxNewAuthor !== 4 && auxNewAuthor !== 5 && auxNewAuthor !== 0) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção Ex: João." type='text'
                        onBlur={handleNameAuthor2} placeholder={nameAuthor2}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor2} placeholder={surAuthor2} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção. Ex: Clara." type='text'
                        onBlur={handleNameAuthor3} placeholder={nameAuthor3}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor3} placeholder={surAuthor3} rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Maria." type='text'
                        onBlur={handleNameAuthor4} placeholder={nameAuthor4}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor4} placeholder={surAuthor4}  rightSection={AuthorSurInfoCircle} />
                </div>
                <div>
                    <TextInput required label="5° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Pedro." type='text'
                        onBlur={handleNameAuthor5} placeholder={nameAuthor5}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 5° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor5} placeholder={surAuthor5}  rightSection={AuthorSurInfoCircle} />
                </div>
                <div>
                    <TextInput required label="6° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção. Ex: Jonathan." type='text'
                        onBlur={handleNameAuthor6} placeholder={nameAuthor6}
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 6° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção. Ex: Paiva." type='text' onBlur={handleSurAuthor6} placeholder={surAuthor6}  rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else {
        console.log('')
    }

    return newAuthor;
}