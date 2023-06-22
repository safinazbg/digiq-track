<template>
    <div class="lParticles">
        <canvas
                v-show="ready"
                class="background !h-[60vh] k1:!h-screen"
                style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                  "
        ></canvas>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import Particles from "particlesjs";

const options = {
    selector: ".background",
    color: "#a25d47",
    maxParticles: 150,
    minDistance: 100,
    connectParticles: true,
    speed: 0.3,
};
export default {
    name: "LParticles",

    setup() {
        const ready = ref(false);
        onMounted(() => {
            console.log(923, 'mounted')
            ready.value = true;
            options.maxParticles = Math.max(400, window.innerWidth - 400) / 16 + 8;
            options.speed = 0.15;
            options.minDistance = 100;

            Particles.init(options);
        });
        return {
            ready
        };
    },
};
</script>

<style scoped></style>
