<template>
    <div class="home">
        <!-- <img
      alt="Vue logo"
      src="../assets/logo.png"
    > -->
        <MyRecorder msg="Welcome to Vue Recorder" />
    </div>
</template>
  
<script>
// @ is an alias to /src
import MyRecorder from '@/components/MyRecorder.vue'

export default {
    name: 'RecorderView',
    components: {
        MyRecorder
    }
}
</script>