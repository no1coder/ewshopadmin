<template>
<!--  <div class="pt-4">-->
<!--    <div class="m-0">-->
<!--      <img class="m-auto" src="~@/assets/images/logo.png"  alt="logo"/>-->
<!--    </div>-->
<!--    <n-menu-->
<!--        :inverted="true"-->
<!--        :collapsed-width="64"-->
<!--        :collapsed-icon-size="22"-->
<!--        :options="menuOptions"-->
<!--        @update:value="selectMenu"-->
<!--        :value="routeKey"-->
<!--    />-->
<!--  </div>-->
</template>

<script setup>
// import {  ref } from 'vue'
// import {generatorMenu, renderIcon} from "@/utils";
// import {
//   BookOutline as BookIcon,
//   PersonOutline as PersonIcon
// } from '@vicons/ionicons5'
// import { useRoute, useRouter } from 'vue-router';

// import router, {routeModuleList} from '@/router/index';
// console.log(generatorMenu(routeModuleList),123);
// const route = useRouter()
// console.log(route,1111111111)
// console.log(routeModuleList,123)
// const menuOptions = ref(generatorMenu(routeModuleList))
// // 获取当前页面的路由名称
// const getCurrentRouteName = () => {
//   const { name } = route.currentRoute.value
//   return name
// }
// console.log(getCurrentRouteName(),'11111111');
// const routeKey = ref(getCurrentRouteName())
// const selectMenu = (key) =>{
//   console.log(key,123)
//   routeKey.value = key
//   router.push({name:key})
// }
// const menuOptions = ref([
//   {
//     label: '且听风吟',
//     key: 'hear-the-wind-sing',
//     icon: renderIcon(BookIcon)
//   },
//   {
//     label: '1973年的弹珠玩具',
//     key: 'pinball-1973',
//     icon: renderIcon(PersonIcon),
//     children: [
//       {
//         label: '鼠',
//         key: 'rat'
//       }
//     ]
//   },
//   {
//     label: '寻羊冒险记',
//     key: 'a-wild-sheep-chase',
//     icon: renderIcon(BookIcon)
//   },
//   {
//     label: '舞，舞，舞',
//     key: 'dance-dance-dance',
//     icon: renderIcon(BookIcon),
//     children: [
//       {
//         type: 'group',
//         label: '人物',
//         key: 'people',
//         children: [
//           {
//             label: '叙事者',
//             key: 'narrator',
//             icon: renderIcon(PersonIcon)
//           },
//           {
//             label: '羊男',
//             key: 'sheep-man',
//             icon: renderIcon(PersonIcon)
//           }
//         ]
//       }
//
//     ]
//   }
// ])

</script>

<style scoped>

</style>