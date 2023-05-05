// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
    ],
    app: {
        head: {
            title: 'Taskera',
            meta: [
                { name: 'description', content: 'Task manager' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) => tag.startsWith('v-' && 'nuxt'),
        },
    }
})
