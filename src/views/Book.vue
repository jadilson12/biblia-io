<template>
<div>
    <v-card

    >
    <v-img
        class="white--text"
        height="200px"
        src="https://loremflickr.com/320/240/brazil,rio"
    >
        <v-card-title class="align-end fill-height"> {{bookinfo.name}} {{bookinfo.testament}}</v-card-title>
    </v-img>
  
    <v-card-text>
        <span>Autor: <strong>{{ bookinfo.author }} </strong> Grupo: <strong>{{ bookinfo.group }} </strong>  </span><br>
        <span class="text--primary">
        <span>Informações:</span><br>
        <span>{{bookinfo.comment}}</span>
        </span>
    </v-card-text>

    </v-card>
</div>

</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    props:['id'],
    data() {
        return {
            item:{}
        }
    },
    computed:{
        ...mapGetters([
            'chapters',
            'bookinfo'
        ])
    },
    watch: {
            bookinfo(value) {
            if ('error' in value) {
                this.item = {};
            } else {
                this.item = value
            }
        },
    },
    created(){
        this.getBookInfo(this.id)
    },
    methods:{
        ...mapActions([
            'getBook',
            'getBookInfo'
        ]),
    }
}
</script>