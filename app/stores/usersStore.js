import { defineStore } from 'pinia'
import axios from 'axios'


// const API = "https://68648e915b5d8d03397d8138.mockapi.io/api/v1";


export const useUsersStore = defineStore('users', {
    state: () => ({ users: [], loading: false }),
    getters: {
        getUsers: (state) => state.users,
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId)
        },
        getLoading: (state) => state.loading
    },
    actions: {
        async fetchUsers() {
            const config = useRuntimeConfig()
            console.log('Runtime Config:')
            console.log(config.public)
            const API = config.public.apiBase;
            this.loading = true;
            console.log(API)
            const res = await axios.get(`${API}/users`);
            this.users = res.data;
            this.loading = false;
        },
    },
})