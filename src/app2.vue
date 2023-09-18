<template>
  <a-layout-content :style="{ margin: '50px auto', padding: '24px', minHeight: '280px', maxWidth: '1280px' }">
    <h1>Зинов Никита Александрович</h1>
    <h3>Fullstack разработчик</h3>
    <p id="about">
      Начиная с 2014 года я занимаюсь разработкой и сопровождением веб-приложений в банковской сфере.
      Сначалао это было приложение на IIS (VBScript). Потом приложение на Apache Tomcat, которое трансформировалось в большое приложение Node.js + Webpack + Vue.js.
      Которое работает в Kubernetes кластере, а разработка в Docker.
    </p>
    <a-divider />
    <h2 id="experience">Опыт работы {{ Math.floor(startWork) }} лет и {{ Math.ceil(startWork % 1 * 12) }} мес.</h2>
    <a-timeline id="experience" mode="alternate">
      <a-timeline-item v-for="(e,i) in experience" :color="e.type === 'job' ? 'blue' : 'green'">
          <template v-if="i == 0" #dot><ClockCircleOutlined style="font-size: 16px" /></template>
          <h3>{{e.сompany}}. {{e.title}}</h3>
          <small>{{ e.type === 'job' ? 'Работа' : 'Обучение' }} {{e.period}}</small>
          <ul v-if="e.responsibilities && e.responsibilities.length > 0">
            <li v-for="rb in e.responsibilities">{{rb}}</li>
          </ul>
          <h4 v-if="e.results && e.results.length > 0">Результаты работы:</h4>
          <ul v-if="e.results && e.results.length > 0">
            <li v-for="rs in e.results">{{rs}}</li>
          </ul>
      </a-timeline-item>
    </a-timeline>
    <a-float-button-group shape="square" :style="{ right: '24px' }">
      <a-float-button description="hh"></a-float-button>
      <a-float-button description="vk"></a-float-button>
      <a-back-top :visibility-height="0" />
    </a-float-button-group>
  </a-layout-content>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ClockCircleOutlined } from '@ant-design/icons-vue'
import config, { ExperienceType } from './config'

const startWork = ref((Date.now() - config.start.getTime()) / 1000 / 60 / 60 / 24 / 365.25 )

const experience = ref<ExperienceType[]>(config.experience)
</script>
<style scoped>
</style>
  