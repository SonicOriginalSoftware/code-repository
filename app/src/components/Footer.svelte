<script>
  import { app_info_store } from "../stores.js"

  let name = ""
  let version = ""
  let author = ""

  /** @param {import("../lib/service_worker.js").AppInfo} data */
  async function update_app_info(data) {
    name = data.name
    version = data.version
    author = data.author
  }

  app_info_store.subscribe(update_app_info)
</script>

<footer>
  <span><b>{author}</b> © {new Date().getFullYear()}</span>
  <span><b>{name}</b> v<b>{version}</b></span>
</footer>

<style>
  footer {
    padding: 10px;
    text-align: center;
    background-color: var(--background-ui-primary);
  }
</style>
