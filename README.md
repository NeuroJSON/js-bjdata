bjdata.js - BJData Encoder/Decoder for JavaScript and NodeJS
===========

**[UBJSON]-derived [BJData] encoder and decoder for JavaScript and [Node.js].**

Check out the [Github repo] for the source code.
Visit [module site] for API docs and examples.
Extra information available in [wiki].

[UBJSON]: http://ubjson.org
[BJData]: http://neurojson.org/bjdata/draft2/
[Node.js]: http://nodejs.org/

[Github repo]: https://github.com/NeuroJSON/js-bjdata
[module site]: https://npmjs.com/package/bjd
[wiki]: http://neurojson.org


Installation
------------


To use the `bjdata.js` module in node.js applications, you must first install this module via

```sh
npm install bjd
```

Usage example
-------------

For NodeJS applications, 

```js
var bjd = require("bjd")

let data={integer:1,shortarray:[1,2,3],object:[[[1],[2],[3]],null,false]};
let buf = bjd.encode(data);
let newdata = bjd.decode(buf)[0];

console.log(newdata)
```

Contributing
------------

To contribute any patches, simply fork this repository using GitHub
and send a pull request to [this project](https://github.com/NeuroJSON/js-bjdata). Thanks!


License
-------

Apache 2.0 license. See license text in file [LICENSE](https://github.com/NeuroJSON/js-bjdata/blob/master/LICENSE).
