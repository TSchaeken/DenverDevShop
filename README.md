# denverdevshop.com Documentation
https://www.denverdevshop.com
## Setup Instructions
### Global dependencies:
    - node
    - npm

### Run Locally
1. `npm install`
1. `npm run dev`
1. Open in browser: `localhost:8000`

### Add heroku to git remotes
1. `git pull origin master:master`
1. `heroku login`
1. Enter heroku username and password.
1. `git remote -v`

```
origin	git@github.com:noahschutte/denverdevshopsite.git (fetch)
origin	git@github.com:noahschutte/denverdevshopsite.git (push)
```
1. `git remote add heroku https://git.heroku.com/denverdevshopsite.git`
1. `git remote -v`
```
origin	git@github.com:noahschutte/denverdevshopsite.git (fetch)
origin	git@github.com:noahschutte/denverdevshopsite.git (push)
heroku	https://git.heroku.com/denverdevshopsite.git (fetch)
heroku	https://git.heroku.com/denverdevshopsite.git (push)
```

### Open Site in Production
`npm run open`

### Deploy to heroku production env
`npm run deploy`
