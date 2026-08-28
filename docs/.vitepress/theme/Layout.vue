<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData, useRouter } from "vitepress";
import { watchEffect } from "vue";

// 旧地址跳转：页面 frontmatter 声明 redirectTo 时，客户端侧直接跳到新地址。
// 无 JS 环境由页面里的 meta refresh 兜底。
const { frontmatter } = useData();
const router = useRouter();

watchEffect(() => {
  const to = frontmatter.value.redirectTo;
  if (typeof window !== "undefined" && typeof to === "string" && to) {
    router.go(to);
  }
});
</script>

<template>
  <DefaultTheme.Layout />
</template>
