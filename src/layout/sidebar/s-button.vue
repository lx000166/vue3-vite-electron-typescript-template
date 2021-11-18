<!--
 * @Author: lx000
 * @Date: 2021-11-17 16:39:35
 * @LastEditTime: 2021-11-18 08:45:18
 * @Description: 描述
-->
<script lang="ts" setup>
import { sidebarSwitch, isShow } from '@/hooks/useSidebar'
</script>
<template>
    <div class="s-button absolute transform translate-y-1/2 bottom-1/2 right-0 translate-x-1/2 rotate-180">
        <div class="s-button-rotate transition-transform duration-500" :class="{ Srotate180: isShow }">
            <div class="s-button-border w-14 h-14 rounded-full" @click="sidebarSwitch()">
                <i class="iconfont icon-tuya_huabanfuben"></i>
            </div>
        </div>
    </div>
    <svg>
        <filter id="s-button">
            <feTurbulence x="0" y="0" baseFrequency="0.09" numOctaves="2" seed="2">
                <animate attributeName="baseFrequency" dur="10s" values="0.02;0.05;0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
    </svg>
</template>
<style scoped lang="less">
svg {
    width: 0;
    height: 0;
}
.s-button {
    z-index: 10;

    border-radius: 50%;
    .s-button-border {
        .iconfont {
            font-size: 25px;
            filter: blur(1px);
        }
        transition: all 0.4s ease;
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--start-color-real);
        filter: url(#s-button) blur(0px);

        &::before {
            content: '';
            top: 4px;
            left: 4px;
            right: 4px;
            bottom: 4px;
            border-radius: 50%;
            position: absolute;
            transition: all 0.4s ease;
            border: 1px solid rgba(255, 255, 255, 0);
            box-shadow: 0 0 9px var(--start-color-real), inset 0 0 9px var(--start-color-real);
            animation: animate 5s linear infinite;
        }
        &:hover:before {
            border: 1px solid var(--start-color-real);
        }
        &:active:before {
            border: 1px solid rgba(255, 255, 255, 0.644);
        }
        &:hover {
            .iconfont {
                filter: blur(0px);
            }
        }
    }
}
</style>
