<template>
  <div class="relative h-screen">
    <n-dialog-provider>
      <n-layout position="absolute">
        <n-layout-header position="absolute">
          <div class="bg-slate-100 h-[44px] text-center leading-[44px]">
            header
          </div>
        </n-layout-header>
        <n-layout-content position="absolute" style="top: 44px" has-sider>
          <aside class="bg-slate-200 w-[80px] text-center">aside</aside>
          <n-layout-content>
            <RouterView v-slot="{ Component }">
              <keep-alive>
                <component v-if="$route.meta.keepAlive" :is="Component" />
              </keep-alive>
              <component v-if="!$route.meta.keepAlive" :is="Component" />
            </RouterView>
          </n-layout-content>
        </n-layout-content>
      </n-layout>
    </n-dialog-provider>
  </div>
</template>

<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NDialogProvider,
  // useMessage,
} from 'naive-ui'
// import MenuBar from '@/components/SideBar/menu.vue'
// import HeadNav from '@/components/Header/HeadNav.vue'
// import { useUserStore } from '@/store/user'
// import { useRouter } from 'vue-router'

// const router = useRouter()

// const userStore = useUserStore()

// const message = useMessage()

// 注入 toast
// window.$message = message

// userStore
//   .restoreLoginState()
//   .then(() => {
//     // router.push('/blogs/all-blogs')
//   })
//   .catch((err) => {
//     console.warn('自动登录失败', err)
//     message.info('登录过期')
//     router.push('/user/login')
//   })
</script>
