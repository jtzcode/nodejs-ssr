const buffer1 = Buffer.from("HelloBuffer");
const buffer2 = Buffer.from([0, 1, 4, 6]);

const buffer3 = Buffer.alloc(20);

buffer2.writeInt8(10, 1);
console.log(buffer2);
buffer3.writeInt16BE(512, 2);
console.log(buffer3);

const fs = require("fs");
const protobuf = require("protocol-buffers");

const schema = protobuf(fs.readFileSync(__dirname + '/data.proto', 'utf-8'));
console.log(schema);

const buffer = schema.Course.encode({
    id: 1,
    name: "Nodejs in Action",
    price: 88.88
});

console.log(schema.Course.decode(buffer));
