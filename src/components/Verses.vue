<template>
    <v-container  md align="center">
        <v-card
        flat
            v-if="itens.length !=0"
            class="pa-3"
            >
            <p
                v-for="(item, i) in itens"
                :key="i"
                class="text-justify"
            >
                <strong>{{item.number}}</strong>.{{item.text}}
            </p>
        </v-card>
        <v-row v-else
            alignment="center"
            justify="center"
        >
        <Progress/>
        </v-row>
    </v-container>
</template>
<script>
import Progress from './widget/Progress'
import { mapGetters} from 'vuex'

export default {
    components: {Progress},
    props: ['id'],
    data: () => ({
        itens:[],

    }),  
    computed: {
        ...mapGetters([
            'chapters',
        ]),
    },
    watch: {
            chapters(value) {
            if ('error' in value) {
                alert(value.error);
                this.itens = [];
            } else {
                this.itens = value.verses;
            }
        },
    },  
};
</script>
<style>
    .v-progress-circular {
        margin: 1rem;
    }
    .v-application p {
        margin-bottom: 2px !important; 
    }
</style>