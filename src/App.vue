<template>
  <a-result class="header" :title="config.name" :sub-title="config.jobtitle">
    <template #icon>
      <a-avatar src="/about/photo.jpg" :size="{ xs: 100, sm: 150, md: 200, lg: 250, xl: 300, xxl: 350 }"/>
    </template>
    <a-card class="desc">{{config.description}}</a-card>
    <CaretDownOutlined class="down-arrow"/>
  </a-result>
  <a-layout-content v-if="config" class="content">
    <a-divider>Опыт работы {{ Math.floor(startWork) }} лет и {{ Math.ceil(startWork % 1 * 12) }} мес.</a-divider>
    <a-timeline id="experience" :mode="windowWidth < 1200 ? 'left' : 'alternate'">
      <a-timeline-item v-for="(e,i) in config.experience" :color="e.type === 'job' ? 'blue' : 'green'">
        <template v-if="i == 0" #dot><ClockCircleOutlined style="font-size: 16px" /></template>
        <a-badge-ribbon :text="(e.type === 'job' ? 'Работа ' : 'Обучение ') + e.period"
          :color="e.type === 'job' ? 'primary' : 'green'"
          :placement="windowWidth < 1200 || e.type === 'job' ? 'end' : 'start'">
          <a-card :title="e.сompany+'. '+e.title" size="small" :bodyStyle="{textAlign: 'left'}">
            <ul v-if="e.responsibilities && e.responsibilities.length > 0">
              <li v-for="rb in e.responsibilities">{{rb}}</li>
              <template v-if="e.links && e.links.length > 0" v-for="l in e.links" >
                <li><a :href="l.to" target="_blank"><LinkOutlined /> {{ l.text }}</a></li>
              </template>
            </ul>
            <a-divider v-if="e.results && e.results.length > 0" orientation="left" orientation-margin="0px">Результат работы</a-divider>
            <ul v-if="e.results && e.results.length > 0">
              <li v-for="rs in e.results">{{rs}}</li>
            </ul>
            <a-divider orientation="left" orientation-margin="0px">Ключевые навыки</a-divider>
            <a-tag v-if="e.tags && e.tags.length > 0" color="blue" v-for="t in e.tags">{{t}}</a-tag>
          </a-card>
        </a-badge-ribbon>
      </a-timeline-item>
    </a-timeline>
    <a-divider>Мои увлечения</a-divider>
    <a-carousel class="hobbies-carousel" autoplay effect="fade">
      <div v-for="c in config.hobbies">
        <a-row>
          <a-col :span="4" style="text-align: center;">
            <a :href="c.link" target="_blank">
              <img :src="c.icon" style="height: 70px; width: 70px; display: inline-block;"/>
            </a>
          </a-col>
          <a-col :span="20">
            <a-card>{{ c.title }}</a-card>
          </a-col>
        </a-row>
      </div>
    </a-carousel>
    <a-divider>Мои контакты</a-divider>
    <div style="text-align: center;">
      <template v-if="config.contacts && config.contacts.length > 0" v-for="c in config.contacts" >
        <a-popover :overlay-inner-style="{ padding: 0 }">
          <template #content>
            <a-qrcode :value="c.link" :icon="c.icon" :bordered="false" />
          </template>
          <a-button type="link" :href="c.link" target="_blank" style="margin:20px">
            <img style="height:32px;margin-right: 10px;" :src="c.icon" :alt="c.title" :title="c.title"/>
            {{ c.title }}
          </a-button>
        </a-popover>
      </template>
    </div>
  </a-layout-content>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ClockCircleOutlined, LinkOutlined, CaretDownOutlined } from '@ant-design/icons-vue'

import config from './config'
document.title = `${config.name} | ${config.jobtitle}`
const startWork = ref((Date.now() - config.start.getTime()) / 1000 / 60 / 60 / 24 / 365.25 )
const windowWidth = ref(window.innerWidth)
window.addEventListener('resize',() => {
  windowWidth.value = window.innerWidth
})
</script>
<style scoped lang="scss">
.header {
  height: 80vh;
  max-height: 700px;
  position: relative;
  background: url(/bg.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  :deep(> *) {
    color: #fff;
  }
  .down-arrow {
    position: absolute;
    bottom: 1vh;
    left: 48.5vw;
    font-size: 3vh;
    color: #fff;
    animation: look-down 2s ease-out infinite;
  }
  .desc {
    margin: 0 auto;
    max-width: 600px;
    color: #000;
    background: rgba(255,255,255,0.75);
  }
}
.content {
  margin: 0 auto;
  padding: 74px 24px;
  min-height: 280px;
  max-width: 1280px;
  :deep(.ant-timeline-item-head-custom) {
    background: none;
  }
}

</style>
  