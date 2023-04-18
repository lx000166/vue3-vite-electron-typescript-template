import { random } from "lodash";

// * 背景
const randomColor: TransitionBG.RandomColor = [
  { start: [49, 11, 50], end: [219, 87, 119] },
  { start: [44, 83, 100], end: [15, 32, 39] },
  { start: [25, 84, 123], end: [255, 216, 155] },
  { start: [253, 116, 108], end: [44, 62, 80] }
];
/**
 * @description 从{randomColor}中随机取一项设置为背景色
 */
const getRandom = () => randomColor[random(0, randomColor.length - 1)];

/** hooks */
export const useTransitionBackground = () => {
  const router = useRouter();

  // 设置初始值
  const start = ref([255, 255, 255]);
  const end = ref([255, 255, 255]);
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
      const { start: s, end: e } = getRandom();
      start.value = s;
      end.value = e;
    }
  };

  /**
   * 将变量添加到{#app}
   */
  const bg = "linear-gradient(45deg, var(--start-transition-color), var(--end-transition-color))";
  document.getElementById("app")?.style.setProperty("background", bg);

  /**
   * 每当value值变化时,设置css变量
   */
  watchEffect(() => {
    document.querySelector("html")?.style.setProperty("--start-transition-color", startColor.value);
    document.querySelector("html")?.style.setProperty("--end-transition-color", endColor.value);
  });
  /**
   * 路由后置狗子,当路由变化时,取meta.color的值.如果没有值,取{randomColor}中的随机颜色值设置为背景色
   */
  router.afterEach((to, form) => {
    if (to.path === form.path) return;
    setColor(to.meta?.color as TransitionBG.colorParams);
  });
};
