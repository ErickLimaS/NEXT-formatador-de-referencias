import * as C from './styles'
import { TextInput, Tooltip, Grid, Input } from '@mantine/core';
import { ChevronDownIcon, InfoCircledIcon } from '@modulz/radix-icons';
import { ChangeEvent } from 'react';
import { AuxAuthor } from './auxAuthor';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCurrentStep,
    setRefType1,
    setRefType2,
    setNameAuthor1,
    setSurAuthor1,
    setNameAuthor2,
    setSurAuthor2,
    setNameAuthor3,
    setSurAuthor3,
    setNameAuthor4,
    setSurAuthor4,
    setNameAuthor5,
    setSurAuthor5,
    setNameAuthor6,
    setSurAuthor6,
    setEtAlCheckbox,
    setTitle,
    setSubtitle,
    setUrl,
    setLocal,
    setDayAcess,
    setMonthAcess,
    setYearAcess,
    setDayPublic,
    setMonthPublic,
    setYearPublic,
    setPlacePublic,
    setPublishingComp,
    setNoDate,
    setEdition,
    setRadioCheck,
    setCompanyName,
    setResponsableBlog,
    setBlogTitle,
    setNamePodcastEpisode,
    setNamePodcast,
    setPodcastAnnouncer,
    setUserSocialMedia,
    setDisplayNameUser,
    setSocialMediaMensage,
    setRemetenteName,
    setEmailSubject,
    setDestinatario,
    setPaginationBook,
    setEditionBook,
    setDoiCheckbox,
    setDurationVideo,
    setUniDegreed,
    setUniversity,
    setNameGuest,
    setMagazine,
    setNumberMagaz,
    setAuxNewAuthor
} from '../redux/FormContext'


// show the inputs depending on the type of refer

