import * as C from '../pages/step3/styles'
import { useSelector } from 'react-redux';
import Link from 'next/link';

export const FormatedText = () => {
    const {
        auxNewAuthor,
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

    let upperSurName1 = surAuthor1.toUpperCase();
    let upperSurName2 = surAuthor2.toUpperCase();
    let upperSurName3 = surAuthor3.toUpperCase();
    let upperSurName4 = surAuthor4.toUpperCase();
    let upperSurName5 = surAuthor5.toUpperCase();
    let upperSurName6 = surAuthor6.toUpperCase();

    let formated: any; //stores formated text 

    //REF 11
    if (refType2 === '11') {

        if (radioCheck === '1') {
            if (etAlCheckbox !== '') { //checkbox checked
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                        <hr />

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) { // 0 equal to has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) { //has more than one author

                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {subtitle}. Disponível em: {url}. Publicado em: {dayPublic} {monthPublic}. {yearPublic}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
        else if (radioCheck === '2') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{companyName}. <b className='bold'>{title}</b>. {local}. {noDate}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 12 - blog
    else if (refType2 === '12') {

        if (radioCheck === '1') {
            if (etAlCheckbox !== '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {etAlCheckbox} {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. {title}. <span className='italic'>In</span>: {responsableBlog}. <b className='bold'>{blogTitle}</b>. {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 13 - Podcast
    else if (refType2 === '13') {

        if (radioCheck === '1') {
            if (etAlCheckbox !== '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{namePodcastEpisode}. [Locução de]: {podcastAnnouncer}. {etAlCheckbox} {placePublic}: {namePodcast}, {dayPublic} {monthPublic}. {yearPublic}. Podcast. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
            else {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{namePodcastEpisode}. [Locução de]: {podcastAnnouncer}. {placePublic}: {namePodcast}, {dayPublic} {monthPublic}. {yearPublic}. Podcast. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 14 - REDES S ** got inputs from radiocheck 2 to radiocheck1
    else if (refType2 === '14') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{displayNameUser}. <b className='bold'>{socialMediaMensage}</b> [...]. {local}. {dayPublic} {monthPublic}. {yearPublic}. {userSocialMedia}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 15 - email
    else if (refType2 === '15') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{remetenteName}. <b className='bold'>{emailSubject}</b>. Destinatários: {destinatario}. {local}, {dayPublic} {monthPublic}. {yearPublic}. 1 mensagem eletrônica.</p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 16 - wikipedia
    else if (refType2 === '16') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{title}. <span className='italic'>In</span>: WIKIPÉDIA: a enciclopédia livre. [São Francisco, CA: Fundação Wikimedia], 2017. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 21 - livro
    else if (refType2 === '21') {

        if (radioCheck === '1') {
            if (etAlCheckbox !== '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {editionBook}. ed. {local}: {publishingComp}, {yearPublic}. {paginationBook} p.</p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 22 - ebook
    else if (refType2 === '22') {

        if (radioCheck === '1') {
            if (etAlCheckbox !== '' && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (etAlCheckbox !== '' && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }

            else if (etAlCheckbox !== '' && doiCheckbox !== '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (etAlCheckbox !== '' && doiCheckbox !== '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0 && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0 && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }

            else if (auxNewAuthor === 1 && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1 && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1 && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }

            else if (auxNewAuthor === 2 && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2 && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2 && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }

            else if (auxNewAuthor === 3 && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3 && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3 && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }

            else if (auxNewAuthor === 4 && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4 && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4 && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }

            else if ((auxNewAuthor === 5 || auxNewAuthor > 5) && doiCheckbox === '0' && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if ((auxNewAuthor === 5 || auxNewAuthor > 5) && doiCheckbox === '0') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if ((auxNewAuthor === 5 || auxNewAuthor > 5) && subtitle === '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {subtitle}. {local}: {publishingComp}, {yearPublic}. <span className='italic'>E-book</span>. {paginationBook} p. {doiCheckbox}. Disponível em: {url}.</p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 31 - video
    else if (refType2 === '31') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{nameAuthor1}. <b className='bold'>{title}</b>. {local}, {yearPublic}. 1 vídeo ({durationVideo} min). Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}. </p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 41 - reportagem
    else if (refType2 === '41') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName1}, {nameAuthor1}. {title}. <b className='bold'>{magazine}</b>, {local}, {dayPublic} {monthPublic}. {yearPublic}.</p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 42 - entrevista revista
    else if (refType2 === '42') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName1}, {nameAuthor1}. {title}. [Entrevista concedida a] {nameAuthor2} {surAuthor2}. <b className='bold'>{magazine}</b>, {local}, n. {numberMagaz}, p. {paginationBook}, {dayPublic} {monthPublic}. {yearPublic}.</p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 43 - artigo revista
    else if (refType2 === '43') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName1}, {nameAuthor1}. {title}. <b className='bold'>{magazine}</b>, {local}, n. {numberMagaz}, p. {paginationBook}, {dayPublic} {monthPublic}. {yearPublic}.</p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 44 - artigo internet
    else if (refType2 === '44') {

        if (radioCheck === '1') {
            formated = (

                <C.Container>
                    <h1>Pronto! Sua Referência está Formatada!</h1>
                    <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                    <hr />

                    <div className='copyArea'>
                        <p className='test'>{upperSurName1}, {nameAuthor1}. {title}. <b className='bold'>{magazine}</b>, {local}, {dayPublic} {monthPublic}. {yearPublic}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}</p>
                    </div>

                </C.Container>
            )
        }
    }

    //REF 51 - Tese
    else if (refType2 === '51') {

        if (radioCheck === '1') {
            if (auxNewAuthor === 0 && etAlCheckbox !== '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 52 - Dissertacao
    else if (refType2 === '52') {

        if (radioCheck === '1') {
            if (auxNewAuthor === 0 && etAlCheckbox !== '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>


                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Dissertação. ({uniDegreed}) - {university}, {local}, {yearPublic}. </p>
                        </div>

                    </C.Container>
                )
            }
        }
    }

    //REF 53 - Tese na internet
    else if (refType2 === '53') {

        if (radioCheck === '1') {
            if (auxNewAuthor === 0 && etAlCheckbox !== '') {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <span className='italic'>{etAlCheckbox}</span> <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 0) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 1) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 2) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 3) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 4) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
            else if (auxNewAuthor === 5 || auxNewAuthor > 5) {
                formated = (

                    <C.Container>
                        <h1>Pronto! Sua Referência está Formatada!</h1>
                        <p>Copie o texto abaixo e cole a Referência no seu trabalho!</p>

                        <hr />

                        <div className='copyArea'>
                            <p className='test'>{upperSurName1}, {nameAuthor1}. {upperSurName2}, {nameAuthor2}. {upperSurName3}, {nameAuthor3}. {upperSurName4}, {nameAuthor4}. {upperSurName5}, {nameAuthor5}. {upperSurName6}, {nameAuthor6}. <b className='bold'>{title}</b>. {yearPublic}. {paginationBook} p. Tese. ({uniDegreed}) - {university}, {local}, {yearAcess}. Disponível em: {url}. Acesso em: {dayAcess} {monthAcess}. {yearAcess}.</p>
                        </div>

                    </C.Container>
                )
            }
        }

    }
    
    else {
        return (
            <div className='divWarning'>
                <h1 className='h1Warning'>Ops!</h1>
                <h2 className='h2Warning'>Como você veio parar aqui?</h2>
                <p className='pWarning'> Você precisa informar o tipo de referência primeiro! <b className='bWarning'>Aperte o botão abaixo e volte para o começo!</b></p>
                <Link href='/'>
                    <button className="backButtonWarning">Voltar ao Início</button>
                </Link>
            </div>
        )
    }

    return formated;
}