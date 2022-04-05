// npm install buffer
// node ./basictest.js

const bjd = require("../bjdata.js")
const fs = require("fs")

let data={
	int8:-128,
	uint8: 255,
	int16: -32768,
	uint16:65535,
	int32: -2147483648,
	uint32: 2147483649,
	//int64:  -9223372036854775808n,
	//uint64: 18446744073709551616n,
	shortarray:[1,2,3],
	object:[[[1],[2],[3]],null,false]
};

let buf = bjd.encode(data)

console.log(buf.toString())

let [newdata, offset] = bjd.decode(buf)

console.log(newdata)

let jmsh = bjd.decode(fs.readFileSync('zlib.bmsh'));
