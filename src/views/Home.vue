<template>
    <div>
        <div class="columns is-mobile is-gapless">
            <div class="column is-9">
                <Dashboard/>
            </div>
            <div class="column is-3">
                <Stat/>
            </div>
        </div>
    </div>
</template>

<script>
import Dashboard from '@/components/Home/Dashboard.vue'
import Stat from '@/components/Home/Stat.vue'

export default {
    components: {
        Dashboard,
        Stat
    }
}
</script>