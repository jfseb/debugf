var debug = require('debug');
function debugf(s) {
    var debugi = debug(s);
    return new Proxy(debugi, {
        apply: function (target, thisArg, arguments) {
            if (debugi.enabled) {
                var argsevaled = arguments.map(a => (typeof a === 'function') ? a() : a);
                return debugi.apply(debug, argsevaled);
            }
        }
    });
}
module.exports = debugf;

//# sourceMappingURL=index.js.map
