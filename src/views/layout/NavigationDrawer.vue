<template>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
        <v-list-item>
        <v-list-item-avatar>
            <v-img src="https://avatars0.githubusercontent.com/u/36805474"></v-img>
        </v-list-item-avatar>
  
        <v-list-item-title>Jadilson</v-list-item-title>
  
        <v-btn
            icon
            @click.stop="drawer = !drawer"
        >
            <font-awesome-icon icon="arrow-left" />
          
        </v-btn>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
  
        <v-list-item 
            v-for="item in items"
            :key="item.title"
            :to="item.to"
        >
            <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import Bus from '@/Bus'
export default {
    components:{Bus},
    data(){
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: '', to:"/" },
                { title: 'About', icon: '', to:"about"},
            ],
        }
    },
    created(){
        Bus.$on('drawer', event => {
            this.drawer = !event
        })
    }
}
</script>