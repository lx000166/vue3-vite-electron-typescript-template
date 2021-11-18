/*
 * @Author: lx000
 * @Date: 2021-10-18 09:53:06
 * @LastEditTime: 2021-11-18 17:09:36
 * @Description: 导入echarts组件
 */
import * as echarts from "echarts/core";

import { BarChart, LineChart, PieChart, MapChart, PictorialBarChart, RadarChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  LegendComponent,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent
} from "echarts/components";

import { SVGRenderer } from "echarts/renderers";

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  SVGRenderer,
  PictorialBarChart,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent
]);
const chartDefault_loop = {
  title: {
    text: "Customized Pie",
    left: "center",
    top: 20,
    textStyle: {
      color: "#ccc"
    }
  },

  tooltip: {
    trigger: "item"
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 274, name: "Union Ads" },
        { value: 235, name: "Video Ads" },
        { value: 400, name: "Search Engine" }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.3)"
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)"
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: "rgba(64, 84, 81, 1.0)"
      },

      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function () {
        return Math.random() * 200;
      }
    }
  ]
};

export { chartDefault_loop };
export default echarts;
