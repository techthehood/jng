# JNG notes

#### How do i start the server using the alias?

```
  jland
```
> start server

#### navigate to jng root

```
  cd-jland
```

#### navigate to jng public folder

```
  cd-jng
```

#### local url

```
  localhost:8080
```

> don't forget the production build uses a different bundle.js/.css file than the development build

#### build differences   

developement

```
  nrb
```
> webpack build alias

- copy the js script from the dist file 

## GOTCHA: npm install (transfer to a new vps)

i started out by installing the latest version of node using nvm install
nvm current // 18.10.0

Error: Please, upgrade your dependencies to the actual version of core-js@3

[suggested fix](https://stackoverflow.com/questions/59354180/error-please-upgrade-your-dependencies-to-the-actual-version-of-core-js3)   

```
  npm install --save core-js@^3
```

still failed FAILED - other things broke

roll back to an earlier version of node

```
  nvm list
  nvm install 8
  nvm use 8
  //Now using node v8.17.0 (npm v6.13.4)
```

WORKS - this seems to work (no errors only fixes)

found 26 vulnerabilities (4 low, 8 moderate, 13 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

#### GOTCHA: SyntaxError: Unexpected token import

/usr/lib/node_modules/pm2/lib/ProcessContainerFork.js:30
0|jng | import(url.pathToFileURL(process.env.pm_exec_path));

```
  npm -v
  // pm2 -v 5.2.0
```

rollback pm2 to v4.2.1
```
  pm2@4.2.1
```

pm2 v5.2.0 persists

#### [Uninstalling PM2 completely on Ubuntu](https://github.com/Unitech/pm2/issues/1466)   

```
  pm2 kill
  sudo npm remove pm2 -g
  #test with :
  which pm2
```

[install pm2 on ubuntu](https://pm2.io/docs/runtime/guide/installation/)
> NOTE: IMPORTANT: i forgot to use sudo for the global install

```
  sudo npm i pm2@4.2.1 -g
```

nvm v8.17.0
pm2 v4.2.1

there is a port descrepancy - i need to detect the server name

src/server.js
```
console.log(`[server.js] HOSTNAME`, HOSTNAME);
console.log(`[server.js] os hostname`, os.hostname());
console.log(`[server.js] SITE_SERVER`, SITE_SERVER);
console.log(`[server.js] BETA_PORT`, BETA_PORT);
```

keys.js
```
  // HOSTNAME: process.env.DOMAIN_NAME.split(".")[0],
  HOSTNAME: process.env.HOSTNAME,
```
> originally i had keys detecting the domain name and separating the TLD from the name
> idk why i needed to be so fancy - even though i previously named the droplet/host server the same as the domain name.  but this new droplet will host more sites so its impractical to name the host server the same thing as one of the domains

i added HOSTNAME to .env - this value should be the same as the droplet server the site is hosted on

if local - this will detect to using port 8080 otherwise it will use server ports live or beta on further conditions