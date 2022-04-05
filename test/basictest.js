// npm install buffer
// node ./basictest.js

const bjd = require("../bjdata.js")
const fs = require("fs")

let data={
	int8:   [-128, -20, -1],
	uint8:  [0, 1, 20, 255],
	int16:  [-32768, -129],
	uint16: [256, 1000, 65535],
	int32:  [-2147483648, -32769],
	uint32: [65536, 2147483649], 
	int64:  -9223372036854775808n,
	uint64: 18446744073709551615n,
        float:  1.1,
        double: 2.2,
	shortarray:[1,2,3],
	object:[[[1],[2],[3]],null,false],
};

let buf = bjd.encode(data)

console.log(buf.toString())

let [newdata, offset] = bjd.decode(buf)

console.log(newdata)
