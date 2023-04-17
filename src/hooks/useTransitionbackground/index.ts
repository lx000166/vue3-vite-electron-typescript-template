import { random } from "lodash";

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
      start.value = getRandom("start");
      end.value = getRandom("end");
    }
  };
  const bg = "linear-gradient(45deg, var(--start-transition-color), var(--end-transition-color))";
  document.getElementById("app")?.style.setProperty("background", bg);
  // 设置渐变色 用于背景等过渡
  watchEffect(() => {
    document.querySelector("html")?.style.setProperty("--start-transition-color", startColor.value);
    document.querySelector("html")?.style.setProperty("--end-transition-color", endColor.value);
  });
  router.afterEach((to, form) => {
    console.log(to.path);

    setColor(to.meta?.color as TransitionBG.colorParams);
  });
};
