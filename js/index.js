var debug = require('debug');
function debugf(s) {
    var debugi = debug(s);
    return new Proxy(debugi, {
        apply: function (target, thisArg, arguments) {
            if (debugi.enabled && typeof arguments[0] === 'function') {
                debugi(arguments[0]());
            }
            else {
                return debugi.apply(debug, arguments);
            }
        }
    });
}
module.exports = debugf;

//# sourceMappingURL=index.js.map
