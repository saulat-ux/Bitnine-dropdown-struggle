

export const navbarLinks = [
    {
        name: 'PRODUCTS', submenu: true, link: '/', sublinks: [
            {
                name: 'AgensSQL', arrow: '>', link: '/', sublinks: [
                    { name: 'Standerd Edition', link: '/' },
                    { name: 'Enterprice Edition', link: '/' },
                    { name: 'Enterprice Edition Plus', link: '/' },
                    { name: 'Managnment Tools', link: '/' },
                ]
            },
            { name: 'AgensGraph', link: '/' },
            { name: 'visualization & Analytics', link: '/' },
        ]
    },

    { name: 'USE CASES', link: '/' },
    { name: 'SERVICES', link: '/' },

    {
        name: 'RESOURSES', submenu: true, link: '/', sublinks: [
            { name: 'Documentation', link: '/' },
            { name: 'Learn', link: '/' },
        ]
    },
    { name: 'BLOG', link: '/' },

    {
        name: 'COMPANY', link: '/', sublinks: [
            { name: 'About us ', link: '/' },
            { name: 'Contact', link: '/' },
        ]
    },

    {
        name: 'IR', link: '/', sublinks: [
            { name: 'IR 공고', link: '/' },
            { name: 'IR 공시 정보', link: '/' },
            { name: 'IR 재무 정보', link: '/' },

        ]
    },
    { name: 'Download', link: '/' },
]