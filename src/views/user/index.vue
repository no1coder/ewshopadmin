<template>
  <div>
     <div class="h-24 w-full bg-white p-3 mb-6">
        <div>
            <span class="text-slate-400 pr-1">首页</span> / <span class="pl-1">用户列表</span>
            <div class="pt-3 text-xl text-black font-medium">
              用户管理
            </div>
        </div>
     </div>
    <div class="content px-4">
        <div class="bg-white pt-4 pr-6">
          <n-form
              ref="formRef"
              inline
              :label-width="80"
              :model="formSearch"
              label-placement="left"
          >
            <n-form-item label="姓名" path="name">
              <n-input v-model:value="formSearch.name" placeholder="输入姓名" />
            </n-form-item>
            <n-form-item label="邮箱" path="email">
              <n-input v-model:value="formSearch.email" placeholder="请输入邮箱" />
            </n-form-item>

            <n-form-item class="ml-auto">
              <n-button attr-type="button" @click="">
                搜索
              </n-button>
            </n-form-item>
          </n-form>
        </div>
        <div class="mt-4 bg-white">
          <div class="text-xl pl-4 py-4">用户列表</div>
          <div>

            <n-data-table
                :columns="columns"
                :data="data"
                :pagination="pagination"
                :bordered="false"
            />
            <div class="p-4 flex justify-end pr-10">
              <n-pagination v-model:page="page" :page-count="100" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h,ref } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
const page = ref(1)
type Song = {
  no: number
  title: string
  length: string
}
const message = useMessage()

const createColumns = ({
                         play
                       }: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              onClick: () => play(row)
            },
            { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]
const columns = createColumns({
  play (row: Song) {
    message.info(`Play ${row.title}`)
  }
})
const pagination = ref(false as const)
const formSearch = ref({
  name:'',
  email:''
})
</script>

<style scoped>

</style>