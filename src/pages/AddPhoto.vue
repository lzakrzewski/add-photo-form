<template>
  <div class="add-photo">
    <AddPhotoForm v-if="!isSubmitted" @form-submitted="formSubmitted($event)" />
    <Summary v-else :formData="formData"/>
  </div>
</template>

<script>
    import AddPhotoForm from "../components/AddPhotoForm";
    import Summary from "../components/Summary";

    export default {
        name: 'AddPhoto',
        components: {
            AddPhotoForm, Summary
        },
        methods: {
            formSubmitted: function (event)  {
                this.formData = event;
                this.isSubmitted = true;
            }
        },
        data() {
          return {
              isSubmitted:false,
              formData: {},
          }
        }
    }
</script>

<style scoped>
  .add-photo {
    padding-bottom: 20px;
  }
</style>
