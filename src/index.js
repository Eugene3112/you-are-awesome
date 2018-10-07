// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {{}};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        get: function () {
            return property
        },
        set: function (value) {
            property = value;
        }
    });
    return property;
};

const createProtoMagicObject = () => {
    let magicObject = function (){};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};
const incrementor = (() => {
    let additional = 0;
    let fCall = function makeAdditional() {
        additional++;
        return makeAdditional;
    };
    fCall.valueOf = () => additional;
    return fCall;
})();
const asyncIncrementor = (() => {
    let additional = 0;
    let fCall = function makeAdditional() {
        additional++;
        return new Promise(resolve => resolve(makeAdditional));
    };
    fCall.valueOf = () => additional;
    return fCall;
})();
const createIncrementer = function* (){
    let index = 0;
    while(true)
        yield ++index;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (x) => new Promise(resolve => {
    setTimeout(() => resolve(x), 1021)
});
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort((a, b) => a.__proto__ -b.__proto__);
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;