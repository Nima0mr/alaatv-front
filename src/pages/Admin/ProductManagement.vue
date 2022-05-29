<template>
  <!--  Todo : user.vue is also a demo for entity-crud; please do not delete unnecessary stuff -->
  <entity-crud
    v-model:edit-inputs="editInputs"
    v-model:index-inputs="indexInputs"
    v-model:show-inputs="showInputs"
    v-model:create-inputs="createInputs"
    v-model:default-inputs="defaultInputs"
    v-bind="allProps"
  >
    <template v-slot:entity-crud-table-cell="{inputData, showConfirmRemoveDialog}">
      <q-td :props="inputData.props">
        <template v-if="inputData.props.col.name === 'photo'">
          <q-avatar>
            <q-img
              :src="inputData.props.value"
              placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
              spinner-color="white"
              style="height: 50px; max-width: 50px"
            />
          </q-avatar>
        </template>
        <template v-else-if="inputData.props.col.name === 'active'">
          <q-chip
            :color="checkActiveColor(inputData.props.value)"
          >
            {{ inputData.props.value }}
          </q-chip>
        </template>
        <template v-else-if="inputData.props.col.name === 'actions'">
          <q-btn round
                 flat
                 dense
                 size="md"
                 color="info"
                 icon="info"
                 :to="{name:'Admin.ProductManagement.Show', params: {id: inputData.props.row.id}}">
            <q-tooltip>
              مشاهده
            </q-tooltip>
          </q-btn>
          <q-btn round
                 flat
                 dense
                 size="md"
                 color="negative"
                 icon="delete"
                 class="q-ml-md"
                 @click="showConfirmRemoveDialog(inputData.props.row, 'id', getRemoveMessage(inputData.props.row))">
            <q-tooltip>
              حذف
            </q-tooltip>
          </q-btn>
        </template>
        <template v-else>
          {{ inputData.props.value }}
        </template>
      </q-td>
    </template>
  </entity-crud>
</template>

<script>
import API_ADDRESS from 'src/api/Addresses'
import EntityCrud from 'components/EntityCrud'

