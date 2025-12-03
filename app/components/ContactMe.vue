<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <form name="contact" action="https://formspree.io/f/mzzngodl" method="POST"
            class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <!-- Required hidden inputs for Netlify -->
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                <p class="text-gray-600">We'd love to hear from you</p>
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Name</label>
                <input v-model="form.name" type="text" name="name" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none"
                    placeholder="John Doe" />
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Email</label>
                <input v-model="form.email" type="email" name="email" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none"
                    placeholder="john@example.com" />
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Message</label>
                <textarea v-model="form.message" name="message" rows="5" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none resize-none"
                    placeholder="Your message here..."></textarea>
            </div>

            <button type="submit"
                class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
                Send Message
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
    name: "",
    email: "",
    message: "",
});

</script>