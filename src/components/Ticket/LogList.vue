<template>
  <div v-for="item in logArray"
       :key="item"
       style="display: flex">
    <div class="log-date"
         :style="{color : setMainColor(item), borderLeft: '3px ' + 'solid ' + setMainColor(item)}">
      {{ convertToShamsi(item.created_at, 'date') }}
    </div>
    <div class="log-info">
      <div>
        <div class="log-text">
          {{item.action}}
          <span style="display: flex; margin: 5px 0;"
                v-if="item.before">
            <br>
            از
            {{item.before}}
          </span>
          <span style="display: flex; margin: 5px 0;"
                v-if="item.after">
            <br>
            به
            {{item.after}}
          </span>
        </div>
        <div class="log-time">
          {{ convertToShamsi(item.created_at, 'time') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinDateOptions } from 'src/mixin/Mixins'

export default {
  name: 'logList',
  mixins: [mixinDateOptions],
  props: {
    logArray: {
      type: Array,
      default: null
    }
  },
  data () {
    return {}
  },
  methods: {
    setMainColor (obj) {
      if (obj.action === 'تغییر دپارتمان تیکت') {
        return '#ffb822'
      } else if (obj.action === 'ثبت پیام برای تیکت') {
        return '#36a3f7'
      } else if (obj.action === 'تغییر وضعیت تیکت') {
        return '#716aca'
      } else if (obj.action === 'ثبت تیکت') {
        return '#34bfa3'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .log-date {
      align-items: center;
      display: grid;
      padding: 0 20px;
      margin: 10px 0;
      width: 120px;
      font-size: 16px;
    }
    .log-info {
      padding-left: 20px;
      margin: 10px 0;
      align-items: center;
      display: grid;
    }
    .log-time{
      color: #6a6a6a;
    }
</style>
