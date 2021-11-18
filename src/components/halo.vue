<!--
 * @Author: lx000
 * @Date: 2021-11-17 16:05:13
 * @LastEditTime: 2021-11-17 20:52:39
 * @Description: 动态光环组件
-->
<template>
  <div class="halo inline-block">
    <span class="circleText text-4xl fixed">
      <slot></slot>
    </span>
    <div class="circle"></div>
    <svg>
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
          <animate
            attributeName="baseFrequency"
            dur="60s"
            values="0.02;0.05;0.02"
            repeatCount="indefinite"
          />
        </feTurbulence>

        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
    <svg>
      <filter id="text">
        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="2" seed="2">
          <animate
            attributeName="baseFrequency"
            dur="60s"
            values="0.02;0.05;0.02"
            repeatCount="indefinite"
          />
        </feTurbulence>

        <feDisplacementMap in="SourceGraphic" scale="15" />
      </filter>
    </svg>
  </div>
</template>

<style lang="less"  scoped >
.halo * {
  box-sizing: border-box;
}
.halo {
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  width: 100%;
  height: 100%;
  filter: url(#wavy) blur(0px);
}
.circleText {
  filter: url(#text) blur(0px);
  color: #fff;
  text-shadow: 0 0 1.3rem #fff;
}
.circle::before,
.circle::after {
  content: "";
  position: absolute;
  top: 12.5%;
  left: 12.5%;
  right: 12.5%;
  bottom: 12.5%;
  border: 0.94rem solid #fff;
  border-radius: 50%;
}
.circle::before {
  box-shadow: 0 0 1.875rem #0f0, inset 0 0 1.875rem #0f0;
  animation: animate 5s linear infinite;
}
.circle::after {
  box-shadow: 0 0 0.437rem #fff, inset 0 0 1rem #fff;
}

@keyframes animate {
  0% {
    // box-shadow: 0 0 1.875rem #0f0, inset 0 0 1.875rem #0f0;
    filter: hue-rotate(0deg);
  }
  // 20% {
  //   box-shadow: 0 0 2.5rem #0f0, inset 0 0 2.5rem #0f0;
  // }
  // 40% {
  //   box-shadow: 0 0 1.25rem #0f0, inset 0 0 1.25rem #0f0;
  // }
  // 60% {
  //   box-shadow: 0 0 3.75rem #0f0, inset 0 0 3.75rem #0f0;
  // }
  // 80% {
  //   box-shadow: 0 0 3.125rem #0f0, inset 0 0 3.125rem #0f0;
  // }
  100% {
    // box-shadow: 0 0 1.875rem #0f0, inset 0 0 1.875rem #0f0;
    filter: hue-rotate(360deg);
  }
}
svg {
  width: 0;
  height: 0;
}
</style>