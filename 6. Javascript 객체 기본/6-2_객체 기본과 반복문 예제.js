// Array
var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.group('array');
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array');

// Object
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce',
};
console.group('object');
for (var member in memberObject) {
    console.log(member, memberObject[member]);
}
console.groupEnd('object');

memberObject.designer = 'leezche';
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject.['designer']", memberObject['designer']);

delete memberObject.manager;
console.log('after delete memberObject.manager', memberObject.manager);