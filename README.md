# REACT-STARTER-WCS

bootstrapper CLI for React App with basic conf for Caprover deployment.

It uses [Parcel](https://parceljs.org/) as bundler

## Getting started :pushpin:

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br />

### `npm run lint`

This app came with basic ESLint config (Prettier + Airbnb), you can run it every time using this script.
Remember, it also come with Husky, so it will automatically runs every time you commit !:fire:

## GitHub Actions :pushpin:

Those create files for automate different actions, [give an eye here](https://github.com/features/actions).

### ESLint on PR :pencil2:

Running ESLint on Pull Request on `master` and `dev`.
Customize it in the `.github/workflows/eslint.yml` file.

### Build and push to production branch :pencil2:

Building the app and push it to a `production` branch once code is merged on `master`
Customize it in the `.github/workflows/builddeploy.yml` file.

:exclamation: :exclamation: If you choose this action **alongside** Caprover config files, please replace the default Dockerfile with the following one :exclamation: :exclamation:

```Dockerfile
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**BUT** actually, it doesn't create the Caprover config files on that branch, you have to do it on your own, following this :

```bash
# Create your GitHub repo and link it...
git push -u origin master

# Wait for the action to perform

git fetch --all

git checkout production

# copy/paste Dockerfile, captain-definition and default.conf from master branch

git add Dockerfile captain-definition default.conf
git commit -m "youhou, basic config added ! :fire:"
git push -u origin production
```

Then setup your Caprover app
![](https://i.imgur.com/v7zrDoK.png)
