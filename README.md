# goodeggs-validators

validators for good eggs

[![Build Status](http://img.shields.io/travis/goodeggs/goodeggs-validators.svg?style=flat-square)](https://travis-ci.org/goodeggs/goodeggs-validators)


## Usage

```
npm install goodeggs-validators
```

```javascript
import {email} from 'goodeggs-validators';
email("bob@example.com") //=> true
email("bob@foo@example.com") //=> false
```


## Contributing

```
$ git clone https://github.com/goodeggs/goodeggs-validators && cd goodeggs-validators
$ npm install
$ gulp test
```

## Publishing New Versions

After merging your changes to master, do the following:

```
$ npm version patch
$ npm run prepublish
$ npm publish
```

_Module scaffold generated by [generator-es6-node](https://github.com/godmode0n/generator-es6-node)._
