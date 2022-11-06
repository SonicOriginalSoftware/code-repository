import { writable } from "svelte/store"
// @ts-ignore
import EighthNote from "./components/MusicSymbols/Notes/Eighth.svelte"
// @ts-ignore
import QuarterNote from "./components/MusicSymbols/Notes/Quarter.svelte"
// @ts-ignore
import EighthRest from "./components/MusicSymbols/Rests/Eighth.svelte"
// @ts-ignore
import QuarterRest from "./components/MusicSymbols/Rests/Quarter.svelte"

/** @typedef {import("./lib/types.js").SvelteComponentDev} SvelteComponentDev */

export const app_info_store = writable({ name: "", version: "", author: "" })
export const page_name_store = writable("Main")
export const drawer_toggle_status = writable(false)
/** @type {import("svelte/store").Writable<SvelteComponentDev?>} */
export const current_symbol_element = writable(null)
/** @type {Array<{name: string, id: string, component: SvelteComponentDev}>} */
export const music_symbols_store = [
  {
    name: "Quarter Note",
    id: "quarter-note",
    component: QuarterNote,
  },
  {
    name: "Eighth Note",
    id: "eighth-note",
    component: EighthNote,
  },
  {
    name: "Quarter Rest",
    id: "quarter-rest",
    component: QuarterRest,
  },
  {
    name: "Eighth Rest",
    id: "eighth-rest",
    component: EighthRest,
  },
]
