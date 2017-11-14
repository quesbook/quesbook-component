export let QB_COMPONENT_API_URL = 'https://stg.quesbook.com';
export let QB_COMPONENT_GQL_URL = `${QB_COMPONENT_API_URL}/graphql`;
// export const GQL_URL = 'http://localhost:8080/graphql';
export const TOKEN_KEY = 'jwt';
export const TOKEN_KEY_QB = '_quesbook_session';

export const NAV_ITEM_LIST = [
    {
        label: 'Getting started',
        href: '/start',
        userType: ['Tutor', 'Student', 'TutorAdmin', 'EditorAdmin', 'SuperAdmin', 'Guest']
    }, {
        label: 'Student Menu',
        href: '/studyplan',
        userType: ['Student']
    }, {
        label: 'Tutor Menu',
        href: '/practicequestions',
        userType: ['Tutor']
    }, {
        label: 'Articles',
        href: '/articles',
        userType: ['Tutor', 'Student']
    }, {
        label: 'Simulation',
        href: '/simulation',
        userType: ['Tutor', 'Student']
    }
];

export const HOME_PAGE = '/';

export const DEFAULT_FOLDER='/start';

export const TUTOR_ADMIN = 'tutor_admin'
