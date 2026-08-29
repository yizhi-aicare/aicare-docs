GitHub Actions workflow files live on the local branch `cursor/docs-pages-deploy-891a`.
The fine-grained token used to publish this repo does not include the `workflow` scope,
so those files cannot be pushed yet. Until they are, publish the static site from the
`gh-pages` branch (Settings → Pages → Deploy from a branch → `gh-pages` / `/`).
