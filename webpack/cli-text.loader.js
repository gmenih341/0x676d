console.log('trying to use loader');
module.exports = function(source) {
    return `export default \`${source}\``;
}