<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
        <v-btn
            text
            v-on="on"
        >
            Verções {{version }}
        </v-btn>
        </template>
        <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="selectVersion(item.version)"
        >
            <v-list-item-title>{{ item.version }}</v-list-item-title>
        </v-list-item>
        </v-list>
    </v-menu>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return {
            selected:'nvi',
            items: [
            { version: 'nvi'},
            { version: 'ra' },
            { version: 'acf'},
            { version: 'kjv'},
            { version: 'bbe'},
            ],
        }
    },
    computed:{
        ...mapGetters([
            'version',
            'selectedbook'
        ]),
    
    },
   
    created(){
        if(localStorage.getItem('v')){
            this.selected = localStorage.getItem('v')
        }
        this.setVersion(this.selected)
    },
    methods: {
        ...mapActions([
            'setVersion',
            'getChapters'
        ]),
        selectVersion(value) {
            this.setVersion(value)
            const newdata = {
                version: this.version,
                book: this.selectedbook.book,
                chapter: this.selectedbook.chapter
            } 
            localStorage.setItem("v", this.version);
            this.getChapters(newdata)

        }
    }
    
    
}
</script>