<div align="center">
  <img src="./public/favicon.png" />
  <h2>Palette Colors</h2>
  <p>an application for you to create groups with your favorite colors</p>
</div>
<br>
<br>

## Tools and Libraries
- React.js
- Next.js
- react-color
- react-modal
- react-hook-form
- nanoid
- styled-components
- polished
- styled-media-query
- next-images
- next-compose-plugins
- axios
- Typescript
- eslint-config-airbnb
- eslint-config-next
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- prettier
- husky
- commitlint

<br>

## How to contribute?
- Install [git-flow](https://github.com/nvie/gitflow/wiki/Installation)
- To configure git-flow run the command `git flow init`
- to create a feature (access the `develop` branch) `git flow feature start <feature-name>`

### Generating a release
Go to the develop branch and run the command
```bash
git flow release start "v<number-version>" # git flow release start "v1.1.0"
```
change the `version` field in `package.json` and commit it. Then run the command to finalize the release:
```bash
git flow release finish #or git flow release finish "v1.1.0"
```
Then push the `develop` and `main` branch
```bash
git push origin develop && git checkout main && git push
```

Now push the tags
```bash
git push origin --tags
```


## Run Project
```bash
yarn dev #or npm run dev
```