export const RefInputs = () => {
    const dispatch = useDispatch();
    const {
        auxNewAuthor,
        refType1,
        refType2,
        nameAuthor1,
        surAuthor1,
        nameAuthor2,
        surAuthor2,
        nameAuthor3,
        surAuthor3,
        nameAuthor4,
        surAuthor4,
        nameAuthor5,
        surAuthor5,
        nameAuthor6,
        surAuthor6,
        companyName,
        responsableBlog,
        blogTitle,
        namePodcastEpisode,
        namePodcast,
        podcastAnnouncer,
        userSocialMedia,
        displayNameUser,
        socialMediaMensage,
        remetenteName,
        emailSubject,
        destinatario,
        paginationBook,
        editionBook,
        durationVideo,
        uniDegreed,
        university,
        nameGuest,
        magazine,
        numberMagaz,
        doiCheckbox,
        etAlCheckbox,
        title,
        subtitle,
        url,
        local,
        dayAcess,
        monthAcess,
        yearAcess,
        dayPublic,
        monthPublic,
        yearPublic,
        placePublic,
        publishingComp,
        noDate,
        edition,
        radioCheck } = useSelector((state: any) => state.allData)

    let auxRef = refType1;

    if (refType1 !== '11') {
        auxRef = refType2;
    }

    let inputHtml: any;

    // REF 11 - site
    if (auxRef === '11') {

        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                e.target.value
            ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                e.target.value
            ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                e.target.value
            ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                e.target.value
            ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                e.target.value
            ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                e.target.value
            ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                e.target.value
            ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                e.target.value
            ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                e.target.value
            ));
        }

        const handleAuthorRadioGroup1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setRadioCheck(
                    e.target.value
                ))
        }

        const handleAuthorRadioGroup2 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setRadioCheck(
                    e.target.value
                ))
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <div className='radioCheck'>
                    <h2>Quem Escreveu essa Referência?</h2>
                    <div>
                        <label htmlFor="autor">
                            Autor(a) / Editor(a)
                            <input type="radio" name="autor" id="autor" onChange={handleAuthorRadioGroup1} value='1' />
                        </label>
                        <label htmlFor="organizacao">
                            Organização
                            <input type="radio" name="autor" id="organizacao" onChange={handleAuthorRadioGroup2} value='2' />
                        </label>
                    </div>
                </div>

                <hr />


                <AuxAuthor />

                <hr />

                <TextInput label="Título da Matéria" description="Titulo da Matéria. Geralmente o nome com grande destaque na página." type='text' placeholder='Exemplo do Título: Clarice Lispector: Vida e Obra da Escritora'
                    onChange={handleTitle} required />

                <hr />

                <TextInput label="Subtítulo da Matéria" description="Geralmente a segunda frase em destaques, logo abaixo ao título." type='text' placeholder='Ex: Saiba a história da autora enigmática que completaria 100 anos em 2020'
                    onChange={handleSubtitle} />

                <hr />

                <TextInput label="URL da Página da Matéria" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} required />

                <hr />

                <TextInput label="Local da de Publicação da Matéria" description="Escreva a cidade onde a matéria foi publicada. Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não sabe, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização da Matéria" description="O dia que você encontrou a matéria." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização da Matéria
                            <small>O mês que você encontrou a matéria.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização da Matéria" description="O ano que você encontrou a matéria." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Matéria Publicada" description="Pode não ser possível saber o dia." type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação da Matéria
                            <small>O mês que a matéria foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    // REF 12 - blog
    if (auxRef === '12') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleResponsableBlog = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setResponsableBlog(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }
        const handleBlogTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setBlogTitle(
                    e.target.value
                ))
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>


                <AuxAuthor />

                <hr />

                <TextInput label="Título da Matéria" description="Titulo da Matéria. Geralmente o nome com grande destaque na página." type='text' placeholder='Exemplo do Título: Clarice Lispector: Vida e Obra da Escritora'
                    onChange={handleTitle} required />

                <hr />

                <TextInput label="Responsavel pelo Blog" description="Geralmente é quem cuida de manter o blog ativo. Ex: Responsavel do site do Enem é a Secretaria da Educação." type='text' placeholder='Ex: Secretaria da Educação.'
                    onChange={handleResponsableBlog} required />

                <hr />

                <TextInput label="Título da Blog" description="Titulo do Blog. Costuma ser o nome do própio site. " type='text' placeholder='Ex: Wikipedia'
                    onChange={handleBlogTitle} required />

                <hr />

                <TextInput label="URL da Página da Matéria" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} required />

                <hr />

                <TextInput label="Local da Publicação da Matéria" description="Qual a cidade e o estado de onde essa matéria foi publicada? Se não souber, deixe em branco." type='text' placeholder='Ex: Brasília - DF' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização da Matéria" description="O dia que você encontrou a matéria." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização da Matéria
                            <small>O mês que você encontrou a matéria.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização da Matéria" description="O ano que você encontrou a matéria." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Matéria Publicada" description="Dia da Matéria publicada. " type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação da Matéria
                            <small>O mês que a matéria foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação da Matéria" description="Ano em que a matéria foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 13 - PODCAST
    if (auxRef === '13') {

        // INFO

        //Handles
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }

        const handleNamePodcastEpisode = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNamePodcastEpisode(
                    e.target.value
                ))
        }
        const handleNamePodcast = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNamePodcast(
                    e.target.value
                ))
        }
        const handlePodcastAnnouncer = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPodcastAnnouncer(
                    e.target.value
                ))
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Podcast" description="O nome principal do podcast." type='text' placeholder='Ex: NerdCast, Inteligência ltda. ou Flow' onChange={handleNamePodcast} required />

                <hr />

                <TextInput label="Nome do Podcast e do Episódio" description="Nome do Podcast junto com o nome e identificação do Episódio." type='text' placeholder='Ex: NerdCast #689: O jogo mental do Futebol Americano' onChange={handleNamePodcastEpisode} required />

                <hr />

                <TextInput label="Nome dos(as) Apresentadores(as)" description="Nome do apresentador ou participantes do podcast" type='text' placeholder='Ex: Rogério Vilela' onChange={handlePodcastAnnouncer} required />

                <hr />

                <div className='checkboxEtAl'>
                    <h1>Usar "Et al.?</h1>
                    <small>"Et al." serve para indicar a existéncia de mais de 6 autores da sua referência.</small>
                    <div>
                        <input type="checkbox" id="etal" name="etal" onChange={handleEtalCheckbox}></input>
                        <label htmlFor="etal">Marque a caixa ao lado para usar "Et al."</label>
                    </div>
                </div>

                <hr />

                <TextInput label="URL da Página do Podcast" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização" description="O dia que você encontrou." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização
                            <small>O mês que você encontrou.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização" description="O ano que você encontrou." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação" description="Dia em que foi postado." type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês que em que foi postado.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi postado." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 14 - Redes Sociais
    if (auxRef === '14') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }
        const handleUserSocialMedia = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUserSocialMedia(
                    e.target.value
                ))
        }
        const handleDisplayNameUser = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDisplayNameUser(
                    e.target.value
                ))
        }
        const handleSocialMediaMensage = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSocialMediaMensage(
                    e.target.value
                ))
        }
        const handleUserSocial = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUserSocialMedia(
                    e.target.value
                ))
        }

        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Perfil do Usuário" description="Nome Principal mostrado pelo perfil de quem escreveu a mensagem." type='text' placeholder='Ex: USP - Universidade de São Paulo' onChange={handleDisplayNameUser} required />

                <hr />

                <TextInput label="Identificação do Usuário" description="Identificação do perfil em si. Ex no Twitter: @usponline" type='text' placeholder='Ex: @usponline'
                    onChange={handleUserSocial} />

                <hr />

                <TextInput label="Texto sendo Referênciada" description="O texto usado como base para a sua referência. Atenção! Não precisa botar o texto/mensagem inteira. " type='text' placeholder='Ex: Um grupo de pacientes com HIV foi acompanhado em estudo no Hospital das Clínicas da USP para identificar o quão vulneráveis'
                    onChange={handleSocialMediaMensage} required />

                <hr />

                <TextInput label="Local da Publicação" description="Qual a cidade e o estado de onde esse post foi feito? Se não souber, deixe em branco." type='text' placeholder='Ex: Brasília - DF' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <TextInput label="URL da Página do Post" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização" description="O dia que você encontrou a referência." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização
                            <small>O mês que você encontrou a referência.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização" description="O ano que você encontrou a referência." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação" description="Dia da publicação. " type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês em que foi postado.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi postado." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 15 - email
    if (auxRef === '15') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }
        const handleRemetenteName = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setRemetenteName(
                    e.target.value
                ));
        }
        const handleEmailSubject = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setEmailSubject(
                    e.target.value
                ));
        }
        const handleDestinatario = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDestinatario(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Remetente" description="Nome de quem enviou o email. Geralmente, o remente nesse caso é quem está fazendo a referência." type='text' placeholder='Ex: Jõao Tavares da Silva' onChange={handleRemetenteName} required />

                <hr />

                <TextInput label="Quem é o Destinatário" description="Nome de quem deveria receber o Email" type='text' placeholder='Ex: Banco Nacional de Espanha'
                    onChange={handleDestinatario} required />

                <hr />

                <TextInput label="Assunto do Email" description="Assunto sobre o que se espera ser falado no Email enviado." type='text' placeholder='Ex: Falha no Sistema de Verificação de Usuário do Site.' onChange={handleEmailSubject} required />

                <hr />

                <TextInput label="Local do Envio do Email" description="Escreva a cidade de onde o email foi enviado. Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não souber, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia do Envio do Email" description="Dia do Envio do Email" type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês do Envio do Email
                            <small>O mês que o email foi feito e enviado.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano do Envio do Email" description="Ano em que o email foi escrito e enviado." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 16 - wikipedia
    if (auxRef === '16') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa seção. Se for uma organização quem escreveu, bote o nome aqui.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Título do Assunto" description="Título do assunto pesquisado na Wikipédia." type='text' rightSection={AuthorFirstInfoCircle} placeholder='Ex: Planeta Terra' onChange={handleTitle} required />

                <hr />

                <TextInput label="URL da Página da Matéria" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com https://www e terminando com .com.br" type='text' placeholder='Ex: https://pt.wikipedia.org/wiki/Terra' onChange={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização da Matéria" description="O dia que você encontrou a matéria." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização da Matéria
                            <small>O mês que você encontrou a matéria.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização da Matéria" description="O ano que você encontrou a matéria." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 21 - livro
    else if (auxRef === '21') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }

        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }
        const handlePublishingComp = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPublishingComp(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleEditionBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setEditionBook(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="Título do Livro" description="Titulo do Livro. Geralmente é o nome com grande destaque na capa." type='text' placeholder='Exemplo: A Origem das Espécies' onChange={handleTitle} required />

                <hr />

                <TextInput label="Edição do Livro" description="Edição do livro da referência. Se encontra na capa ou na contracapa do livro. Atenção: Use só números!" type='text' placeholder='Escreva apenas o Número. Ex: 3'
                    onChange={handleEditionBook} required />

                <hr />

                <TextInput label="Local da Publicação do Livro" description="Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não sabe, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <TextInput label="Editora do Livro" description="Escreva o nome da editora que publicou o livro." type='text' placeholder='Ex: Bloomsbury Publishing' onChange={handlePublishingComp} required />

                <hr />

                <TextInput label="Paginação" description="Qual as páginas que você está referenciando. Atenção: Use só números!" type='text' placeholder='Escreva somente Números. Ex: 67 - 71' onChange={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>


                    <Grid.Col span={12}>
                        <TextInput label="Ano de Publicação do Livro" description="Ano em que o livro foi escrito, editado, etc." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 22
    else if (auxRef === '22') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles

        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }
        const handlePublishingComp = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPublishingComp(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleEditionBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setEdition(
                    e.target.value
                ));
        }
        const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            if (etAlCheckbox === 'et al.') {
                dispatch(
                    setEtAlCheckbox(
                        ''
                    ))
            } else {
                dispatch(
                    setEtAlCheckbox(
                        'et al.'
                    ))
            }
        }

        const handleDoiCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDoiCheckbox(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Título do Livro" description="Titulo do Livro. Geralmente é o nome com grande destaque na capa." type='text' placeholder='Exemplo: A Origem das Espécies' onChange={handleTitle} required />

                <hr />

                <TextInput label="Subtítulo do Livro" description="Subtítulo do Livro. Geralmente é uma frase logo após o título com grande destaque na capa." type='text' placeholder='Caso não tenha, deixe aqui em branco.' onChange={handleSubtitle} />

                <hr />

                <AuxAuthor />

                <hr />

                <TextInput label="Edição do Livro" description="Edição do livro da referência. Se encontra na capa ou na contracapa do livro. Atenção: Use só números!" type='text' placeholder='Escreva apenas o Número. Ex: 3'
                    onChange={handleEditionBook} required />

                <hr />

                <TextInput label="Local da Publicação do Livro" description="Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não sabe, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <TextInput label="Editora do Livro" description="Escreva o nome da editora que publicou o livro." type='text' placeholder='Ex: Bloomsbury Publishing' onChange={handlePublishingComp} required />

                <hr />

                <TextInput label="DOI do Ebook" description="DOI é um código único para a identificação de ebooks e outras obras digitais. (Se não souber, deixe em branco.)" type='text' placeholder='Escreva: "DOI (identificacao DOI aqui) ou deixe em branco"' onChange={handleDoiCheckbox} />

                <hr />

                <TextInput label="URL do Local do Ebook" description="URL é o link da página da matéria. Fica no topo do seu navegador. Caso não tenha ou não saiba, deixe em branco." type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} required />

                <hr />

                <TextInput label="Paginação" description="Qual as páginas que você está referenciando? Atenção: Use só números!" type='text' placeholder='Escreva somente Números. Ex: 67 - 71' onChange={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>


                    <Grid.Col span={12}>
                        <TextInput label="Ano de Publicação" description="Ano em que o ebook foi escrito, redigido ou editado." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 31 - video
    else if (auxRef === '31') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleDurationVideo = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDurationVideo(
                    e.target.value
                ));
        }

        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Canal ou Site de onde o Vídeo Vem" description="O nome de destaque do site ou nome do canal do YouTube" type='text' placeholder='Ex: Manual do Mundo' onChange={handleNameAuthor1} required />

                <hr />

                <TextInput label="Título do Vídeo" description="Título que dá nome ao vídeo." type='text' placeholder='Ex: COMO O VIDRO É FEITO? Manual do Mundo' onChange={handleTitle} required />

                <hr />

                <TextInput label="Duração do Vídeo" description="Quantos minutos de duração tem o vídeo. Atenção: Escreva Apenas Números!" type='text' placeholder='Apenas Números. Ex: 11'
                    onChange={handleDurationVideo} required />

                <hr />

                <TextInput label="Local de onde o Vídeo foi Feito" description="Caso não souber, deixe em branco." type='text' placeholder='Ex: Campinas - SP' rightSection={LocalInfoCircle}
                    onChange={handleLocal} />

                <hr />

                <TextInput label="URL da Página do Vídeo" description="URL é o link da página do vídeo. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://www.youtube.com/watch?v=CCuR_KWjgUk' onChange={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização" description="O dia que você encontrou o material." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização
                            <small>O mês que você encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização" description="O ano que você encontrou o material." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    /*
    //REF 32 - filme
    else if (auxRef === '32') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa seção. Ex: Ana.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const AuthorSurInfoCircle = (
            <Tooltip label='Escreva o sobrenome nessa seção. Ex: Sousa.' position='top' placement="center" withArrow arrowSize={3}>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setNameAuthor1,
                e.target.value
            });
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({

                setSurAuthor1,
                e.target.value
            });
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setTitle,
                e.target.value
            });
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setSubtitle,
                e.target.value
            });
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setUrl,
                e.target.value
            });
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayAcess,
                e.target.value
            });
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthAcess,
                e.target.value
            });
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearAcess,
                e.target.value
            });
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayPublic,
                e.target.value
            });
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthPublic,
                e.target.value
            });
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearPublic,
                e.target.value
            });
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Autor(a) da Matéria" description="O primeiro nome do autor(a) vai nessa seção" type='text' rightSection={AuthorFirstInfoCircle} placeholder='Ex: Clara' onChange={handleNameAuthor1} />

                <hr />
                <TextInput label="Sobrenome do Autor(a) da Matéria" description="O primeiro nome do autor(a) vai nessa seção" type='text' rightSection={AuthorSurInfoCircle} placeholder='Ex: Paiva' onChange={handleSurAuthor1} />

                <hr />

                <TextInput label="Título da Matéria" description="Titulo da Matéria. Geralmente o nome com grande destaque na página." type='text' placeholder='Exemplo do Título: Clarice Lispector: Vida e Obra da Escritora'
                    onChange={handleTitle} />

                <hr />

                <TextInput label="Subtítulo da Matéria" description="Geralmente a segunda frase em destaques, logo abaixo ao título." type='text' placeholder='Ex: Saiba a história da autora enigmática que completaria 100 anos em 2020'
                    onChange={handleSubtitle} />

                <hr />

                <TextInput label="URL da Página da Matéria" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização" description="O dia que você encontrou o material." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização
                            <small>O mês que você encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização" description="O ano que você encontrou o material." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação" description="Pode não ser possível saber o dia. Caso seja essa sua situação, apenas deixe em branco. " type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPublic}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }
    */

    /*
    //REF 33 - musica
    else if (auxRef === '33') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa seção. Ex: Ana.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const AuthorSurInfoCircle = (
            <Tooltip label='Escreva o sobrenome nessa seção. Ex: Sousa.' position='top' placement="center" withArrow arrowSize={3}>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
        const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setNameAuthor1,
                e.target.value
            });
        }
        const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({

                setSurAuthor1,
                e.target.value
            });
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setTitle,
                e.target.value
            });
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setSubtitle,
                e.target.value
            });
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setUrl,
                e.target.value
            });
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayAcess,
                e.target.value
            });
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthAcess,
                e.target.value
            });
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearAcess,
                e.target.value
            });
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setDayPublic,
                e.target.value
            });
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                setMonthPublic,
                e.target.value
            });
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                setYearPublic,
                e.target.value
            });
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Nome do Autor(a) da Matéria" description="O primeiro nome do autor(a) vai nessa seção" type='text' rightSection={AuthorFirstInfoCircle} placeholder='Ex: Clara' onChange={handleNameAuthor1} />

                <hr />
                <TextInput label="Sobrenome do Autor(a) da Matéria" description="O primeiro nome do autor(a) vai nessa seção" type='text' rightSection={AuthorSurInfoCircle} placeholder='Ex: Paiva' onChange={handleSurAuthor1} />

                <hr />

                <TextInput label="Título da Matéria" description="Titulo da Matéria. Geralmente o nome com grande destaque na página." type='text' placeholder='Exemplo do Título: Clarice Lispector: Vida e Obra da Escritora'
                    onChange={handleTitle} />

                <hr />

                <TextInput label="Subtítulo da Matéria" description="Geralmente a segunda frase em destaques, logo abaixo ao título." type='text' placeholder='Ex: Saiba a história da autora enigmática que completaria 100 anos em 2020'
                    onChange={handleSubtitle} />

                <hr />

                <TextInput label="URL da Página da Matéria" description="URL é o link da página da matéria. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização" description="O dia que você encontrou o material." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização
                            <small>O mês que você encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização" description="O ano que você encontrou o material." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicacão" description="Dia da publicação. " type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }
    */

    //REF 41 - entrevista
    else if (auxRef === '41') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setSubtitle(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome do(a) autor(a) da reportagem" description="O primeiro nome do(a) autor(a) da reportagem vai nessa seção" type='text' placeholder='Ex: Clara' onChange={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome do(a) autor(a) da reportagem" description="O sobrenome do(a) autor(a) da reportagem vai nessa seção" type='text' placeholder='Ex: Paiva' onChange={handleSurAuthor1} required />

                <hr />

                <TextInput label="Título da Reportagem" description="Titulo da Reportagem. Geralmente o nome que aborda o assunto da reportagem." type='text' placeholder='Ex: Sem cura e com tratamento caro, autismo é desafio para pais e instituições sociais'
                    onChange={handleTitle} required />

                <hr />

                <TextInput label="Nome do Veiculo onde passou a Reportagem" description="Nome da Empresa ou Canal onde a reportagem foi publicada." type='text' placeholder='Ex: Globo, GloboPlay, SBT, etc.'
                    onChange={handleMagazine} required />

                <hr />

                <TextInput label="Cidade onde a Entrevista foi feita" description="Escreva a cidade onde a entrevista foi publicada. Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não souber, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} required />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação da Reportagem" description="Dia da publicação." type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação da Reportagem
                            <small>O mês que a reportagem foi feita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação da Reportagem" description="Ano em que a reportagem foi escrita, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }


    //REF 42 - entrevista revista
    else if (auxRef === '42') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
                ));
        };
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ))
        }
        const handleNumberMagaz = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNumberMagaz(
                    e.target.value
                ))
        }
        inputHtml = (
            <C.Container>

                <TextInput label="Primeiro nome de quem foi Entrevistado(a)" description="O primeiro nome do Entrevistado(a) vai nessa seção" type='text' placeholder='Ex: Clara' onChange={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome de quem foi Entrevistado(a)" description="O sobrenome do Entrevistado(a) vai nessa seção" type='text' placeholder='Ex: Paiva' onChange={handleSurAuthor1} required />

                <hr />

                <TextInput label="Título da Entrevista" description="Titulo da Entrevista. Geralmente o nome que aborda o assunto da entrevista." type='text' placeholder='Exemplo do Título: Vida e Obra da Clarice Lispector'
                    onChange={handleTitle} required />

                <hr />

                <TextInput label="Primeiro nome do Entrevistador(a)" description="O primeiro nome do Entrevistado(a) vai nessa seção" type='text' placeholder='Ex: João' onChange={handleNameAuthor2} required />

                <hr />

                <TextInput label="Sobrenome do Entrevistador(a)" description="O sobrenome do Entrevistado(a) vai nessa seção" type='text' placeholder='Ex: Ferraz Silveira' onChange={handleSurAuthor2} required />

                <hr />

                <TextInput label="Nome da Revista ou Jornal" description="Nome da Revista/Jornal onde a entrevista foi publicada." type='text' placeholder='Ex: Veja, O Estado de São Paulo'
                    onChange={handleMagazine} required />

                <hr />

                <TextInput label="Lugar onde a Entrevista foi publicada" description="Escreva a cidade onde a entrevista foi publicada. Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não sabe, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <TextInput label="Número do Exemplar da Revista" description="Número do Exemplar da Revista onde a entrevista foi publicada. Atenção: Apenas Números." type='text' placeholder='Atenção: Apenas Números! Ex: 1721' onChange={handleNumberMagaz} />

                <hr />

                <TextInput label="Intervalo entre Páginas da Entrevista" description="Escreva de qual página começa e qual termina a entrevista. Atenção: Apenas Números." type='text' placeholder='Atenção: Apenas Números! Ex: 31 - 34' onChange={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação" description="Dia da publicação. " type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 43 - artigo de revista
    else if (auxRef === '43') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }

        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ))
        }
        const handleNumberMagaz = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setNumberMagaz(
                    e.target.value
                ))
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome de quem fez o Artigo" description="O primeiro nome de quem fez o artigo vai nessa seção" type='text' placeholder='Ex: Clara' onChange={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome de quem fez o Artigo" description="O sobrenome de quem fez o artigo vai nessa seção" type='text' placeholder='Ex: Paiva' onChange={handleSurAuthor1} required />

                <hr />

                <TextInput label="Título do Artigo" description="Titulo do Artigo. Geralmente o nome que aborda o assunto do artigo." type='text' placeholder='Ex: A reinvenção de Hollywood: cinema americano e produção de subjetividade nas sociedades de controle' onChange={handleTitle} required />

                <hr />

                <TextInput label="Nome do Meio Veiculador" description="Nome de onde o artigo foi publicada." type='text' placeholder='Ex: Veja, Estadão, etc.'
                    onChange={handleMagazine} required />

                <hr />

                <TextInput label="Lugar de onde o artigo foi publicada" description="Escreva a cidade onde a entrevista foi publicada. Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não sabe, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <TextInput label="Número do Exemplar da Revista/jornal" description="Número do Exemplar da Revista ou Jornal onde o artigo foi publicado. Atenção: Apenas Números." type='text' placeholder='Atenção: Apenas Números! Ex: 1721' onChange={handleNumberMagaz} required />

                <hr />

                <TextInput label="Intervalo entre Páginas do Artigo" description="Escreva de qual página começa e qual termina o artigo. Atenção: Apenas Números." type='text' placeholder='Atenção: Apenas Números! Ex: 31 - 34' onChange={handlePaginationBook} required />

                <hr />

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação" description="Dia da publicação." type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 44 - artigo de internet
    else if (auxRef === '44') {

        // INFO
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleDayPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayPublic(
                    e.target.value
                ));
        }
        const handleMonthPubli = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthPublic(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handleLocal = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setLocal(
                    e.target.value
                ))
        }
        const handleMagazine = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setMagazine(
                    e.target.value
                ))
        }

        inputHtml = (
            <C.Container>

                <TextInput label="Nome de quem fez o Artigo" description="O primeiro nome de quem fez o artigo vai nessa seção" type='text' placeholder='Ex: Clara' onChange={handleNameAuthor1} required />

                <hr />

                <TextInput label="Sobrenome de quem fez o Artigo" description="O sobrenome de quem fez o artigo vai nessa seção" type='text' placeholder='Ex: Paiva' onChange={handleSurAuthor1} required />

                <hr />

                <TextInput label="Título do Artigo" description="Titulo do Artigo. Geralmente o nome que aborda o assunto do artigo." type='text' placeholder='Ex: A reinvenção de Hollywood: cinema americano e produção de subjetividade nas sociedades de controle' onChange={handleTitle} required />

                <hr />

                <TextInput label="Nome do Meio Veiculador" description="Nome do site onde o artigo foi publicada." type='text' placeholder='Ex: G1, R7, etc.'
                    onChange={handleMagazine} required />

                <hr />

                <TextInput label="Lugar de onde o artigo foi publicada" description="Escreva a cidade onde a entrevista foi publicada. Caso não souber, deixe o espaço em branco." type='text' placeholder='Ex: São Paulo. (Se não sabe, deixe em branco.)' rightSection={LocalInfoCircle} onChange={handleLocal} />

                <hr />

                <TextInput label="URL do Site do Artigo" description="URL é o link da página da tese. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='http://www.contemporanea.uerj.br/pdf/ed_03/contemporanea_n03_02_butcher.pdf' onChange={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização" description="O dia que você encontrou o material." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização
                            <small>O mês que você encontrou o material.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização" description="O ano que você encontrou o material." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>
                    <Grid.Col span={4}>
                        <TextInput label="Dia da Publicação" description="Dia da publicação." type='text' placeholder='12' onChange={handleDayPubli} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Publicação
                            <small>O mês que foi feita, redigita, editada ou criada.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthPubli}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano de Publicação" description="Ano em que foi escrita, redigida, editada ou postada." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 51 - tese
    else if (auxRef === '51') {

        // INFO

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleUniDegreed = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniDegreed(
                    e.target.value
                ));
        }
        const handleUniversity = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniversity(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>


                <AuxAuthor />

                <hr />

                <TextInput label="Título da Tese" description="Titulo da Tese. O assunto principal da tese." type='text' placeholder='Ex: Possibilidades de Automação com IoT' onChange={handleTitle} required />

                <hr />

                <TextInput label="Total de Páginas da Tese" description="Número do total de páginas da tese. Atenção: Apenas Números!" type='text' placeholder='Atenção: Apenas Números. Ex: 83' onChange={handlePaginationBook} required />

                <hr />

                <TextInput label="Grau de quem fez a Tese" description="Grau em que a pessoa que fez a tese estavá." type='text' placeholder='Ex: Mestrado em Engenharia de Análise de Dados' onChange={handleUniDegreed} required />

                <hr />

                <TextInput label="Instituição a que a Tese foi Apresentada" description="Nome da instituição que recebeu a tese." type='text' placeholder='Ex: Universidade de São Paulo' onChange={handleUniversity} required />

                <hr />

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Entrega da Tese" description="Ano em que a tese foi entregue." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 52 - dissertacao
    else if (auxRef === '52') {

        // INFO
        const AuthorFirstInfoCircle = (
            <Tooltip label='Escreva o primeiro nome nessa seção. Ex: Ana.' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const AuthorSurInfoCircle = (
            <Tooltip label='Escreva o sobrenome nessa seção. Ex: Sousa.' position='top' placement="center" withArrow arrowSize={3}>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );
        const LocalInfoCircle = (
            <Tooltip label='Se não souber, deixe em branco. Caso tenha uma ideia de onde é mas não exatamente, escreva entre colchetes. EX: [Rio de Janeiro].' position='top' placement="center" withArrow>
                <InfoCircledIcon color='black' />
            </Tooltip>
        );

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleUniDegreed = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniDegreed(
                    e.target.value
                ));
        }
        const handleUniversity = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniversity(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="Título da Tese" description="Titulo da Tese. O assunto principal da tese." type='text' placeholder='Ex: Possibilidades de Automação com IoT'
                    onChange={handleTitle} required />

                <hr />

                <TextInput label="Total de Páginas da Tese" description="Número do total de páginas da tese. Atenção: Apenas Números!" type='text' placeholder='Atenção: Apenas Números. Ex: 83' onChange={handlePaginationBook} required />

                <hr />

                <TextInput label="Grau e curso de quem fez a Tese" description="Grau em que a pessoa que fez a tese estavá." type='text' placeholder='Ex: Mestrado em Engenharia de Análise de Dados' onChange={handleUniDegreed} required />

                <hr />

                <TextInput label="Instituição a que a Tese foi Apresentada" description="Nome da instituição que recebeu a tese." type='text' placeholder='Ex: Universidade de São Paulo' onChange={handleUniversity} required />

                <hr />

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Entrega da Tese" description="Ano em que a tese foi entregue." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    //REF 53 - tese internet
    else if (auxRef === '53') {

        // INFO

        //Handles
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
        const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setTitle(
                    e.target.value
                ));
        }
        const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUrl(
                    e.target.value
                ));
        }

        const handleDayVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setDayAcess(
                    e.target.value
                ));
        }
        const handleMonthVisualization = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                setMonthAcess(
                    e.target.value
                ));
        }
        const handleYearVisualization = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearAcess(
                    e.target.value
                ));
        }
        const handleYearPubli = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setYearPublic(
                    e.target.value
                ));
        }
        const handlePaginationBook = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setPaginationBook(
                    e.target.value
                ));
        }
        const handleUniDegreed = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniDegreed(
                    e.target.value
                ));
        }
        const handleUniversity = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                setUniversity(
                    e.target.value
                ));
        }

        inputHtml = (
            <C.Container>

                <AuxAuthor />

                <hr />

                <TextInput label="Título da Tese" description="Titulo da Tese. O assunto principal da tese." type='text' placeholder='Ex: Possibilidades de Automação com IoT' onChange={handleTitle} required />

                <hr />

                <TextInput label="Total de Páginas da Tese" description="Número do total de páginas da tese. Atenção: Apenas Números!" type='text' placeholder='Atenção: Apenas Números. Ex: 83' onChange={handlePaginationBook} required />

                <hr />

                <TextInput label="Grau e curso de quem fez a Tese" description="Grau em que a pessoa que fez a tese estavá." type='text' placeholder='Ex: Mestrado em Engenharia de Análise de Dados' onChange={handleUniDegreed} required />

                <hr />

                <TextInput label="Instituição a que a Tese foi Apresentada" description="Nome da instituição que recebeu a tese." type='text' placeholder='Ex: Universidade de São Paulo' onChange={handleUniversity} required />

                <hr />

                <TextInput label="URL do Site da Tese" description="URL é o link da página da tese. Fica no topo do seu navegador, começando com www e terminando com .com.br" type='text' placeholder='Ex: https://guiadoestudante.abril.com.br/estudo/decifre-clarice-lispector-vida-obras/' onChange={handleUrl} required />

                <hr />

                <Grid className='dateVisualization'>

                    <Grid.Col span={4}>
                        <TextInput label="Dia da Visualização da Tese" description="O dia que você encontrou a tese." type='text' placeholder='25' onChange={handleDayVisualization} />
                    </Grid.Col>

                    <Grid.Col span={4} className="mainDivSelect">
                        <label className="divSelect">Mês da Visualização da Tese
                            <small>O mês que você encontrou a tese.</small>
                            <Input component="select" rightSection={<ChevronDownIcon />} onChange={handleMonthVisualization}>
                                <option value="" disabled selected>Mês</option>
                                <option value="jan">Janeiro</option>
                                <option value="fev">Fevereiro</option>
                                <option value="mar">Março</option>
                                <option value="abr">Abril</option>
                                <option value="maio">Maio</option>
                                <option value="jun">Junho</option>
                                <option value="jul">Julho</option>
                                <option value="ago">Agosto</option>
                                <option value="set">Setembro</option>
                                <option value="out">Outubro</option>
                                <option value="nov">Novembro</option>
                                <option value="dez">Dezembro</option>
                            </Input>
                        </label>
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <TextInput label="Ano da Visualização da Tese" description="O ano que você encontrou a tese." type='text' placeholder='2022' onChange={handleYearVisualization} />
                    </Grid.Col>
                </Grid>

                <Grid className='datePublic'>

                    <Grid.Col span={12}>
                        <TextInput label="Ano de Entrega da Tese" description="Ano em que a tese foi entregue." type='text' placeholder='2020' onChange={handleYearPubli} />
                    </Grid.Col>
                </Grid>

            </C.Container >
        );
    }

    return inputHtml;
}
