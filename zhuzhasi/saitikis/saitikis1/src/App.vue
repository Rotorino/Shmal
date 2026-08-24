<script setup>
import { ref } from 'vue'
import logoUrl from './assets/Color.png'

const showPassword = ref(false)
const email = ref('')
const password = ref('')
</script>

<template>
  <div class="min-h-screen w-full bg-white flex items-center justify-center px-6">
    <div class="w-full max-w-[420px]">
      <!-- Logo -->
      <div class="mb-9">
        <img :src="logoUrl" alt="Logo" class="h-8 w-auto" />
      </div>

      <!-- Heading -->
      <h1
        class="text-[#13294B] font-bold leading-tight"
        style="font-size: 44px"
      >
        Log in to your Account
      </h1>

      <!-- Subheading -->
      <p class="mt-3 text-[18px] text-[#6B7280]">
        Welcome back! Select method to log in:
      </p>

      <!-- Social buttons -->
      <div class="mt-7 flex flex-row gap-3">
        <button
          type="button"
          class="flex-1 h-14 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center gap-2.5 transition-all hover:border-[#D1D5DB] hover:shadow-sm cursor-pointer"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
            />
          </svg>
          <span class="text-[#13294B] text-[15px] font-medium">Google</span>
        </button>

        <button
          type="button"
          class="flex-1 h-14 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center gap-2.5 transition-all hover:border-[#D1D5DB] hover:shadow-sm cursor-pointer"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#1877F2"
              d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"
            />
          </svg>
          <span class="text-[#13294B] text-[15px] font-medium">Facebook</span>
        </button>
      </div>

      <!-- Divider -->
      <div class="mt-[30px] flex items-center gap-3">
        <div class="h-px flex-1 bg-[#E5E7EB]"></div>
        <span class="text-[#9CA3AF] text-[13px] whitespace-nowrap">
          or continue with email
        </span>
        <div class="h-px flex-1 bg-[#E5E7EB]"></div>
      </div>

      <!-- Email field -->
      <div class="mt-7">
        <div
          class="flex items-center h-14 w-full bg-white border border-[#E5E7EB] rounded-xl px-4 transition-colors focus-within:border-[#2563EB]"
        >
          <svg
            class="w-5 h-5 text-[#9CA3AF] shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="ml-3 flex-1 bg-transparent outline-none text-[15px] text-[#13294B] placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>

      <!-- Password field -->
      <div class="mt-[18px]">
        <div
          class="flex items-center h-14 w-full bg-white border border-[#E5E7EB] rounded-xl px-4 transition-colors focus-within:border-[#2563EB]"
        >
          <svg
            class="w-5 h-5 text-[#9CA3AF] shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 11V7a4 4 0 118 0v4M5 11h14a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1z"
            />
          </svg>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="ml-3 flex-1 bg-transparent outline-none text-[15px] text-[#13294B] placeholder:text-[#9CA3AF]"
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="shrink-0 ml-2 text-[#9CA3AF] hover:text-[#13294B] transition-colors cursor-pointer"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
          >
            <svg
              v-if="!showPassword"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
              />
              <circle
                stroke-linecap="round"
                stroke-linejoin="round"
                cx="12"
                cy="12"
                r="3"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3l18 18M10.6 10.6a3 3 0 004.2 4.2M9.9 5.2A10.9 10.9 0 0112 5c7 0 11 7 11 7a18.5 18.5 0 01-2.2 3.1M6.1 6.1A18.5 18.5 0 001 12s4 7 11 7a10.9 10.9 0 003.4-.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
