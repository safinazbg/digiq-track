<template>
  <LSection>
    <template #body>
      <div class="flex justify-center">
        <div v-if="!isSent">
          <form
              @submit.prevent="onSubmit"
              ref="form"
              class="form"

          >
            <h1 class="heading1">
              Request an EQRC Account
              <hr
                  class="gradientLine"
              />
            </h1>

            <p class="text-sm k15:text-lg text-gray-600">
              To become a part of this initiative, individuals or organisations
              must first create an account on the EQRC website. Once an account is
              created, you can invite members to your organisation through the
              EQRC dashboard.
            </p><!-- todo: invite/register user -->
            <StatusMessage
                operation="REGISTER_USER"
            ></StatusMessage>
            <div>
              <label for="email">Email address</label>
              <EmailAddress
                  @input="onEmailChange"
                  @change="onEmailChange"
              ></EmailAddress>
              <LFieldError :message="inputError.email"></LFieldError>
            </div>
            <!--          <LActionError-->
            <!--              v-if="actionError"-->
            <!--              class="mb-4"-->
            <!--              :message="actionError"-->
            <!--          ></LActionError>-->
            <div class="items-center justify-end gap-4 flex flex-row">
              <Button
                  class="button secondary"
                  @click="$router.go(-1)"
                  :tabindex="7"
                  type="submit"
              >
                <template #right>Back</template>
              </Button>
              <Button
                  type="submit"
                  :tabindex="8"
                  :is-primary="isValid"
                  :is-disabled="!isValid"
                  style="background-image: linear-gradient(to right, #db2777, #f97316); "
                  @click="onSubmit"
              >
                <template #right>Register</template>
              </Button>
              <Transition>
                <LHighlightedText
                    v-if="actionMessage"
                    class="m-4"
                >
                  <template #body>
                    {{ actionMessage }}
                  </template>
                </LHighlightedText>
              </Transition>
            </div>
          </form>
        </div>
        <div v-if="isSent">
          <h1 class="heading1">
            Thanks for requesting an EQRC Account
            <hr
                class="gradientLine"
            />
          </h1>
          <p class="text-sm k15:text-lg text-gray-600">
            Check your mail to activate your account. Can't find the email? Check your spam folder.
          </p>
        </div>
      </div>
    </template>
  </LSection>
</template>

<script>
import {computed, reactive, ref, watchPostEffect} from "vue";
import LSection from "@/components/layout/LSection.vue";
import EmailAddress from "@/components/forms/EmailAddress.vue";
import Button from "@/components/forms/Button";
import {isEmailAddress} from "@/lib/typeHelpers/stringFunctions/isEmailAddress";
import LFieldError from "@/components/layout/LFieldError";
import LHighlightedText from "@/components/layout/LHighlightedText.vue";
import {useStore} from "vuex";
import {REGISTER_USER} from "@/store/operations";
import StatusMessage from "@/components/status/StatusMessage.vue";
import {useStatusMessage} from "@/composables/useStatusMessage";

export default {
  name: "RegisterUserAccount",
  components: {
    Button,
    EmailAddress,
    LFieldError,
    LHighlightedText,
    LSection,
    StatusMessage,
  },
  setup() {

    const form = ref(null);
    const actionError = ref("");
    const actionMessage = ref('')
    // isSent is used to show a different message after the user has submitted the form
    const isSent = ref(false);
    const inputError = reactive({});
    const userAccount = reactive({
      email: null,
    });
    const isValid = computed(
        () =>
            !isSent.value &&
            userAccount.email !== null &&
            Object.values(inputError)
                .every((msg) => msg === "")
    );

    const onEmailChange = value => (userAccount.email = value?.trim() ?? '');
    console.log(isSent)
    watchPostEffect(() => {
      const {
        email,
      } = userAccount;

      inputError.email =
          email !== null && !isEmailAddress(email)
              ? "A valid email address is required"
              : "";
    });

    const store = useStore()
    const {setMessage} = useStatusMessage(REGISTER_USER)
    const onSubmit = () => {
      console.log("validating userAccount info");

      if (!isValid.value) return;
      actionError.value = "";
      const options = {
        ...userAccount,
      };

      console.log("Requesting user account");
      store.dispatch(REGISTER_USER, options)
          .then(() => setMessage({isSuccess: true, body: 'Please check your email to activate your account.'}))
          .catch(err => {
            console.log(err)
            setMessage({isError: true, body: err.message})
          })
      // reset form
      Object.keys(options).forEach(key => delete options[key])
      isSent.value = true
      console.log(isSent)

    };

    return {
      actionError,
      actionMessage,
      inputError,
      isValid,
      form,
      onSubmit,
      userAccount,
      onEmailChange,
      isSent,
    };
  },
};
</script>

<style scoped></style>
