import { reactive, effect } from "../src";
import { describe, it, expect } from 'vitest'

describe('响应式测试', () => {
    it('测试一下reactive 和 effect', () => {
        let obj = reactive({
            name: 'varil',
        })
        let dummy
        effect(() => {
            dummy = obj["name"]
        })
        expect(dummy).toBe('varil')
        obj["name"] = 'varil2'
        expect(dummy).toBe('varil2')
    })
})