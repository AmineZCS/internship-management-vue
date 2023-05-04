// vite config file
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'


export default defineConfig({
    plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
    server: {
        port: 3000,
       host: '0.0.0.0',
        https: false,
    }
})
