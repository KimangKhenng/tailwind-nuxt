<template>
    <div class="p-4 bg-white shadow rounded hover:bg-gray-200">
        <p><strong>{{ user.name }}</strong> ({{ user.email }})</p>
        <p>Age: {{ user.age }} | Major: {{ user.major }} | Salary: ${{ user.salary }}</p>
        <slot></slot>
    </div>
</template>
<script setup>

defineProps({
    user: {
        type: Object,
        required: true,
        default: () => ({
            name: '',
            email: '',
            age: '',
            major: '',
            salary: ''
        })
    }
});
</script>