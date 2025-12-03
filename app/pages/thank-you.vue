<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-6">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center space-y-6">
            <div class="flex justify-center mb-4">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
            </div>

            <div>
                <h1 class="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>
                <p class="text-gray-600">Your message has been successfully submitted.</p>
                <p class="text-sm text-gray-500 mt-2">We'll get back to you as soon as possible.</p>
            </div>

            <div class="pt-4">
                <router-link to="/"
                    class="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
                    Back to Home
                </router-link>
            </div>
        </div>
    </div>
</template>