<template>
  <div class="add-photo">
    <form @submit.prevent="getFormValues">
      <FormSelect
              v-model="venue"
              name="Venue"
              :options="fixtures.VENUES"
              length="6"
      />
      <FormSelect
              v-model="section"
              name="Section"
              :options="fixtures.SECTIONS"
      />
      <FormSelect
              v-model="row"
              name="Row"
              :options="fixtures.ROWS"
      />
      <FormSelect
              v-model="seat"
              name="Seat"
              :options="fixtures.SEATS"
      />
      <FormDatePicker
              v-model="dateOfVisit"
              name="Date-of-visit"
      />
      <FormStarRating
              v-model="comfort"
              name="Comfort"
      />
      <FormStarRating
              v-model="legroom"
              name="Legroom"
      />
      <FormStarRating
              v-model="view"
              name="View"
      />
      <FormTextArea
              v-model="seatComments"
              name="Seat-comments"
              placeholder="Could you see all of the stage? Were you comfortable? Good legroom?"
      />

      <b-col sm="2" offset-sm="2" class="clearfix">
        <b-button class="float-left" type="submit" variant="success">Submit</b-button>
      </b-col>
    </form>
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
        methods: {
            getFormValues (submitEvent) {
                console.log(this.venue)
                console.log(this.section)
                console.log(this.row)
                console.log(this.seat)
                console.log(this.dateOfVisit)
                console.log(this.comfort)
                console.log(this.legroom)
                console.log(this.view)
                console.log(this.seatComments)
            }
        },
        data() {
            return {
                venue: null,
                section: null,
                row: null,
                seat: null,
                dateOfVisit: null,
                comfort: 0,
                legroom: 0,
                view: 0,
                seatComments: '',
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