export default {
  name: 'ProductManagement',
  components: {
    EntityCrud
  },
  data () {
    return {
      allProps: {
        config: {
          api: API_ADDRESS.users.show.base,
          // or
          // api: {
          //   show: API_ADDRESS.users.show.base,
          //   edit: API_ADDRESS.users.edit.base,
          //   create: API_ADDRESS.users.create.base,
          //   index: API_ADDRESS.users.index.base
          // },
          title: {
            show: 'اطلاعات محصول',
            edit: 'اطلاعات محصول',
            create: 'ثبت محصول جدید',
            index: 'لیست محصولات'
          },
          // or
          // title: 'اطلاعات کاربر',
          showRouteName: 'Admin.ProductManagement.Show',
          editRouteName: 'Admin.ProductManagement.Edit',
          indexRouteName: 'Admin.ProductManagement.Index',
          createRouteName: 'Admin.ProductManagement.Create',
          tableKeys: {
            data: 'data',
            total: 'total',
            currentPage: 'page',
            perPage: 'per_page',
            pageKey: 'page'
          },
          table: {
            columns: [
              {
                name: 'id',
                required: true,
                label: 'id',
                align: 'left',
                field: row => row.id
              },
              {
                name: 'title',
                required: true,
                label: 'نام کالا',
                align: 'left',
                field: row => row.first_name
              },
              {
                name: 'base_price',
                required: true,
                label: 'قیمت پایه',
                align: 'left',
                field: row => row.first_name
              },
              {
                name: 'discount',
                required: true,
                label: 'تخفیف',
                align: 'left',
                field: row => row.first_name
              },
              {
                name: 'photo',
                required: true,
                label: 'عکس',
                align: 'left',
                field: row => row.photo
              },
              {
                name: 'product_type',
                required: true,
                label: 'نوع',
                align: 'left',
                field: row => row.first_name
              },
              {
                name: 'active',
                required: true,
                label: 'فعال/غیر فعال',
                align: 'left',
                field: row => row.first_name
              },
              {
                name: 'actions',
                required: true,
                label: '',
                align: 'left',
                field: ''
              }
            ],
            data: []
          }
        }
      },
      defaultInputs: [
        { type: 'file', name: 'photo', responseKey: 'data.photo', size: '250px', col: 'col-md-3' },
        { type: 'space', col: 'col-md-12' },
        { type: 'input', name: 'id', responseKey: 'data.id', label: 'شناسه', col: 'col-md-3' },
        { type: 'input', name: 'id', responseKey: 'data.id', label: 'شناسه محصول پرنت', col: 'col-md-3' },
        { type: 'input', name: 'title', responseKey: 'data.title', label: 'نام کالا', col: 'col-md-3' },
        { type: 'input', name: 'redirect_url', responseKey: 'data.redirect_url', label: 'آدرس ریدایرکت', col: 'col-md-3' },
        { type: 'select', name: 'redirect_code', responseKey: 'data.product_type.display_name', options: [{ label: '301 (دائمی)', value: 301 }, { label: '302 (موقتی)', value: 302 }], label: 'کد ریدایرکت', col: 'col-md-3' },
        { type: 'input', name: 'order', responseKey: 'data.order', label: 'ترتیب', col: 'col-md-3' },
        { type: 'input', name: 'intro_video', responseKey: 'data.intro.video', label: 'لینک فیلم معرفی', col: 'col-md-3' },
        { type: 'input', name: 'intro_photo', responseKey: 'data.intro.photo', label: 'تامبنیل کلیپ', col: 'col-md-3' },
        { type: 'input', name: 'base_price', responseKey: 'data.base_price', label: 'قیمت پایه', col: 'col-md-3' },
        { type: 'optionGroupRadio', name: 'is_free', options: [{ label: 'رایگان باشد', value: 1 }, { label: 'رایگان نباشد', value: 0 }], responseKey: 'data.is_free', label: '', col: 'col-md-3' },
        { type: 'input', name: 'discount', responseKey: 'data.discount', label: 'تخفیف (%)', col: 'col-md-3' },
        { type: 'optionGroupRadio', name: 'amountLimit', options: [{ label: 'نامحدود', value: 0 }, { label: 'محدود', value: 1 }], responseKey: '', label: 'محدودیت موجودی', col: 'col-md-3' },
        { type: 'input', name: 'amount', responseKey: 'data.amount', label: 'تعداد موجود', col: 'col-md-3' },
        { type: 'optionGroupRadio', name: 'enable', options: [{ label: 'غیرفعال', value: 0 }, { label: 'فعال', value: 1 }], responseKey: 'data.enable', label: 'وضعیت', col: 'col-md-3' },
        { type: 'optionGroupRadio', name: 'display', options: [{ label: 'عدم نمایش', value: 0 }, { label: 'نمایش', value: 1 }], responseKey: 'data.display', label: 'نمایش', col: 'col-md-3' },
        { type: 'select', name: 'attribute_set', options: [{ label: 'اردو', value: 1 }, { label: 'همایش', value: 2 }, { label: 'فیلم استودیو', value: 3 }, { label: 'جزوه درس', value: 4 }, { label: 'کتاب', value: 5 }, { label: 'پیش فرض', value: 6 }, { label: 'محصول اشتراک', value: 7 }, { label: 'آزمون', value: 8 }], responseKey: 'data.attribute_set.id', label: 'نوع محتوا', col: 'col-md-3' },
        // null response key ------------------------------------------------------------------------------
        { type: 'select', name: 'attribute_set', options: [{ label: 'اردو', value: 1 }, { label: 'همایش', value: 2 }, { label: 'فیلم استودیو', value: 3 }, { label: 'جزوه درس', value: 4 }, { label: 'کتاب', value: 5 }, { label: 'پیش فرض', value: 6 }, { label: 'محصول اشتراک', value: 7 }, { label: 'آزمون', value: 8 }], responseKey: 'data.attribute_set.id', label: 'سکشن محتوا', col: 'col-md-3' },
        // ------------------------------------------------------------------------------------------------
        { type: 'input', name: 'order', responseKey: 'data.order', label: 'اسلوگان', col: 'col-md-3' },
        { type: 'input', name: 'updated_at', responseKey: 'data.updated_at', label: 'نمایان شدن برای کاربران', col: 'col-md-3' },
        { type: 'input', name: 'created_at', responseKey: 'data.created_at', label: 'تاریخ درج', col: 'col-md-3' },
        // null response key ------------------------------------------------------------------------------
        { type: 'input', name: 'order', responseKey: 'data.order', label: 'آیدی دبیر', col: 'col-md-3' },
        // ------------------------------------------------------------------------------------------------
        { type: 'input', name: 'order', responseKey: 'data.attributes.info.teacher', label: 'نام دبیر', col: 'col-md-3' },
        // null response key ------------------------------------------------------------------------------
        { type: 'optionGroupCheckbox', multiple: true, options: [{ label: 'درج کیفیت hq', value: 0 }, { label: 'درج کیفیت HD', value: 1 }, { label: 'درج کیفیت 240p', value: 2 }], name: 'enable', value: [1], label: 'کیفیت محتوا', col: 'col-md-6' },
        // ------------------------------------------------------------------------------------------------
        { type: 'input-editor', name: 'short_description', responseKey: 'data.description.short', label: 'توضیحات مختصر', col: 'col-md-12' },
        { type: 'input-editor', name: 'long_description', responseKey: 'data.description.long', label: 'توضیحات اجمالی', col: 'col-md-12' },
        { type: 'input-editor', name: 'special_description', responseKey: 'data.description.special', label: 'توضیحات خاص', col: 'col-md-12' },
        { type: 'select', name: 'tags', options: [], responseKey: 'data.tags', multiple: true, useChips: true, createNewValue: true, label: 'تگ ها', col: 'col-md-3' },
        { type: 'select', name: 'sample_contents', options: [], responseKey: 'data.sample_contents.tags', multiple: true, useChips: true, createNewValue: true, label: 'کانتنت های معرفی کننده محصول', col: 'col-md-3' },
        { type: 'select', name: 'recommender_contents', options: [], responseKey: 'data.recommender_contents.recommenders.contents', multiple: true, useChips: true, createNewValue: true, label: 'کانتنت های پیشنهاد دهنده محصول', col: 'col-md-3' },
        { type: 'select', name: 'recommender_sets', options: [], responseKey: 'data.recommender_contents.recommenders.sets', multiple: true, useChips: true, createNewValue: true, label: 'ست های دارای کانتنتهای پیشنهاد دهنده محصول', col: 'col-md-3' },
        // null response key ------------------------------------------------------------------------------
        { type: 'input', name: 'order', responseKey: '', label: 'ابر عنوان', col: 'col-md-6' },
        { type: 'input', name: 'order', responseKey: '', label: 'ابر توضیح', col: 'col-md-6' }
        // ------------------------------------------------------------------------------------------------
      ],
      createInputs: [],
      editInputs: [],
      showInputs: [],
      indexInputs: [
        { type: 'input', name: 'name', value: null, label: 'نام', col: 'col-md-4' },
        { type: 'input', name: 'shortDescription', value: null, label: 'توضیحات کوتاه', col: 'col-md-4' },
        { type: 'input', name: 'longDescription', value: null, label: 'توضیحات اجمالی', col: 'col-md-4' },
        { type: 'select', name: 'type', value: null, options: ['غیر ساده', 'ساده'], label: 'ساده', col: 'col-md-4' },
        { type: 'select', name: 'isFree', value: null, options: ['غیر رایگان', 'رایگان'], label: 'رایگان / غیر رایگان', col: 'col-md-4' },
        { type: 'select', name: 'status', value: null, options: ['فعال', 'غیر فعال'], label: 'وضعیت', col: 'col-md-4' },
        { type: 'select', name: 'show', value: null, options: ['عدم نمایش', 'نمایش'], label: 'نمایش / عدم نمایش', col: 'col-md-4' }
      ]
    }
  },
  methods: {
    // for index.vue
    getRemoveMessage (row) {
      const title = row.title
      return 'آیا از حذف ' + title + ' اطمینان دارید؟'
    },
    checkActiveColor (e) {
      if (e === 0) {
        return 'red'
      } else {
        return 'green'
      }
    }
  },
  watch: {
    // editInputs: {
    //   handler (newValue, oldValue) {
    //     console.log('inputs', newValue)
    //   },
    //   deep: true
    // }
  },
  created () {}
}
</script>

<style scoped>

</style>
