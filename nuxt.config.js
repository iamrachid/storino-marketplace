export default {
    head: {
        titleTemplate: 'Storeino marketplace',
        title: 'Storeino marketplace',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Riode - Ultimate eCommerce Template'
            },
            {
                name: 'author',
                content: 'd-themes'
            },
            {
                name: 'keywords',
                content: 'Riode Vue eCommerce Template'
            },
            {
                name: 'app-mobile-web-app-title',
                content: 'Riode'
            },
            {
                name: 'application-name',
                content: 'Riode Vue eCommerce Template',
            },
            {
                name: 'msapplication-TileColor',
                content: '#cc9966'
            },
            {
                name: 'msapplication-config',
                content: '/images/icons/browserconfig.xml'
            }
        ],
        link: [
            {
                rel: 'dns-prefetch',
                href: "//fonts.googleapis.com"
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href:
                    './images/icons/favicon.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href:
                    './images/icons/favicon.png'
            },
            {
                rel: 'shortcut icon',
                href:
                    './images/icons/favicon.png'
            },
            {
                rel: 'mask-icon',
                color: '#666',
                href:
                    './images/icons/safari-pinned-tab.svg'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800'
            }
        ]
    },

    css: [
        'swiper/dist/css/swiper.css',
        'vue-image-lightbox/dist/vue-image-lightbox.min.css',
        'vue-image-zoom/dist/vue-image-zoom.css',
        '~/static/vendor/swiper-slider/swiper-slider.min.css',
        '~/static/vendor/riode-icon/riode-icons.min.css',
        '~/static/vendor/animate/animate.min.css',
        '~/static/vendor/fontawesome-free/css/all.min.css',
        '~/static/sass/style.scss'
    ],

    plugins: [
        { src: '~/plugins', ssr: false },
        { src: '~/plugins/directives/parallax.js', ssr: false },
        { src: '~/plugins/localstorage.client.js', ssr: false },
        { src: '~/plugins/filters.js', ssr: true },
        { src: '~/plugins/directives/animate.js', ssr: false },
        { src: '~/plugins/notifications-ssr', ssr: true },
        { src: '~/plugins/notifications-client', ssr: false }
    ],

    buildModules: [
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    modules: [ '@nuxtjs/axios' ],

    router: {
        base: '/'
    },

    build: {
        publicPath: "http://d-themes.com/vue/riode/demo-22/"
    },

    generate: {
        subFolders: false,
        fallback: '404.html'
    },

    ssr: false,
    loading: false,
    loadingIndicator: false,

    pageTransition: 'page',

    server: {
        port: 4002,
        host: 'localhost'
    }
};
