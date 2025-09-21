<template>
  <div class="monitoring-dashboard p-6 bg-gray-900 text-white rounded-lg">
    <h3 class="text-xl font-bold mb-4 text-green-400">🌍 Global Synthetic Monitoring</h3>
    
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="stat-card bg-gray-800 p-4 rounded">
        <div class="text-2xl font-bold text-green-400">{{ uptime }}%</div>
        <div class="text-sm text-gray-400">Uptime</div>
      </div>
      <div class="stat-card bg-gray-800 p-4 rounded">
        <div class="text-2xl font-bold text-blue-400">{{ responseTime }}ms</div>
        <div class="text-sm text-gray-400">Avg Response</div>
      </div>
      <div class="stat-card bg-gray-800 p-4 rounded">
        <div class="text-2xl font-bold text-yellow-400">{{ locations }}</div>
        <div class="text-sm text-gray-400">Test Locations</div>
      </div>
    </div>

    <div class="regions mb-4">
      <h4 class="text-lg font-semibold mb-2">Regional Status</h4>
      <div class="space-y-2">
        <div v-for="region in regions" :key="region.name" class="flex items-center justify-between">
          <span class="flex items-center">
            <div :class="['w-3 h-3 rounded-full mr-2', region.status === 'healthy' ? 'bg-green-400' : 'bg-red-400']"></div>
            {{ region.name }}
          </span>
          <span class="text-sm text-gray-400">{{ region.latency }}ms</span>
        </div>
      </div>
    </div>

    <div class="recent-tests">
      <h4 class="text-lg font-semibold mb-2">Recent Test Results</h4>
      <div class="space-y-1 text-sm">
        <div v-for="test in recentTests" :key="test.id" class="flex items-center justify-between">
          <span class="flex items-center">
            <div :class="['w-2 h-2 rounded-full mr-2', test.success ? 'bg-green-400' : 'bg-red-400']"></div>
            {{ test.name }}
          </span>
          <span class="text-gray-400">{{ test.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const uptime = ref(99.8)
const responseTime = ref(245)
const locations = ref(12)

const regions = ref([
  { name: 'North America', status: 'healthy', latency: 180 },
  { name: 'Europe', status: 'healthy', latency: 220 },
  { name: 'Asia Pacific', status: 'degraded', latency: 850 },
  { name: 'South America', status: 'healthy', latency: 320 },
  { name: 'Australia', status: 'healthy', latency: 290 }
])

const recentTests = ref([
  { id: 1, name: 'Login Flow', success: true, time: '2s ago' },
  { id: 2, name: 'Checkout Process', success: true, time: '1m ago' },
  { id: 3, name: 'Search API', success: false, time: '3m ago' },
  { id: 4, name: 'Payment Gateway', success: true, time: '5m ago' },
  { id: 5, name: 'User Registration', success: true, time: '7m ago' }
])

let interval: NodeJS.Timeout

onMounted(() => {
  // Simulate real-time updates
  interval = setInterval(() => {
    // Randomly update metrics
    uptime.value = Math.max(99.0, Math.min(100, uptime.value + (Math.random() - 0.5) * 0.1))
    responseTime.value = Math.max(100, Math.min(500, responseTime.value + (Math.random() - 0.5) * 20))
    
    // Occasionally change Asia Pacific status
    if (Math.random() < 0.3) {
      regions.value[2].status = regions.value[2].status === 'healthy' ? 'degraded' : 'healthy'
      regions.value[2].latency = regions.value[2].status === 'healthy' ? 
        Math.floor(Math.random() * 100) + 200 : 
        Math.floor(Math.random() * 300) + 700
    }
  }, 2000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.monitoring-dashboard {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  min-height: 400px;
}

.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>
