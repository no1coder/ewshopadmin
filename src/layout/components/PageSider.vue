<template>
  <div class="pt-4">
    <div class="m-0">
      <img class="m-auto" src="~@/assets/images/logo.png"  alt="logo"/>
    </div>
    <n-menu :options="menuOptions" :value="defaultKey" inverted @update:value="handleUpdateValue" />

    <!--    <n-menu-->
<!--        :inverted="true"-->
<!--        :collapsed-width="64"-->
<!--        :collapsed-icon-size="22"-->
<!--        :options="menuOptions"-->
<!--        @update:value="selectMenu"-->
<!--        :value="routeKey"-->
<!--    />-->
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted } from 'vue'
const defaultKey = ref('')
import { useRoute, useRouter } from 'vue-router';
import {routeModuleList}  from '@/router/index'
onMounted(()=>{
  const route = useRoute();
  // 获取当前路由的key
  const routeKey = route.name;
  defaultKey.value = routeKey;
})
const router = useRouter()
import {generatorMenu, renderIcon} from '@/utils'
const menuOptions = generatorMenu(routeModuleList)
const handleUpdateValue=(key,item) =>{
  console.log(key,item)
  defaultKey.value = key
    router.push({name:key})
}
</script>

<style scoped>

</style>