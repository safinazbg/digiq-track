<template>
  <div
      class="statusMessage"
      :class="{
          isError: message?.isError,
          isWarning: message?.isWarning,
          isSuccess: message?.isSuccess
      }"
  >
    <LStatusMessage v-if="message">
      <template #icon>
        <IconNuke
            v-if="message.isError"
            :size="48"
        ></IconNuke>
        <IconAlertOctagon
            v-if="message.isWarning"
            :size="48"
        ></IconAlertOctagon>
        <IconCheck
            v-if="message.isSuccess"
            :size="48"
        ></IconCheck>
      </template>
      <template #body>
        <div
            class="min-h-6"
            v-html="message.body"
        ></div>
      </template>
    </LStatusMessage>
  </div>
</template>

<script>
import LStatusMessage from "@/components/status/LStatusMessage.vue";
import {useStatusMessage} from "@/composables/useStatusMessage";
import * as operations from "@/store/operations";
import IconNuke from "@/components/icons/Nuke.vue";
import IconAlertOctagon from "@/components/icons/AlertOctagon.vue";
import IconCheck from "@/components/icons/Check.vue";

export default {
  name: "StatusMessage",
  components: {
    IconAlertOctagon,
    IconCheck,
    IconNuke,
    LStatusMessage,
  },
  props: {
    operation: {
      type: String,
      required: true,
      validator: value => Object.values(operations).includes(value)
    }
  },
  setup(props) {
    const {message} = useStatusMessage(props.operation)
    return {
      message
    }
  }
}
</script>

<style scoped>

</style>