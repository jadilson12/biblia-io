<template>
        <v-card
            alignment="center"
            justify="center"
        >
                <v-tabs
                v-model="model"
                centered
                >
                <v-tab
                    v-for="(value,i) in tab"
                    :key="i"
                    :href="`#tab-${i}`"
                >
                {{ value }}
                </v-tab>
                </v-tabs>
            <v-tabs-items v-model="model">
            <v-tab-item
                :value="`tab-${0}`"
            >
                <v-card flat centered>
                <Books
                @showChapters="model = $event"
                />
                </v-card>
            </v-tab-item>
            <v-tab-item
                :value="`tab-${1}`"
            >
                <v-card flat centered>
                <Chapters
                @showVerses="model = $event"
                />
                </v-card>
            </v-tab-item>
            <v-tab-item
                :value="`tab-${2}`"
            >
                <Verses/>
            </v-tab-item>
            </v-tabs-items>
        </v-card>
</template>
<script>
import Books from '../components/Books';
import Chapters from '../components/Chapters';
import Verses from '../components/Verses';
export default {
    components:{
        Books, 
        Chapters,
        Verses, 
    },
    data () {
        return {
            model:'tab-0',
            tab: ['Livros', 'Capítulos', 'Versículo'],
        }
    
    }
}
</script>