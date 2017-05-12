"use strict";
var debugo = require('debug');
function debugf(s) {
    var debugi = debugo(s);
    var res = new Proxy(debugi, {
        apply: function (target, thisArg, args) {
            if (debugi.enabled) {
                var argsevaled = args.map(a => (typeof a === 'function') ? a() : a);
                return debugi.apply(debugi, argsevaled);
            }
        }
    });
    return res;
}
module.exports = debugf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksTUFBTSxHQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQixnQkFBZ0IsQ0FBVTtJQU14QixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzFCLEtBQUssRUFBRyxVQUFTLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUNwQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUMsR0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztnQkFDcEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxDQUFDO0tBQ0YsQ0FBUSxDQUFDO0lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxpQkFBUyxNQUFNLENBQUMifQ==