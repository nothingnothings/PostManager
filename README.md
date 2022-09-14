![logo](/src/assets/images/HostCorps.png)

# PostManager

Simple ReactJS app with authentication and post creation logic, connected to a Node.js (Express.js) backend, helped by a MongoDB database and hosted on the Heroku platform.

The App was bootstrapped with create-react-app and deployed with gh-pages, assisted by the GitHub Actions feature.

## Technologies

Some of the Languages, Libraries and packages employed:

- Node Package Manager (for bootstrapping and managing the React app)
- HTML5 (JSX)
- CSS3 (animations, Flexbox, media queries)
- ReactJS (JavaScript Library, app built entirely of React components; usage of "state" to manage form validation, etc.)
- Form validation logic (state-based input validation, logic for adding and removing "touched" and "invalid" styles, etc.)
- Responsive mobile design (sidebar, Flexbox, media queries)

## Project Directory Structure

The development environment (with the use of the `create-react-app` tool/workflow):, as seen in the `master` branch:

```
.\
│
├── public\
│   ├── 404.html
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│
├── src\
│   │
│   ├── components\
│   │   │
│   │   ├── Backdrop\
│   │   │   ├── Backdrop.css
│   │   │   └── Backdrop.js
│   │   │
│   │   ├── Button\
│   │   │   ├── Button.css
│   │   │   └── Button.js
│   │   │
│   │   ├── ErrorHandler\
│   │   │   └── ErrorHandler.js
│   │   │
│   │   ├── Feed\
│   │   │   │
│   │   │   └── Post\
│   │   │       ├── Post.css
│   │   │       └── Post.js
│   │   │
│   │   │
│   │   ├── Footer\
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   │
│   │   ├── Form\
│   │   │   │
│   │   │   └── Input\
│   │   │       ├── FilePicker.js
│   │   │       ├── Input.css
│   │   │       └── Input.js
│   │   │
│   │   │
│   │   ├── Image\
│   │   │   ├── Avatar.css
│   │   │   ├── Avatar.js
│   │   │   ├── Image.css
│   │   │   └── Image.js
│   │   │
│   │   ├── Layout\
│   │   │   ├── Layout.css
│   │   │   └── Layout.js
│   │   │
│   │   ├── Loader\
│   │   │   ├── Loader.css
│   │   │   └── Loader.js
│   │   │
│   │   ├── Logo\
│   │   │   ├── Logo.css
│   │   │   └── Logo.js
│   │   │
│   │   ├── Modal\
│   │   │   ├── Modal.css
│   │   │   └── Modal.js
│   │   │
│   │   ├── Navigation\
│   │   │   │
│   │   │   ├── MainNavigation\
│   │   │   │   ├── MainNavigation.css
│   │   │   │   └── MainNavigation.js
│   │   │   │
│   │   │   ├── MobileNavigation\
│   │   │   │   ├── MobileNavigation.css
│   │   │   │   └── MobileNavigation.js
│   │   │   │
│   │   │   ├── MobileToggle\
│   │   │   │   ├── MobileToggle.css
│   │   │   │   └── MobileToggle.js
│   │   │   │
│   │   │   └── NavigationItems\
│   │   │       ├── NavigationItems.css
│   │   │       └── NavigationItems.js
│   │   │
│   │   │
│   │   ├── Paginator\
│   │   │   ├── Paginator.css
│   │   │   └── Paginator.js
│   │   │
│   │   ├── SinglePostPaginator\
│   │   │   ├── SinglePostPaginator.css
│   │   │   └── SinglePostPaginator.js
│   │   │
│   │   └── Toolbar\
│   │       ├── Toolbar.css
│   │       └── Toolbar.js
│   │
│   │
│   ├── pages\
│   │   │
│   │   ├── Auth\
│   │   │   ├── Auth.css
│   │   │   ├── Auth.js
│   │   │   ├── Login.css
│   │   │   └── Login.js
│   │   │
│   │   └── Feed\
│   │       │
│   │       ├── FeedEdit\
│   │       │   ├── FeedEdit.css
│   │       │   └── FeedEdit.js
│   │       │
│   │       ├── SinglePost\
│   │       │   ├── SinglePost.css
│   │       │   └── SinglePost.js
│   │       │
│   │       ├── Feed.css
│   │       └── Feed.js
│   │
│   │
│   ├── util\
│   │   ├── image.js
│   │   └── validators.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package-lock.json
└── package.json
```

The Webpack workflow's production output, as shown in the `gh-pages` branch (tasked with the deployment of the app):

```
.\
│
├── static\
│   │
│   ├── css\
│   │   ├── 1.b0103ddb.chunk.css
│   │   ├── 1.b0103ddb.chunk.css.map
│   │   ├── main.176757f9.chunk.css
│   │   └── main.176757f9.chunk.css.map
│   │
│   └── js\
│       ├── 1.ab771bf3.chunk.js
│       ├── 1.ab771bf3.chunk.js.map
│       ├── main.8ad88ea1.chunk.js
│       ├── main.8ad88ea1.chunk.js.map
│       ├── runtime~main.720003f3.js
│       └── runtime~main.720003f3.js.map
│
│
├── .nojekyll
├── 404.html
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── asset-manifest.json
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── manifest.json
├── precache-manifest.b9da06879698db9688cbb05c98f3fb50.js
└── service-worker.js
```

## Webpack and package.json Configuration Files

The webpack.config.js file used in the project:

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/js/index.js', './src/js/start-hosting.js'],

  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filePath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filePath}/[name][ext]`;
    },
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'customers.html',
      template: 'src/customers.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'packages.html',
      template: 'src/packages.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'start-hosting.html',
      template: 'src/start-hosting.html',
    }),

    new CleanWebpackPlugin(),
  ],

  performance: {
    hints: false,
  },
};

```

## Setup

To use this project, clone it using Git:

1. Run `git clone` to clone the project into your local Git repository
2. Serve the files with the help of a hosting provider (frontend-only)

## Features

- Multiple pages (different HTML pages, normal page serving)
- Form validation logic in the "Start Hosting" page
- Responsive design (mobile and desktop) created with Flexbox and media queries
- Addition/removal of CSS classes ("slide-in" animation) implemented with JavaScript
- Custom favicon, compatible with multiple devices

## Inspiration

Inspired by the "JavaScript - The Complete Guide" course by Maximilian Schwarzmüller.
