export let activeEffect = new Function();
export function effect(fn: Function) {
    activeEffect = fn;
    fn();
}
export function getActiveEffect() { 
    return activeEffect
}