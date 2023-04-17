/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-17 11:09:59
 * @Description:
 */
import { random } from "lodash";
import "./style.css";
import { sidebarRoutes } from "@/router/lib/sidebarRoutes";
import { useStyleStore } from "@/store/themeStore";

/**
 * 侧边栏路由path组成的数组
 */
const sidebarPaths: string[] = sidebarRoutes.map((val) => val.path);

// * 背景
const randomColor: TransitionBG.RandomColor = [
  { start: [49, 11, 50], end: [219, 87, 119] },
  { start: [44, 83, 100], end: [15, 32, 39] },
  { start: [25, 84, 123], end: [255, 216, 155] },
  { start: [253, 116, 108], end: [44, 62, 80] }
];
const getRandom = (key: "start" | "end") => randomColor[random(0, randomColor.length - 1)][key];

/** hooks */
export const useTransitionBackground = () => {
  // 不能直接解构store,会丢失响应性
  // 从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()。// 或者直接store.theme使用
  const { theme } = storeToRefs(useStyleStore());
  const route = useRoute();
  const router = useRouter();

  // 设置初始值,主题light时白 night时黑
  const start = ref(theme.value ? [0, 0, 0] : [255, 255, 255]);
  const end = ref(theme.value ? [0, 0, 0] : [255, 255, 255]);
  // 平缓的数组过渡
  const startOutput = useTransition(start);
  const endOutput = useTransition(end);
  // 将过渡数组转为rgb字符串
  const startColor = computed(() => {
    const [r, g, b] = startOutput.value;
    return `rgb(${r}, ${g}, ${b})`;
  });
  const endColor = computed(() => {
    const [r, g, b] = endOutput.value;
    return `rgb(${r}, ${g}, ${b})`;
  });

  const setColor = (metaColor: TransitionBG.colorParams) => {
    if (metaColor) {
      start.value = metaColor.start;
      end.value = metaColor.end;
    } else {
      start.value = getRandom("start");
      end.value = getRandom("end");
    }
  };

  // 设置渐变色 用于背景等过渡
  watchEffect(() => {
    document.querySelector("html")?.style.setProperty("--start-transition-color", startColor.value);
    document.querySelector("html")?.style.setProperty("--end-transition-color", endColor.value);
  });
  // 直接设置,
  watchEffect(() => {
    document
      .querySelector("html")
      ?.style.setProperty(
        "--start-color",
        `rgb(${start.value[0]}, ${start.value[1]}, ${start.value[2]})`
      );
    document
      .querySelector("html")
      ?.style.setProperty("--end-color", `rgb(${end.value[0]}, ${end.value[1]}, ${end.value[2]})`);
  });
  router.afterEach((to, form) => {
    if (sidebarPaths.includes(to.path)) {
      setColor(to.meta.color as TransitionBG.colorParams);
    }
  });
};
