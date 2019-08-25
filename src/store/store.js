import Vue from 'vue'
import Vuex from 'vuex'
import * as axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
        selectedbook: [],
        chapters: [],
        bookinfo: {},
        version: ''

    },
    getters: {
        books: state => state.books,
        selectedbook: state => state.selectedbook,
        chapters: state => state.chapters,
        bookinfo: state => state.bookinfo,
        version: state => state.version
    },
    mutations: {
        getBooks(state, payload) {
            state.books = payload
        },

        setSelectedBook(state, payload) {
            state.selectedbook = payload
        },

        getChapters(state, payload) {
            state.chapters = payload
        },

        getBookInfo(state, payload) {
            state.bookinfo = payload
        },

        setVersion(state, payload) {
            state.version = payload
        }
    },
    actions: {
        getBooks({ commit }) {
            
            axios.get('api/books/').then(res => {
                commit('getBooks', res.data);
            })
        },
        setSelectedBook({ commit }, payload) {
            commit('setSelectedBook', payload);
        },
        getChapters({ commit }, data) {
            
            axios.get(`api/verses/${data.version}/${data.book}/${data.chapter}`).then(res => {
                commit('getChapters', res.data);
            })
        },
        getBookInfo({commit}, book){
            axios.get(`/api/books/${book}`).then(res => {
                commit('getBookInfo', res.data);
            })
        },
        setVersion({ commit }, payload) {
            commit('setVersion', payload);
        },
    },


})