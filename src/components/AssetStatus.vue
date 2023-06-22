<template>
  <div v-if="showError"
       class="asset error"
       v-bind="$attrs"
  >
    <AlertError
        :name="`${ contextName } Error`"
        :message="errorMessage"
    >
      <template #icon>
        <IconSkullOutline></IconSkullOutline>
      </template>

    </AlertError>
  </div>
  <div
      v-else-if="showStatus"
      class="asset status"
      v-bind="$attrs"
  >
    {{ assetStatus }}
  </div>
</template>

<script>
import {computed} from "vue";
import AlertError from '../AlertError'
import IconSkullOutline from "../icons/Nuke";

export default {
  name: "AssetStatus",
  components: {
    AlertError,
    IconSkullOutline,
  },
  props: {
    contextName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'Success',
    },
    error: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const assetStatus = computed(() => props.status === 'init' ? `Initializing ${props.contextName}...` : props.status?.value ?? props.status)
    const showError = computed(() => props.error?.value ?? props.error)
    const showStatus = computed(() => assetStatus.value.toLowerCase() !== 'success')
    const errorMessage = computed(() => props.error?.message ?? props.error ?? '')

    return {
      assetStatus,
      errorMessage,
      showError,
      showStatus,
    }
  }
}
</script>

<style scoped>
.asset.error {
  color: darkred;
  background-color: transparent;
}

.asset.status {
  background-color: rgba(0, 0, 0, 0.6);
  color: orange;
}
</style>
