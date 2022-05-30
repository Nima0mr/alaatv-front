<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <q-card class="telegram-card">
        <q-card-section>
          <div class="card-title">
            پست تلگرام
          </div>
          <q-separator />
          <q-input class="text-area"
                   filled
                   autogrow
                   v-model="mainTemp"
          />
          <div class="q-ma-lg" />
          <q-btn @click="copy(this.mainTemp)"
                 style="width: 100%; font-size: 18px;"
                 color="primary"
          >کپی کردن متن در کلیپ برد</q-btn>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-2">
    </div>
  </div>
</template>

<script>
import { useQuasar, copyToClipboard } from 'quasar'

export default {
  name: 'TelegramTextGenerator',
  props: {
    nameDars: {
      type: String,
      default: '(نام درس *)'
    },
    videoOrder: {
      type: String,
      default: '(شماره ویدیو *)'
    },
    setName: {
      type: String,
      default: '(نام اصلی *)'
    },
    videoName1: {
      type: String,
      default: '(نام ویدیو اول *)'
    },
    videoName2: {
      type: String,
      default: '(نام ویدیو دوم *)'
    },
    contentUrl: {
      type: String,
      default: '(لینک url *)'
    },
    productUrl: {
      type: String,
      default: '(لینک url محصول *)'
    },
    teacherName: {
      type: String,
      default: '(نام دبیر *)'
    }
  },
  data () {
    return {
      mainTemp: null
    }
  },
  mounted () {
    this.getMainTemplate()
  },
  computed: {},
  methods: {
    getMainTemplate () {
      this.mainTemp = '👀 #فیلم جلسه ' + this.videoOrder + ' #' + this.setName + ' #' + this.nameDars + ' #کنکور  آلاء' + '\n\n' +
        '❤️دوره های ویدئویی کاملا رایگان ▫️▫️▫️▫️' + '\n\n' +
        '🔶 ' + this.videoName1 + '\n' +
        '🔸 ' + this.videoName2 + '\n' +
        '🔹دبیر: ' + this.teacherName + '\n\n' +
        '➖➖➖➖➖➖➖➖➖➖➖➖' + '\n\n' +
        'تماشای فیلم: 🎦👇' + '\n' +
        '🖥  ' + this.contentUrl + '\n' +
        'تهیه جزوه: 🔖👇' + '\n' +
        '📃  ' + this.productUrl + '\n\n' +
        '🆔 @alaa_sanatisharif'
    },
    copy (text) {
      copyToClipboard(text)
        .then(() => {
          this.$q.notify({
            message: 'کپی شد.',
            color: 'primary'
          })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  watch: {
    nameDars: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    videoOrder: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    setName: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    videoName1: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    videoName2: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    contentUrl: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    productUrl: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    },
    teacherName: function (newVal) {
      setTimeout(() => {
        this.getMainTemplate()
      }, 10)
    }
  }
}
</script>

<style scoped lang="scss">
.telegram-card {
  .card-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .text-area {
    margin-top: 16px;
  }
}
</style>
