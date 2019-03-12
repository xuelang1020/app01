<template>
  <div id="app">
    <Form/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Life from './components/Life'
import Bind from './components/Bind'
import DataDriver from './components/DataDriver'
import Style from './components/Style'
import Flow from './components/Flow'
import List from './components/List'
import Event from './components/Event'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Life,
    Bind,
    DataDriver,
    Style,
    Flow,
    List,
    Event,
    Form
  }
}
</script>

<style>
#app {
  font: normal normal 12px "微软雅黑","Microsoft YaHei"
}
</style>
