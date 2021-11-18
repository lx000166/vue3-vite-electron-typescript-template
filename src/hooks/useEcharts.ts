/*
 * @Author: lx000
 * @Date: 2021-10-18 10:49:49
 * @LastEditTime: 2021-11-18 23:17:21
 * @Description: hooks 生成echarts实例并挂载至dom
 */
import { nextTick, unref, onBeforeUnmount } from "vue";
import type { Ref } from "vue";
import type { EChartsOption } from "echarts";

// ? 导入echarts实例
import echarts from "@/utils/echarts";
// ? 延迟函数
import { dealy } from "@/utils/dealy";

/**
 * @func: useEcharts
 * @desc: 接收页面元素,生成echarts实例并绑定到元素
 * @param {HTMLElement} element  <div id="sss" ref="ChartRef"></div>
 * @return {Map} { setOption,chartInstance }
 * @return {Function} setOption 设置函数,用于更新图表
 * @return {Function} chartInstance 图表实例
 * @example:
 * app.vue:<div id="sss" ref="ChartRef"></div>
 * app.vue script :  const ChartRef = ref(null) .dom渲染后,会绑定为<div id="sss" ref="ChartRef"></div>
 * app.vue script : const { setOption } = useEcharts(ChartRef) ,传入dom元素,返回设置函数
 * app.vue script : setOption(...图表配置项) 设置函数传入图表配置,生成图表
 */
/* 执行顺序
 * 1. 调用函数 useEcharts(element) 并传递参数,参数是html元素
 * 2. 调用setOptions并传递配置参数
 * 2.1 如果图表实例未创建,调用initCharts方法实例化echarts图表并绑定传入的dom元素
 * 3.调用echarts实例对象*chartInstance?.setOption*方法,传入图表配置,生成图表
 *
 */
export function useEcharts(element: Ref<HTMLElement | null>) {
  let chartInstance: echarts.ECharts | null = null;
  const initCharts = () => {
    chartInstance = echarts.init(unref(element as Ref<HTMLElement>));
    setResize();
  };
  const setOptions = (options: EChartsOption) => {
    nextTick(async () => {
      await dealy(30);
      if (!element.value) {
        setOptions(options);
        return;
      }
      if (!chartInstance) initCharts();
      chartInstance?.setOption(options);
    });
  };
  /**
   * @func: resize 图表自适应尺寸
   * @func: setResize 窗口尺寸改变时,刷新图表(自适应尺寸)
   */
  const resize = () => chartInstance?.resize();
  const setResize = () => window.addEventListener("resize", resize, false);

  function disposeChart() {
    return onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
      chartInstance?.dispose();
    });
  }

  return { setOptions, chartInstance, disposeChart };
}
