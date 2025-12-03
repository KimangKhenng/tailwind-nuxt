<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">គ្រប់គ្រងអ្នកប្រើ</h1>

        <!-- Create User Form -->
        <div class="bg-white p-4 rounded shadow mb-6">
            <h2 class="font-semibold mb-2">បង្កើតអ្នកប្រើ</h2>
            <div class="grid grid-cols-2 gap-4">
                <input v-model="formUser.name" placeholder="Name" class="p-2 border rounded" />
                <input v-model="formUser.email" placeholder="Email" class="p-2 border rounded" />
                <input v-model="formUser.age" type="number" placeholder="Age" class="p-2 border rounded" />
                <input v-model="formUser.major" placeholder="Major" class="p-2 border rounded" />
                <input v-model="formUser.salary" placeholder="Salary" class="p-2 border rounded" />
            </div>
            <button @click="createUser" class="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Create</button>
        </div>

        <!-- <button @click="fetchUsers" class="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Load Users</button> -->
        <div v-if="loading" class="text-gray-600">Loading...</div>

        <!-- Users List -->
        <div v-else class="grid gap-4">
            <UserCard v-for="u in users" :key="u.id" :user="u">
                <div class="flex space-x-4">
                    <button @click="navigateToUser(u.id)"
                        class="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:cursor-pointer">View</button>
                    <button @click="editUser(u)"
                        class="mt-2 px-3 py-1 bg-yellow-500 text-white rounded hover:cursor-pointer">Edit</button>
                    <button @click="deleteUser(u.id)"
                        class="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:cursor-pointer">Delete</button>
                </div>
            </UserCard>
        </div>

        <!-- Update User Modal -->
        <div v-if="editingUser" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div class="bg-white p-6 rounded shadow max-w-md w-full">
                <h2 class="font-bold mb-3">Update User</h2>

                <input v-model="editForm.name" placeholder="Name" class="p-2 border rounded w-full mb-2" />
                <input v-model="editForm.email" placeholder="Email" class="p-2 border rounded w-full mb-2" />
                <input v-model="editForm.age" type="number" placeholder="Age" class="p-2 border rounded w-full mb-2" />
                <input v-model="editForm.major" placeholder="Major" class="p-2 border rounded w-full mb-2" />
                <input v-model="editForm.salary" placeholder="Salary" class="p-2 border rounded w-full mb-2" />

                <div class="flex gap-2 mt-3">
                    <button @click="updateUser" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
                    <button @click="editingUser = null" class="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>

import { useUsersStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';
const userStore = useUsersStore()


import { useRouter } from 'vue-router'
const router = useRouter()

const { fetchUsers } = userStore
const { getLoading: loading, getUsers: users } = storeToRefs(userStore)

const formUser = ref({ name: '', email: '', age: '', major: '', salary: '' })
const editingUser = ref(null)
const editForm = ref({})

onMounted(async () => {
    await fetchUsers();
})
const navigateToUser = (id) => {
    router.push(`/users/${id}`)
}
const createUser = async () => {
    await axios.post(`${API}/users`, formUser.value);
    formUser.value = { name: '', email: '', age: '', major: '', salary: '' };
    await fetchUsers();
}
const editUser = (u) => {
    editingUser.value = u.id;
    editForm.value = { ...u };
}
const updateUser = async () => {
    await axios.put(`${API}/users/${editingUser.value}`, editForm.value);
    editingUser.value = null;
    await fetchUsers();
}
const deleteUser = async (id) => {
    await axios.delete(`${API}/users/${id}`);
    await fetchUsers();
}
</script>
<!-- <script>
const API = "https://68648e915b5d8d03397d8138.mockapi.io/api/v1";
import { useUsersStore } from '@/stores/usersStore';
import axios from 'axios';
import { mapActions, mapState } from 'pinia';
export default {
    async mounted() {
        await this.fetchUsers();
    },
    data() {
        return {
            formUser: { name: '', email: '', age: '', major: '', salary: '' },
            editingUser: null,
            editForm: {},
        }
    },
    computed: {
        ...mapState(useUsersStore, { users: 'getUsers', loading: 'getLoading' })
    },
    methods: {
        navigateToUser(id) {
            this.$router.push(`/users/${id}`)
        },
        ...mapActions(useUsersStore, ['fetchUsers']),
        async createUser() {
            await axios.post(`${API}/users`, this.formUser);
            this.formUser = { name: '', email: '', age: '', major: '', salary: '' };
            this.fetchUsers();
        },
        editUser(u) {
            this.editingUser = u.id;
            this.editForm = { ...u };
        },
        async updateUser() {
            await axios.put(`${API}/users/${this.editingUser}`, this.editForm);
            this.editingUser = null;
            this.fetchUsers();
        },
        async deleteUser(id) {
            await axios.delete(`${API}/users/${id}`);
            this.fetchUsers();
        },
    }
}
</script> -->