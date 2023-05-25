<script>
import CustomInput from "@components/CustomInput.vue";

export default {
  components: {
    CustomInput,
  },
  props: ['title'],
  data(){
    return {
      nameInput: {
        value: '',
        isValid: false,
      },
      passwordInput: {
        value: '',
        isValid: false,
      },
      numberInput: {
        value: '',
        isValid: false,
      },
    };
  },
  computed: {
    isFormValid() {
      return this.nameInput.isValid && this.passwordInput.isValid && this.numberInput.isValid;
    }
  },
  methods: {
    submitHandler() {
      if (!this.isFormValid) return;

      alert('Form Submitted');
    },
    validateName(value) {
      if (value.length < 4 || value.length >= 12){
        return "Your name should be between 4 and 12 characters";
      }
      return false;
    },
    validatePassword(value) {
      if (value.length < 4 || value.length >= 12){
        return "Your password should be between 4 and 12 characters";
      }

      const regExp = /[a-zA-Z0-9!@#$%^&*]/;
      if (!regExp.test(value)) {
        return "Your password contains unsupported symbols";
      }

      return false;
    },
    validateNumber(value) {
      return value < 5 ? 'Your number should be bigger than 5' : false;
    },
  },
};
</script>

<template>
  <custom-heading level=1>{{ title }}</custom-heading>
  <form class="custom-form" @submit.prevent="submitHandler">
    <custom-input type="text" v-model="nameInput.value" v-model:is-valid="nameInput.isValid" label="Name" name="name" :validate="validateName" placeholder="Введите имя..."/>
    <custom-input type="password" v-model="passwordInput.value" v-model:is-valid="passwordInput.isValid" label="Password" name="pwd" :validate="validatePassword" placeholder="Введите парль..."/>
    <custom-input type="number" v-model="numberInput.value" v-model:is-valid="numberInput.isValid" label="Number" name="number" :validate="validateNumber"/>
    <custom-button :disabled="!isFormValid" class="custom-form__button">Отправить</custom-button>
  </form>
</template>

<style scoped lang="scss">
.custom-form {
  display: flex;
  flex-direction: column;

  &__button {
    align-self: flex-end;
  }
}
</style>
