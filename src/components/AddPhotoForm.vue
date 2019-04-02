<template>
    <form @submit.prevent="submit">
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
</template>

<script>
    import * as fixtures from '../components/fixtures';
    import FormTextArea from "../components/FormTextArea";
    import FormSelect from '../components/FormSelect';
    import FormDatePicker from '../components/FormDatePicker';
    import FormStarRating from '../components/FormStarRating';

    export default {
        name: 'AddPhotoForm',
        components: {
            FormSelect,
            FormTextArea,
            FormDatePicker,
            FormStarRating
        },
        methods: {
            submit () {
                this.$emit('form-submitted', {
                    venue: this.venue,
                    section: this.section,
                    row: this.row,
                    seat: this.seat,
                    dateOfVisit: this.dateOfVisit,
                    comfort: this.comfort,
                    legroom: this.legroom,
                    view: this.view,
                    seatComments: this.seatComments,
                });
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
