/*
 * @Author: lx000
 * @Date: 2021-11-16 17:42:10
 * @LastEditTime: 2021-11-18 08:51:41
 * @Description: 背景色渐变,与全局渐变色设置
 */

import { ref, computed, watch } from 'vue'
import { useTransition } from '@vueuse/core'
import { useRoute } from 'vue-router'
/**
 * 页面加载时,通过layout/index.vue中setWatch方法监听路由变化,将路由meta字段中的start,end rgb颜色数组同步到此变量
 */
export const start = ref([170, 74, 106])
export const end = ref([7, 51, 58])
/**
 * @function useTransition vue/use库提供的方法,绑定一个或一组响应式number类型参数,当参数改变时,在一定时间内逐渐过渡到新的值
 * @example
 * 先设置一个响应式变量 const start = ref(0) 再用函数包裹useTransition(start),当start值改变时,比如start.value = 50
 * 在默认300ms内,startOutput的值从0,1,2,3.......50
 */
const startOutput = useTransition(start)
const endOutput = useTransition(end)
/**
 * 通过计算属性,当startOutput,endOutput值变化时,返回计算后的新rgba颜色
 * 效果:当路由改变时,通过useTransition和computed将背景色逐渐过渡到新的颜色
 */
export const realStart = computed(() => {
    const [r, g, b] = start.value
    return `rgba(${r}, ${g}, ${b},255)`
})
export const startColor = computed(() => {
    const [r, g, b] = startOutput.value
    return `rgba(${r}, ${g}, ${b},255)`
})
/**
 * 当start,end值改变时,立即返回新的rgba颜色,用于设置文字,菜单背景等颜色
 */
export const realEnd = computed(() => {
    const [r, g, b] = end.value
    return `rgba(${r}, ${g}, ${b},255)`
})
export const endColor = computed(() => {
    const [r, g, b] = endOutput.value
    return `rgba(${r}, ${g}, ${b},255)`
})
/**
 *
 * @returns 设置路由监听,用在layout/index.vue
 */
export function setWatch() {
    const route = useRoute()
    return watch(
        () => route.fullPath,
        () => {
            route.meta.start && (start.value = route.meta.start as number[])
            route.meta.end && (end.value = route.meta.end as number[])
        }
    )
}
