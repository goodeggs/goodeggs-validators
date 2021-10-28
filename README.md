# goodeggs-validators

validators for good eggs

[![Build Status](http://img.shields.io/travis/goodeggs/goodeggs-validators.svg?style=flat-square)](https://travis-ci.org/goodeggs/goodeggs-validators)

## Usage

```
yarn add goodeggs-validators
```

```javascript
import {email} from 'goodeggs-validators';
email('bob@example.com'); //=> true
email('bob@foo@example.com'); //=> false

import {objectid} from 'goodeggs-validators';
objectid('562fb4f29524e80300c983d8'); //=> true
objectid('qq2-o399cw'); //=> false
```

## Contributing

```
$ git clone https://github.com/goodeggs/goodeggs-validators && cd goodeggs-validators
$ yarn install
```

To compile the project:

```sh
yarn run build
```

To run tests:

```
yarn run test
```

## Releasing

To release a new version of this module, use yarn to publish a version and create a git tag,
then push the commit and tag:

```sh
yarn publish --new-version=<major|minor|patch|premajor|preminor|prepatch>
git push --follow-tags
```
