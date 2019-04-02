<template>
    <form @submit.prevent="submit">
        <FormSelect
                v-model="formData.venue"
                name="Venue"
                :options="fixtures.VENUES"
                length="6"
                v-bind:isValid="isValid(this.formData.venue)"
                v-bind:hasError="hasError(this.formData.venue)"
        />
        <FormSelect
                v-model="formData.section"
                name="Section"
                :options="fixtures.SECTIONS"
                v-bind:isValid="isValid(this.formData.section)"
                v-bind:hasError="hasError(this.formData.section)"
        />
        <FormSelect
                v-model="formData.row"
                name="Row"
                :options="fixtures.ROWS"
                v-bind:isValid="isValid(this.formData.row)"
                v-bind:hasError="hasError(this.formData.row)"
        />
        <FormSelect
                v-model="formData.seat"
                name="Seat"
                :options="fixtures.SEATS"
                v-bind:isValid="isValid(this.formData.seat)"
                v-bind:hasError="hasError(this.formData.seat)"
        />
        <FormDatePicker
                v-model="formData.dateOfVisit"
                name="Date-of-visit"
                v-bind:isValid="isValid(this.formData.dateOfVisit)"
                v-bind:hasError="hasError(this.formData.dateOfVisit)"
        />
        <FormStarRating
                v-model="formData.comfort"
                name="Comfort"
                v-bind:isValid="isValid(this.formData.comfort)"
                v-bind:hasError="hasError(this.formData.comfort)"
        />
        <FormStarRating
                v-model="formData.legroom"
                name="Legroom"
                v-bind:isValid="isValid(this.formData.legroom)"
                v-bind:hasError="hasError(this.formData.legroom)"
        />
        <FormStarRating
                v-model="formData.view"
                name="View"
                v-bind:isValid="isValid(this.formData.view)"
                v-bind:hasError="hasError(this.formData.view)"
        />
        <FormTextArea
                v-model="formData.seatComments"
                name="Seat-comments"
                placeholder="Could you see all of the stage? Were you comfortable? Good legroom?"
                v-bind:isValid="isValid(this.formData.seatComments)"
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
            isValid: function (value) {
                return !!value;
            },
            hasError: function (value) {
                if (!this.isSubmitted) {
                    return false;
                }

                return !this.isValid(value);
            },
            hasAnyError: function () {
                const requiredFields = ['venue', 'section', 'row', 'seat', 'dateOfVisit', 'comfort', 'legroom', 'view'];
                const errors = requiredFields.filter(key => this.hasError(this.formData[key]));

                return errors.length !== 0;
            },
            submit () {
                this.isSubmitted = true;

                if (this.hasAnyError()) {
                    return ;
                }

               this.$emit('form-submitted', this.formData);
            }
        },
        data() {
            return {
                formData: {
                    venue: null,
                    section: null,
                    row: null,
                    seat: null,
                    dateOfVisit: null,
                    comfort: 0,
                    legroom: 0,
                    view: 0,
                    seatComments: '',
                },
                isSubmitted: false,
                fixtures: fixtures
            }
        }
    }
</script>
