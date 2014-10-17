# slush-core

> A Quick Generator for the FOUR core components you need to build a project form the ground up.

#### Features

  - Livereload.
  - Gulp watch & inject css & js into html.
  - Simple Express static server.

## 4 Core Components
1. index.html
2. app.js
3. server.js
4. gulpFile.js


----------
####Generates the following
├─ client
│   ├ app
│   │   ├ app.css
│   │   └ app.js
│   │
│   └ index.html
│
├─ gulpFile.js
├─ package.json
└─ server.js

## Getting Started

Install `slush-core` globally:

```bash
$ npm install -g slush-core
```

### Usage

Create a new folder for your project:

```bash
$ mkdir core
```

Run the generator from within the new folder:

```bash
$ cd core && slush core
```

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/joelcoxokc/slush-slush-demo/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/joelcoxokc/slush-slush-demo/issues).

## License

The MIT License

Copyright (c) 2014, Joel Cox

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

