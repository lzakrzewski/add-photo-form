<template>
    <div class="summary card">
        <div class="card-header"><h4>Summary</h4></div>
        <div class="card-body">
            <b-row>
                <b-col class="label" sm="2">Venue</b-col>
                <b-col sm="6">{{ formData.venue }}</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Section</b-col>
                <b-col sm="6">{{ formData.section }}</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Row</b-col>
                <b-col sm="6">{{ formData.row }}</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Seat</b-col>
                <b-col sm="6">{{ formData.seat }}</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Date of visit</b-col>
                <b-col sm="6">{{ formData.dateOfVisit | date }}</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Comfort</b-col>
                <b-col sm="6">{{ formData.comfort }}/5</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Legroom</b-col>
                <b-col sm="6">{{ formData.legroom }}/5</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">View</b-col>
                <b-col sm="6">{{ formData.view }}/5</b-col>
            </b-row>

            <b-row>
                <b-col class="label" sm="2">Seat comments</b-col>
                <b-col sm="6">{{ formData.seatComments }}</b-col>
            </b-row>

            <b-col sm="2" offset-sm="2" class="clearfix">
                <b-button v-on:click="reload" class="float-left"  variant="danger">Repeat</b-button>
            </b-col>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Summary',
        props: {
            formData: Object
        },
        methods: {
            reload: function () {
                document.location.reload()
            }
        },
        filters: {
            date: function (value) {
                return new Date(value).toJSON().slice(0, 10)
            }
        }
    }
</script>

<style scoped>
    .summary {
        margin-top: 20px;
        padding-bottom: 20px;
    }
    .col-sm-6 {
        text-align: left;
    }
</style>
