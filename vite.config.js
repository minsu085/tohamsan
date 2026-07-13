import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    mode: 'development',
    outDir: 'dist',       // 빌드된 파일이 생성될 디렉토리 경로
    assetsDir: 'assets',  // 정적 파일이 생성될 디렉토리 경로 (기본값은 빌드 디렉토리 안에 'assets')
    manifest: true,       // manifest 파일 생성 여부
    minify: true,         // 코드 압축 여부
    sourcemap: false,     // 소스맵 파일 생성 여부
    chunkSizeWarningLimit: 5000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
