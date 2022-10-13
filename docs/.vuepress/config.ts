import {defineUserConfig} from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Interview Notes',
    description: '技术面试基础知识, 算法, 网络, 操作系统, 数据库, Python',
    head: [['link', { rel: 'shortcut icon', href: 'favicon.ico' }]],
    theme: defaultTheme({
        // Public 文件路径
        logo: 'favicon.ico',
    }),
    base: '/interview/'
})

