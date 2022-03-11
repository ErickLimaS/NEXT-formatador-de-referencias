import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
    name: 'context',
    initialState: {
        auxNewAuthor: 0,

        currentStep: 1,
        refType1: '',
        refType2: '',

        nameAuthor1: '',
        surAuthor1: '',
        nameAuthor2: '',
        surAuthor2: '',
        nameAuthor3: '',
        surAuthor3: '',
        nameAuthor4: '',
        surAuthor4: '',
        nameAuthor5: '',
        surAuthor5: '',
        nameAuthor6: '',
        surAuthor6: '',
        companyName: '',
        responsableBlog: '',
        blogTitle: '',
        namePodcastEpisode: '',
        namePodcast: '',
        podcastAnnouncer: '',
        userSocialMedia: '',
        displayNameUser: '',
        socialMediaMensage: '',
        remetenteName: '',
        emailSubject: '',
        destinatario: '',
        paginationBook: '',
        editionBook: '',
        durationVideo: '',
        uniDegreed: '',
        university: '',
        nameGuest: '',
        magazine: '',
        numberMagaz: '',

        doiCheckbox: '0',
        etAlCheckbox: '',
        title: '',
        subtitle: '',
        url: '',
        local: '[S.I.]',

        dayAcess: 0,
        monthAcess: '',
        yearAcess: 0,

        dayPublic: 0,
        monthPublic: '',
        yearPublic: 0,
        noDate: 's.d.',

        placePublic: '[S.I.]',
        publishingComp: '[s.n.]',

        edition: '',
        radioCheck: '1'
    },
    reducers: {

        setAuxNewAuthor: (state, action) => {
            state.auxNewAuthor = action.payload;
        },

        setNumberMagaz: (state, action) => {
            state.numberMagaz = action.payload;
        },

        setMagazine: (state, action) => {
            state.magazine = action.payload;
        },
        setNameGuest: (state, action) => {
            state.nameGuest = action.payload;
        },
        setUniversity: (state, action) => {
            state.university = action.payload;
        },
        setUniDegreed: (state, action) => {
            state.uniDegreed = action.payload;
        },
        setDurationVideo: (state, action) => {
            state.durationVideo = action.payload;
        },
        setDoiCheckbox: (state, action) => {
            state.doiCheckbox = action.payload;
        },
        setEditionBook: (state, action) => {
            state.editionBook = action.payload;
        },
        setPaginationBook: (state, action) => {
            state.paginationBook = action.payload;
        },
        setDestinatario: (state, action) => {
            state.destinatario = action.payload;
        },
        setEmailSubject: (state, action) => {
            state.emailSubject = action.payload;
        },
        setRemetenteName: (state, action) => {
            state.remetenteName = action.payload;
        },
        setSocialMediaMensage: (state, action) => {
            state.socialMediaMensage = action.payload;
        },
        setDisplayNameUser: (state, action) => {
            state.displayNameUser = action.payload;
        },
        setUserSocialMedia: (state, action) => {
            state.userSocialMedia = action.payload;
        },
        setPodcastAnnouncer: (state, action) => {
            state.podcastAnnouncer = action.payload;
        },
        setNamePodcast: (state, action) => {
            state.namePodcast = action.payload;
        },
        setNamePodcastEpisode: (state, action) => {
            state.namePodcastEpisode = action.payload;
        },
        setBlogTitle: (state, action) => {
            state.blogTitle = action.payload;
        },
        setResponsableBlog: (state, action) => {
            state.responsableBlog = action.payload;
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
        },
        setRadioCheck: (state, action) => {
            state.radioCheck = action.payload;
        },
        setEdition: (state, action) => {
            state.edition = action.payload;
        },
        setNoDate: (state, action) => {
            state.noDate = action.payload;
        },
        setPublishingComp: (state, action) => {
            state.publishingComp = action.payload;
        },
        setPlacePublic: (state, action) => {
            state.placePublic = action.payload;
        },
        setYearPublic: (state, action) => {
            state.yearPublic = action.payload;
        },
        setMonthPublic: (state, action) => {
            state.monthPublic = action.payload;
        },
        setDayPublic: (state, action) => {
            state.dayPublic = action.payload;
        },
        setYearAcess: (state, action) => {
            state.yearAcess = action.payload;
        },
        setMonthAcess: (state, action) => {
            state.monthAcess = action.payload;
        },
        setDayAcess: (state, action) => {
            state.dayAcess = action.payload;
        },
        setLocal: (state, action) => {
            state.local = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setSubtitle: (state, action) => {
            state.subtitle = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setEtAlCheckbox: (state, action) => {
            state.etAlCheckbox = action.payload;
        },
        setSurAuthor6: (state, action) => {
            state.surAuthor6 = action.payload;
        },
        setSurAuthor5: (state, action) => {
            state.surAuthor5 = action.payload;
        },
        setSurAuthor4: (state, action) => {
            state.surAuthor4 = action.payload;
        },
        setSurAuthor3: (state, action) => {
            state.surAuthor3 = action.payload;
        },
        setSurAuthor2: (state, action) => {
            state.surAuthor2 = action.payload;
        },
        setSurAuthor1: (state, action) => {
            state.surAuthor1 = action.payload;
        },
        setNameAuthor6: (state, action) => {
            state.nameAuthor6 = action.payload;
        },
        setNameAuthor5: (state, action) => {
            state.nameAuthor5 = action.payload;
        },
        setNameAuthor4: (state, action) => {
            state.nameAuthor4 = action.payload;
        },
        setNameAuthor3: (state, action) => {
            state.nameAuthor3 = action.payload;
        },
        setNameAuthor2: (state, action) => {
            state.nameAuthor2 = action.payload;
        },
        setNameAuthor1: (state, action) => {
            state.nameAuthor1 = action.payload;
        },
        setRefType2: (state, action) => {
            state.refType2 = action.payload;
        },
        setRefType1: (state, action) => {
            state.refType1 = action.payload;
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        }

    },

})

export const {
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
} = dataSlice.actions


export default dataSlice.reducer;