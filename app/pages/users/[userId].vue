<template>
    <div v-if="loading" class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
                <div class="h-2 rounded bg-gray-200"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                        <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div class="h-2 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Hello User: {{ $route.params.userId }}</p>
        <p>Age: {{ getUserById($route.params.userId).age }}</p>
        <p>Salary: {{ getUserById($route.params.userId).salary }}</p>
        <p>Name: {{ getUserById($route.params.userId).name }}</p>
    </div>
</template>
<script setup>

import { useUsersStore } from '@/stores/usersStore';
import { useRoute } from 'vue-router'

const route = useRoute()

const { getUserById, getLoading: loading } = useUsersStore()


onMounted(() => {
    const userId = route.params.userId
    console.log(getUserById(userId))
})
// import { useUsersStore } from '@/stores/usersStore';
// import { mapState } from 'pinia';

// export default {
//     async mounted() {
//         const userId = this.$route.params.userId
//         // console.log(this.getUserById(userId))
//         // this.user = this.getUserById(userId)
//     },
//     data() {
//         return {
//             user: {},
//             loading: false
//         }
//     },
//     // computed: {
//     //     ...mapState(useUsersStore, { getUserById: 'getUserById', loading: 'getLoading' })
//     // }
// }
</script>
