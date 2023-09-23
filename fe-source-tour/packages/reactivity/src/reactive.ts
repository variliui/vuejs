import {getActiveEffect} from './effect'
let bucket = new Set()
export function reactive(target: object): ProxyHandler<object>{
    const obj = new Proxy(target, {
        get(target, key) {
            bucket.add(getActiveEffect())
            return target[key];
        },
        set(target, key, value) {
            target[key] = value;
            bucket.forEach((fn) => (fn as Function)())
            return true;
        }
    })
    return obj
}