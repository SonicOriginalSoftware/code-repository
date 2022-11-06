import { writable } from "svelte/store"
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore

/** @typedef {import("./lib/types.js").SvelteComponentDev} SvelteComponentDev */

export const app_info_store = writable({ name: "", version: "", author: "" })

export const page_name_store = writable("Main")

export const drawer_toggle_status = writable(false)

/** @type {import("svelte/store").Writable<SvelteComponentDev?>} */
export const current_symbol_element = writable(null)
