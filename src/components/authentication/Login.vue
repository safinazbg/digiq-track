<template>
  <div class="login">
    <form @submit.prevent="onSubmit" ref="form" class="form">
      <h1 class="heading1">
        Login
        <hr class="gradientLine" />
      </h1>
      <StatusMessage operation="LOGIN"></StatusMessage>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 mb-6">
          <label for="email">Email</label>
          <TextInput
            :tabIndex="1"
            id="email"
            name="email"
            placeholder="Email address"
            required
            @change="onEmailChange"
            @input="onEmailChange"
          ></TextInput>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 mb-6">
          <label for="pass">Password</label>
          <TextInput
            :tabIndex="2"
            id="pass"
            name="pass"
            type="password"
            placeholder="Password"
            required
            @change="onPasswordChange"
            @input="onPasswordChange"
            @submit="onSubmit"
          ></TextInput>
          <!--          <div class="w-full flex justify-end">-->
          <!--              <router-link-->
          <!--                      class="cursor-pointer"-->
          <!--                      :to="{name: 'forgotPassword'}" -->
          <!--              >-->
          <!--                  Forgot password-->
          <!--              </router-link>-->
          <!--          </div>-->
        </div>
      </div>
      <div class="flex flex-row gap-4 justify-end">
        <Button
          class="button secondary"
          :tabindex="3"
          type="submit"
          @click="$router.go(-1)"
        >
          <template #right>Back</template>
        </Button>
        <Button
          :is-disabled="!isValid"
          :is-primary="isValid"
          style="background-image: linear-gradient(to right, #db2777, #f97316)"
          @click="onSubmit"
        >
          <template #center>Login</template>
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import TextInput from "@/components/forms/TextInput.vue";
import Button from "@/components/forms/Button.vue";
import { computed, reactive, ref, watchPostEffect } from "vue";
import { isStringWithLength } from "@/lib/typeHelpers/stringFunctions/isStringWithLength";
import { isEmailAddress } from "@/lib/typeHelpers/stringFunctions/isEmailAddress";
import { LOGIN } from "@/store/operations";
import { usePassphrase } from "@/lib/passphrase.js";
import { useStore } from "vuex";
import StatusMessage from "@/components/status/StatusMessage.vue";
import { useRouter } from "vue-router";
import { useStatusMessage } from "@/composables/useStatusMessage";

export default {
  name: "cLogin",
  components: {
    Button,
    StatusMessage,
    TextInput,
  },
  setup() {
    const login = reactive({
      email: "",
      password: "",
    });
    const isSent = ref(false);
    const inputError = reactive({
      email: "",
      password: "",
    });
    const { hashPassphrase } = usePassphrase();

    const isValid = computed(
      () =>
        !isSent.value && Object.values(inputError).every((msg) => msg === "")
    );

    const onEmailChange = (value) => (login.email = value.trim());
    const onPasswordChange = (value) =>
      (login.password = hashPassphrase(value.trim()));

    watchPostEffect(() => {
      const { email, password } = login;

      inputError.email =
        email !== null && !isEmailAddress(email)
          ? "A valid email address is required"
          : "";
      inputError.password =
        password !== null && !isStringWithLength(password)
          ? "A password is required"
          : "";
    });

    const store = useStore();
    const router = useRouter();
    const { setMessage, deleteMessage } = useStatusMessage(LOGIN);
    deleteMessage();
    const onSubmit = () => {
      deleteMessage();
      isSent.value = true;
      store
        .dispatch(LOGIN, login)
        .then(({ data }) => {
          const { Error, User } = data;
          if (Error) {
            setMessage({
              isError: true,
              body: Error.message,
            });
          }
          if (User) {
            router.push({ query: {} });
          } else {
            isSent.value = false
          }
        })

      Object.keys(login).forEach((key) => delete login[key]);
    };
    return {
      isValid,
      login,
      inputError,
      onEmailChange,
      onPasswordChange,
      onSubmit,
    };
  },
};
</script>

<style scoped></style>
