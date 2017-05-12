var debugo  = require('debug');

function debugf(s : string) :  {
        (formatter: any, ...args: any[]): void;
        enabled: boolean;
        log: Function;
        namespace: string;
    } {
  var debugi = debugo(s);
  var res = new Proxy(debugi, {
    apply : function(target, thisArg, args) {
      if(debugi.enabled) {
        var argsevaled = args.map(a => (typeof a === 'function')? a() : a );
        return debugi.apply(debugi,argsevaled);
      }
    }
  }) as any;
  return res;
}
//var debugx = debugf;
export = debugf;
//export default debugf;
//module.exports = debugf;
//declare var debug: debug.IDebug;
//export = debug;
//public namespace debug;

declare namespace debug {
    export interface IDebug {
        (namespace: string): debug.IDebugger,
        coerce: (val: any) => any,
        disable: () => void,
        enable: (namespaces: string) => void,
        enabled: (namespaces: string) => boolean,

        names: string[],
        skips: string[],

        formatters: IFormatters
    }

    export interface IFormatters {
        [formatter: string]: Function
    }

    export interface IDebugger {
        (formatter: any, ...args: any[]): void;

        enabled: boolean;
        log: Function;
        namespace: string;
    }
}
