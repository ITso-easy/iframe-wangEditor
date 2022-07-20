<template>
    <div>
        <h1>
            测试iframe 动态插入 wangEditor使用（Toolbar栏目功能无法正常使用）
        </h1>
        <iframe src=""
                class="iframe_dom"
                width="100%"
                height="400"
                title="测试iframe"
                frameBorder="no"
                border="0"
                marginWidth="0"
                marginHeight="0"
                scrolling="no"
                allowTransparency="yes">
        </iframe>
    </div>
</template>

<script>
    import katexStyleContent from '!!raw-loader!@wangeditor/editor/dist/css/style.css'
    import testEditor from '../components/editor/index'
    export default {
        name: "home",
        mounted() {
            let iframe = document.querySelector('iframe').contentWindow.document
            let body = iframe.querySelector('body')
            let iframeEditorCom = new testEditor().$mount()
            let style = document.createElement('style')
            let html = iframe.getElementsByTagName('html')
            style.innerHTML = katexStyleContent
            html[0].appendChild(style)
            body.appendChild(iframeEditorCom.$el)
        }
    }
</script>

<style scoped>

</style>