import * as C from './styles';
import { Button, Drawer, Group, Menu } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuSvg from '../../public/img/menu-svg.svg'
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
} from '../../redux/FormContext';
import Image from 'next/image';

export const Header = () => {
    const Logo = require('./logo.png')
    const [opened, setOpened] = useState(false);
    const dispatch = useDispatch();

    //svg menu
    const refreshToStep1 = () => {
        dispatch(
            setCurrentStep
                (0));
        dispatch(
            setSurAuthor1
                (''));
        dispatch(
            setNameAuthor1
                (''));
        dispatch(
            setSurAuthor2
                (''));
        dispatch(
            setNameAuthor2
                (''));
        dispatch(
            setSurAuthor3
                (''));
        dispatch(
            setNameAuthor3
                (''));
        dispatch(
            setSurAuthor4
                (''));
        dispatch(
            setNameAuthor4
                (''));
        dispatch(
            setSurAuthor5
                (''));
        dispatch(
            setNameAuthor5
                (''));
        dispatch(
            setSurAuthor6
                (''));
        dispatch(
            setNameAuthor6
                (''));
        dispatch(
            setEtAlCheckbox
                (''));
        dispatch(
            setTitle
                (''));
        dispatch(
            setSubtitle
                (''));
        dispatch(
            setUrl
                (''));
        dispatch(
            setLocal
                ('[S.I.]'));
        dispatch(
            setDayAcess
                (0));
        dispatch(
            setMonthAcess
                (''));
        dispatch(
            setYearAcess
                (0
                ));
        dispatch(
            setDayPublic
                (0));
        dispatch(
            setMonthPublic
                (''));
        dispatch(
            setYearPublic
                (0));
        dispatch(
            setPlacePublic
                ('[S.I.]')
        );
        dispatch(
            setPublishingComp
                ('[s.n.]'));
        dispatch(
            setNoDate
                ('s.d.'
                ));
        dispatch(
            setEdition
                (''));
        dispatch(
            setRadioCheck
                ('1'
                ));
        dispatch(
            setCompanyName
                (''));
        dispatch(
            setResponsableBlog
                (''));
        dispatch(
            setBlogTitle
                (''));
        dispatch(
            setNamePodcastEpisode
                (''));
        dispatch(
            setNamePodcast
                (''));
        dispatch(
            setPodcastAnnouncer
                (''));
        dispatch(
            setUserSocialMedia
                (''));
        dispatch(
            setDisplayNameUser
                (''));
        dispatch(
            setSocialMediaMensage
                (''));
        dispatch(
            setRemetenteName
                (''));
        dispatch(
            setEmailSubject
                (''));
        dispatch(
            setDestinatario
                (''));
        dispatch(
            setPaginationBook
                (''));
        dispatch(
            setEditionBook
                (''));
        dispatch(
            setDoiCheckbox
                ('0'
                ));
        dispatch(
            setDurationVideo
                (''));
        dispatch(
            setUniDegreed
                (''));
        dispatch(
            setUniversity
                (''));
        dispatch(
            setNameGuest
                (''));
        dispatch(
            setMagazine
                (''));
        dispatch(
            setNumberMagaz
                (''));
        dispatch(
            setAuxNewAuthor
                (0));

    };

    return (
        <C.Container>
            <div className='divHeaderName'>
                <div>
                    <a href="/" className='headerName' onClick={refreshToStep1}>
                        <Image src={Logo} alt="Logo do Site Referência em ABNT" className='imgLogo' width={40} height={40} />
                    </a>
                </div>
                <div>
                    <a href="/" className='headerName' onClick={refreshToStep1}>
                        Referência em ABNT
                    </a>
                </div>


            </div>

            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title=""
                padding="xl"
                size="xl"
                styles={{
                    root: { color: 'black' },
                    overlay: { color: 'red' },
                    drawer: { color: 'black', backgroundColor: '#d9d9ff', fontSize: '22px', span: { fontSize: '40px', marginBottom: '90px' }, ul: { padding: '0', margin: '60px 0' }, li: { listStyle: 'none', margin: '40px 0', borderBottom: '1px solid #000', width: 'auto' }, a: { textDecoration: 'none', color: '#000' } },
                    header: { color: 'black' },
                    title: { color: 'black' },
                    closeButton: { color: 'red' },
                }}
                closeButtonLabel="Fechar aba"
                aria-labelledby="drawer-titulo"
                aria-describedby="drawer-body"
            >
                <span className='spanMobileMenu' id='drawer-titulo'>Como Fazer...</span>
                <ul id='drawer-body'>
                    <li><a href='./aboutAbnt/referencias' target="_blank">... as Referências Bibliográficas</a></li>

                </ul>
            </Drawer>

            <Group position="center">
                <Button className='buttonMobile' onClick={() => setOpened(true)}>
                    <MenuSvg fill='#FFF' width={25} height={25} />
                </Button>
            </Group>

            <Menu className='menuDesktop' control={<Button>Como Fazer em ABNT ...</Button>} placement="center" gutter={8} withArrow size="lg">
                <Menu.Label>Como Fazer...</Menu.Label>
                <Menu.Item component='a' href='./aboutAbnt/referencias' target="_blank">... as Referências Bibliográficas</Menu.Item>

            </Menu>

        </C.Container>
    );
}