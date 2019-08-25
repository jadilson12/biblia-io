<template>
    <v-app-bar app
     
    >
    <v-app-bar-nav-icon
    @click.stop="menu()"
    >
    
    </v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase">
        <span>Bible</span>
        <span class="font-weight-light">.IO</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
        <get-version/>
    </v-app-bar>
</template>
<script>
import GetVersion from '@/components/GetVersion'
import Bus from '@/Bus'
export default {
    components: { Bus,GetVersion },
    data(){
        return{
            drawer: null,

        }
    },
    methods:{
        menu(){
            Bus.$emit('drawer', this.drawer)
        }
    }
    
}
</script>