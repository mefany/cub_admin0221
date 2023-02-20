## Requirements

Make sure that you have the last stable [NodeJS](https://nodejs.org/en/download/) and `yarn` version.

- Do not delete the `yarn.lock file`

## Install

Navigate to the project root folder using terminal and install the dependencies.

```js
yarn || npm install;
```

## Start

After the installation is complete, you can launch dev server by running.

```js
yarn dev || npm run dev
```

This starts a local webserver at `http://localhost:3000` and auto detect file changes:

## Build

```js
yarn build || npm run build
```

## Folder structure

```
admin-react/
├── public/
|   └── assets/
|       └── images/
├── pages/
    ├── admin -- for admin user
    ├── dev -- for developer
    ├── Other pages
├── src/
|   ├── __server__/
|   |   ├── __api__
|   |   |   ├── all api functions create inside
|   |   ├── __db__
|   |   |   ├── all dummy data inside
|   ├── animations
|   ├── components/
|   |   ├── icons
|   |   ├── layouts
|   |   |   ├── admin-dashboard
|   |   └── Includes reusable atomic components
|   ├── contexts
|   ├── hooks
|   ├── models
|   ├── components-usage
|   |   └── Includes bigger components (these components contain hard coded data)
|   ├── theme
|   ├── utils
|   ├── lib
└── README.md
```

## Pages/Routing

Admin react follows [Next.js routing standard](https://nextjs.org/docs/routing/introduction).
All the routes/pages are inside `pages` folder.

## Compnents

Component structure are straight forward.

- Reusable atomic components are located in `src/components/`
- Bigger static components are located in `src/components-usage`
  - Static component means, these components has static data which you may want to modify

## Admin Dashboard

- Admin dashboard pages are inside `pages/admin`.
- Admin dashboard layout components are inside `src/components/layouts/admin-dashboard`

### Admin Navigaiton

- Admin navigation data is stored in `src/components/layouts/admin-dashboard/NavigationList.tsx`.

### Theme

- `theme/MuiTheme.tsx` is the main theme file.
- `theme/themeColors.ts` Contains theme colors (Primary, Secondary & etc.)
- `theme/components.js` Overrides the MUI default component styles
- `theme/typography.ts` Sets fontFamily and fontSize

### RTL

Open `src/contexts/SettingContext.tsx` and change the value of direction to 'rtl'
`const initialSettings: SettingsOptions = { direction: "rtl" };`

## REST API

- REST API calls are located in `src/__server__/__api__`

## Fake server

- REST APIs are getting data from dummy server located in `src/__server__/__db__`
- This server serves dummy data. You need to implement your own server.
