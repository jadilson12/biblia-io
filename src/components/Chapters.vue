<template>
    <v-container  md align="center">
    <v-row
        alignment="center"
        justify="center"
    >
    <v-btn block  color="yellow accent-2" :to="`/book/${selectedbook.book}`">informação do livro</v-btn>
    </v-row>
        <v-row>
            <v-col cols="12">
            <v-row
                alignment="center"
                justify="center"
            >
                <v-btn
                v-for="c in itens"
                :key="c"
                class="ma-3 pa-2"
                @click="getVerses(selectedbook.book, c)"
                >
                {{ c }}
                </v-btn>
            </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
export default { 
    computed: {
        ...mapGetters([
            'books',
            'selectedbook',
            'chapters',
            'version',
        ]),
        itens(){
            const book = this.books.find(e => e.abbrev == this.selectedbook.book)
            return book.chapters
        }
    },
 
    methods: {
        ...mapActions([
            'getChapters',
        ]),
        getVerses(book,chapter){
            const version = localStorage.getItem('v') ? localStorage.getItem('v') : this.version
            const data = {
                version,
                book,
                chapter
            }   
            this.getChapters(data)
            this.$emit('showVerses', 'tab-2')
        }
    }
 
};
</script>