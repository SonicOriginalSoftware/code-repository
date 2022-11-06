import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [svelte()],
}

export default defineConfig(config)
