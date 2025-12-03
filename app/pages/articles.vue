<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Articles CRUD</h1>

        <!-- Create Article -->
        <div class="bg-white p-4 rounded shadow mb-6">
            <h2 class="font-semibold mb-2">Create Article</h2>
            <textarea v-model="formArticle.text" placeholder="Text" class="p-2 border rounded w-full mb-2"></textarea>
            <input v-model="formArticle.byUser" placeholder="By User" class="p-2 border rounded w-full mb-2" />
            <button @click="createArticle" class="px-4 py-2 bg-green-600 text-white rounded">Create</button>
        </div>

        <!-- <button @click="fetchArticles" class="mb-4 px-4 py-2 bg-green-600 text-white rounded">Load Articles</button> -->
        <div v-if="loading" class="text-gray-600">Loading...</div>

        <!-- Articles List -->
        <div class="grid gap-4">
            <div v-for="a in articles" :key="a.id" class="p-4 bg-white shadow rounded">
                <p class="mb-2 whitespace-pre-line">{{ a.text }}</p>
                <p class="text-sm text-gray-600">{{ a.byUser }}</p>

                <button @click="editArticle(a)" class="mt-2 px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
                <button @click="deleteArticle(a.id)"
                    class="mt-2 px-3 py-1 bg-red-600 text-white rounded">Delete</button>
            </div>
        </div>

        <!-- Edit Article Modal -->
        <div v-if="editingArticle" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div class="bg-white p-6 rounded shadow max-w-md w-full">
                <h2 class="font-bold mb-3">Update Article</h2>
                <textarea v-model="editFormArticle.text" class="p-2 border rounded w-full mb-2"></textarea>
                <input v-model="editFormArticle.byUser" placeholder="By User" class="p-2 border rounded w-full mb-2" />

                <div class="flex gap-2 mt-3">
                    <button @click="updateArticle" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
                    <button @click="editingArticle = null"
                        class="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
const API = "https://68648e915b5d8d03397d8138.mockapi.io/api/v1";
import axios from 'axios';
export default {
    async mounted() {
        await this.fetchArticles();
    },
    data() {
        return {
            loading: false,
            articles: [],
            formArticle: { text: '', byUser: '' },
            editingArticle: null,
            editFormArticle: {},
        }
    },
    methods: {
        async fetchArticles() {
            this.loading = true;
            const res = await axios.get(`${API}/articles`);
            console.log(res.data);
            this.articles = res.data;
            this.loading = false;
        },
        async createArticle() {
            await axios.post(`${API}/articles`, this.formArticle);
            this.formArticle = { text: '', byUser: '' };
            this.fetchArticles();
        },
        editArticle(a) {
            this.editingArticle = a.id;
            this.editFormArticle = { ...a };
        },
        async updateArticle() {
            await axios.put(`${API}/articles/${this.editingArticle}`, this.editFormArticle);
            this.editingArticle = null;
            this.fetchArticles();
        },
        async deleteArticle(id) {
            await axios.delete(`${API}/articles/${id}`);
            this.fetchArticles();
        },
    }
}
</script>