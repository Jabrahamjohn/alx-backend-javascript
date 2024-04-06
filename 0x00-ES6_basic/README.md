# 0x00.ES6 Basics

#### Javascript ES6

<div class="panel panel-default">

    <div class="panel-heading">
      <h2 class="panel-title">Concepts</h2>
    </div>
    <div class="panel-body">
      <p>
        <em>For this project, we look at these concepts:</em>
      </p>
          <li>
            <a href="https://intranet.alxswe.com/concepts/852">JavaScript programming </a>
          </li>
          <li>
            <a href="https://intranet.alxswe.com/concepts/542">Software Linter</a>
          </li>
      </ul>
    </div>
  </div>

<img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240310%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240310T101524Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=8325971189f469a05917805108cffc9e1a74333450f584fe32e69314af06f71f" alt="" loading="lazy" style="">

## Resources

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/NW1dFLFExQ12_hD8yvkV3A" title="ECMAScript 6 - ECMAScript 2015" target="_blank">ECMAScript 6 - ECMAScript 2015</a></li>
<li><a href="/rltoken/sroRUsUvOZV28V99MHDenw" title="Statements and declarations" target="_blank">Statements and declarations</a></li>
<li><a href="/rltoken/N2WLylppCtkkX3YFFtyUHw" title="Arrow functions" target="_blank">Arrow functions</a></li>
<li><a href="/rltoken/kbw9gMO6sdeOKAY23SYVgA" title="Default parameters" target="_blank">Default parameters</a></li>
<li><a href="/rltoken/erZfCvacuGVk9z1CQlJvYQ" title="Rest parameter" target="_blank">Rest parameter</a></li>
<li><a href="/rltoken/kdF078LS2vjT-_PickEr7Q" title="Javascript ES6 — Iterables and Iterators" target="_blank">Javascript ES6 — Iterables and Iterators</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/KDGvEqVWIsvOQfCcwDNHNg" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What ES6 is</li>
<li>New features introduced in ES6</li>
<li>The difference between a constant and a variable</li>
<li>Block-scoped variables</li>
<li>Arrow functions and function parameters default to them</li>
<li>Rest and spread function parameters</li>
<li>String templating in ES6</li>
<li>Object creation and their properties in ES6</li>
<li>Iterators and for-of loops</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using the <a href="/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q" title="Jest Testing Framework" target="_blank">Jest Testing Framework</a></li>
<li>Your code will be analyzed using the linter <a href="/rltoken/Ttd9w5jERwTErJW3DDbVoQ" title="ESLint" target="_blank">ESLint</a> along with specific rules that we’ll provide</li>
<li>All of your functions must be exported</li>
</ul>

<h2>Setup</h2>

<h3>Install NodeJS 12.11.x</h3>

<p>(in your home directory): </p>

<pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

<h3>Install Jest, Babel, and ESLint</h3>

<p>in your project directory, install Jest, Babel and ESList by using the supplied <code>package.json</code> and run <code>npm install</code>.</p>

<h2>Configuration files</h2>

<p>Add the files below to your project directory</p>

<h3><code>package.json</code></h3>

<details>
<summary>Click here to show/hide file contents</summary>
<pre><code>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js &amp;&amp; jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click here to show/hide file contents</summary>
<pre><code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click here to show/hide file contents</summary>
<pre><code>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</code>
</pre>
</details>

<h3>Finally…</h3>

<p>Don’t forget to run <code>npm install</code> from the terminal of your project folder to install all necessary project dependencies.</p>
