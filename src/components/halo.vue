<!--
 * @Author: lx000
 * @Date: 2021-11-17 16:05:13
 * @LastEditTime: 2022-08-23 18:26:40
 * @Description: 动态光环组件
-->
<template>
  <div class="halo">
    <div class="haloTextWapper fixed"><span class="haloText">WELCOME</span></div>

    <div class="circle"></div>
    <svg>
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
          <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02"
            repeatCount="indefinite" />
        </feTurbulence>

        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
    <svg>
      <filter id="text">
        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="2" seed="2">
          <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02"
            repeatCount="indefinite" />
        </feTurbulence>

        <feDisplacementMap in="SourceGraphic" scale="12" />
      </filter>
    </svg>
  </div>
</template>

<style  scoped>
.halo * {
  box-sizing: border-box;
}

.halo {
  --shadow-color: #415465;
  width: 560px;
  height: 560px;
  position: relative;
  display: flex;
  font-size: 2.25rem
    /* 36px */
  ;
  align-items: center;
  justify-content: center;
}

.haloTextWapper {
  display: inline-block;
}

.circle {
  width: 100%;
  height: 100%;
  filter: url(#wavy) blur(0px);
}

.circle::before,
.circle::after {
  content: "";
  position: absolute;
  top: 5.5%;
  left: 5.5%;
  right: 5.5%;
  bottom: 5.5%;
  border: 0.94rem solid rgba(255, 255, 255, 0);
  border-radius: 50%;
}

.circle::before {
  box-shadow: 0 0 1.875rem var(--shadow-color), inset 0 0 1.875rem var(--shadow-color);
  animation: animate 5s linear infinite;
}

.circle::after {
  box-shadow: 0 0 0.437rem #fff, inset 0 0 1rem #fff;
}

@keyframes animate {
  0% {
    box-shadow: 0 0 1.875rem var(--shadow-color), inset 0 0 1.875rem var(--shadow-color);
    filter: hue-rotate(0deg);
  }

  20% {
    box-shadow: 0 0 2.5rem var(--shadow-color), inset 0 0 2.5rem var(--shadow-color);
  }

  40% {
    box-shadow: 0 0 1.27rem var(--shadow-color), inset 0 0 1.75rem var(--shadow-color);
  }

  50% {
    box-shadow: 0 0 1.27rem var(--shadow-color), inset 0 0 1.75rem var(--shadow-color);
    filter: hue-rotate(60deg);
  }

  60% {
    box-shadow: 0 0 2.75rem var(--shadow-color), inset 0 0 2.75rem var(--shadow-color);
  }

  80% {
    box-shadow: 0 0 2rem var(--shadow-color), inset 0 0 2rem var(--shadow-color)
  }

  100% {
    box-shadow: 0 0 1.875rem var(--shadow-color), inset 0 0 1.875rem var(--shadow-color);
    filter: hue-rotate(0deg);
  }
}

@keyframes text {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

svg {
  width: 0;
  height: 0;
}
</style>
