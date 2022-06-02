<!--to do-->
<!--1- input index needs to get response keys-->

<template>
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
        <template v-if="inputData.props.col.name === 'actions'">
          <q-btn round
                 flat
                 dense
                 size="md"
                 color="info"
                 icon="info"
                 :to="{name:'Admin.Ticket.Show', params: {id: inputData.props.row.id}}">
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
  name: 'User',
  components: {
    EntityCrud
  },
  data () {
    return {
      allProps: {
        config: {
          // api: API_ADDRESS.users.show.base,
          // or
          api: {
            show: API_ADDRESS.ticket.show.base,
            edit: API_ADDRESS.ticket.edit.base,
            create: API_ADDRESS.ticket.create.base,
            index: API_ADDRESS.ticket.index.base
          },
          title: {
            show: 'اطلاعات کاربر',
            edit: 'اطلاعات کاربر',
            create: 'ثبت کاربر جدید',
            index: ' لیست تیکت ها'
          },
          // or
          // title: 'اطلاعات کاربر',
          showRouteName: 'Admin.Ticket.Show',
          editRouteName: 'Admin.Ticket.Edit',
          indexRouteName: 'Admin.Ticket.Index',
          createRouteName: 'Admin.Ticket.Create',
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
                label: '#',
                align: 'left',
                field: row => row.id
              },
              {
                name: 'first_name',
                required: true,
                label: 'نام',
                align: 'left',
                field: row => row.user.first_name
              },
              {
                name: 'last_name',
                required: true,
                label: 'نام خانوادگی',
                align: 'left',
                field: row => row.user.last_name
              },
              {
                name: 'title',
                required: true,
                label: 'عنوان',
                align: 'left',
                field: row => row.title
              },
              {
                name: 'status',
                required: true,
                label: 'وضعیت',
                align: 'left',
                field: row => row.status.title
              },
              {
                name: 'created_at',
                required: true,
                label: 'تاریخ ایجاد',
                align: 'left',
                field: row => row.created_at
              },
              {
                name: 'updated_at',
                required: true,
                label: 'آخرین بروزرسانی',
                align: 'left',
                field: row => row.updated_at
              },
              {
                name: 'department',
                required: true,
                label: 'گروه',
                align: 'left',
                field: row => row.department.title
              },
              {
                name: 'answerd_by',
                required: true,
                label: 'اخرین پاسخگو',
                align: 'left',
                field: row => row.priority.title
              },
              {
                name: 'priority',
                required: true,
                label: 'اولویت',
                align: 'left',
                field: row => row.priority.title
              },
              {
                name: 'score',
                required: true,
                label: 'امتیاز',
                align: 'left',
                field: row => row.rate
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
      defaultInputs: [],
      createInputs: [],
      editInputs: [
        { type: 'input', name: 'title', responseKey: 'ticket.title', label: 'عنوان', col: 'col-md-4', disable: true },
        { type: 'input', name: 'first_name', responseKey: 'ticket.user.first_name', label: 'نام', col: 'col-md-4', disable: true },
        { type: 'input', name: 'first_name', responseKey: 'ticket.user.last_name', label: 'نام خانوادگی', col: 'col-md-4', disable: true },
        { type: 'select', name: 'priority', responseKey: 'ticket.priority.title', label: 'اولویت', col: 'col-md-4', disable: true },
        { type: 'select', name: 'department', responseKey: 'ticket.department.title', label: 'گروه', col: 'col-md-4' },
        { type: 'select', name: 'status', responseKey: 'ticket.status.title', label: 'وضعیت', col: 'col-md-4' },
        { type: 'input', name: 'created_at', responseKey: 'ticket.created_at', label: 'تاریخ ایجاد', col: 'col-md-4', disable: true },
        { type: 'input', name: 'national_code', responseKey: 'ticket.user.national_code', label: 'کد ملی', col: 'col-md-4', disable: true },
        { type: 'input', name: 'major', responseKey: 'ticket.user.major', label: 'رشته', col: 'col-md-4', disable: true },
        { type: 'input', name: 'created_at', responseKey: 'ticket.updated_at', label: 'تاریخ بروز آوری:', col: 'col-md-4', disable: true }
      ],
      showInputs: [
        { type: 'input', name: 'title', responseKey: 'ticket.title', label: 'عنوان', col: 'col-md-4' },
        { type: 'input', name: 'first_name', responseKey: 'ticket.user.first_name', label: 'نام', col: 'col-md-4' },
        { type: 'input', name: 'first_name', responseKey: 'ticket.user.last_name', label: 'نام خانوادگی', col: 'col-md-4' },
        { type: 'input', name: 'priority', responseKey: 'ticket.priority.title', label: 'اولویت', col: 'col-md-4' },
        { type: 'input', name: 'department', responseKey: 'ticket.department.title', label: 'گروه', col: 'col-md-4' },
        { type: 'input', name: 'status', responseKey: 'ticket.status.title', label: 'وضعیت', col: 'col-md-4' },
        { type: 'input', name: 'created_at', responseKey: 'ticket.created_at', label: 'تاریخ ایجاد', col: 'col-md-4' },
        { type: 'input', name: 'national_code', responseKey: 'ticket.user.national_code', label: 'کد ملی', col: 'col-md-4' },
        { type: 'input', name: 'major', responseKey: 'ticket.user.major', label: 'رشته', col: 'col-md-4' },
        { type: 'input', name: 'created_at', responseKey: 'ticket.updated_at', label: 'تاریخ بروز آوری:', col: 'col-md-4' }
      ],
      indexInputs: [
        { type: 'input', name: 'mobile', label: 'شماره همراه', col: 'col-md-3' },
        { type: 'input', name: 'national_code', label: 'کد ملی', col: 'col-md-3' },
        { type: 'input', name: 'first_name', label: 'نام', col: 'col-md-3' },
        { type: 'input', name: 'last_name', label: 'نام خانوادگی', col: 'col-md-3' },
        { type: 'select', options: ['test'], name: 'department', label: 'گروه', col: 'col-md-3' },
        { type: 'select', options: ['test'], name: 'pirority', label: 'اولویت', col: 'col-md-3' },
        { type: 'select', options: ['test'], name: 'status', label: 'وضعیت', col: 'col-md-3' },
        { type: 'input', name: 'email', label: 'شماره سفارش', col: 'col-md-3' },
        { type: 'input', name: 'address', label: 'شماره تیکت', col: 'col-md-3' },
        { type: 'input', name: 'postal_code', label: 'عنوان', col: 'col-md-3' },
        { type: 'date', name: 'from', label: 'از:', col: 'col-md-3' },
        { type: 'date', name: 'to', label: 'تا:', col: 'col-md-3' },
        { type: 'select', options: ['test'], name: 'management', label: 'مسؤل', col: 'col-md-3' },
        { type: 'select', options: ['test'], name: 'operator', label: 'پاسخگو', col: 'col-md-3' },
        { type: 'date', name: 'operatorFrom', label: 'تاریخ پاسخ اپراتور از:', col: 'col-md-3' },
        { type: 'date', name: 'operatorTo', label: 'تاریخ پاسخ اپراتور تا:', col: 'col-md-3' },
        { type: 'Checkbox', name: 'showReported', value: false, label: 'مشاهده موارد گزارش شده', col: 'col-md-6' },
        { type: 'select', options: ['test'], name: 'productSelection', label: 'انتخاب محصول', col: 'col-md-6' }
      ]
    }
  },
  methods: {
    // for index.vue
    getRemoveMessage (row) {
      const firstName = row.first_name
      const lastName = row.last_name
      return 'آیا از حذف ' + firstName + ' ' + lastName + ' اطمینان دارید؟'
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
