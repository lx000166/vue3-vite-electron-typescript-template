/*
 * @Author: lx000
 * @Date: 2021-11-17 22:26:33
 * @LastEditTime: 2021-11-18 08:47:39
 * @Description: 控制菜单栏是否隐藏
 */
import { ref } from 'vue'
/**
 * 控制侧边栏是否隐藏,false:隐藏 true:显示
 */
export const isShow = ref(false)
export const sidebarSwitch = () => (isShow.value = !isShow.value)
