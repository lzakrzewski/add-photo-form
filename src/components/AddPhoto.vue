<template>
  <div class="add-photo">
    <FormSelect name="Venue" :options="fixtures.VENUES" length="6" />
    <FormSelect name="Section" :options="fixtures.SECTIONS"/>
    <FormSelect name="Row" :options="fixtures.ROWS"/>
    <FormSelect name="Seat" :options="fixtures.SEATS"/>

    <FormDatePicker name="Date-of-visit" />

    <FormStarRating name="Comfort" />
    <FormStarRating name="Legroom" />
    <FormStarRating name="View" />

    <FormTextArea name="Seat-comments" placeholder="Could you see all of the stage? Were you comfortable? Good legroom?"/>

    <b-col sm="2" offset-sm="2" class="clearfix">
      <b-button class="float-left" type="submit" variant="success">Submit</b-button>
    </b-col>

  </div>
</template>

<script>
    import * as fixtures from './fixtures';
    import FormTextArea from "./FormTextArea";
    import FormSelect from './FormSelect';
    import FormDatePicker from './FormDatePicker';
    import FormStarRating from './FormStarRating';

    export default {
        name: 'AddPhoto',
        components: {
            FormSelect,
            FormTextArea,
            FormDatePicker,
            FormStarRating
        },
        props: {
            msg: String
        },

        data() {
            return {
                fixtures: fixtures
            }
        }
    }
</script>

<style scoped>
.add-photo {
  padding-bottom: 20px;
}
</style>
