<template>
<v-container>   
    <v-row 
        v-if="books.length !=0"
    > 
        <v-col
            v-for="(item, i) in books"
            :key="i"
            class="mb-3"
        >
            <v-btn 
            hover 
            v-text="item.name" 
            width="200px"
            @click="sendChapter(item.abbrev, (i+1))"
            ></v-btn>
         
        </v-col>
    </v-row>
    <v-row 
        v-else
        alignment="center"
        justify="center"
    >
        <Progress/>
    </v-row>
    </v-container>
</template>
<script>
import Progress from './widget/Progress'

import { mapActions, mapGetters } from 'vuex'

export default {
    components: { Progress },
    props: ['id'],
    computed: {
        ...mapGetters([
            'books',
            'version'
        ]),
    },
    created(){
        this.getBooks()
    },
    methods: {
        ...mapActions([
            'getBooks',
            'setSelectedBook'
        ]),
       
        sendChapter(book, chapter){
            const version = this.version
            const data = {
                version,
                book,
                chapter
            }
            this.setSelectedBook(data)
            this.$emit('showChapters', 'tab-1')
        }
    } 
};
</script>