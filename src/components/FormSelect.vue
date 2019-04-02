<template>
    <b-row v-bind:class="name">
        <b-col sm="2">
            <label class="float-left" :for="name">{{name}}</label>
        </b-col>

        <b-col v-bind:sm="length">
            <b-form-select :id="name" v-model="selected" :options="options"></b-form-select>
        </b-col>

        <b-col sm="1" class="check-icon">
            <v-icon name="check" class="float-left"/>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'FormSelect',
        props: {
            name: String,
            options: Array,
            length: {
                type: String,
                default: '4'
            },
        },
        data() {
            return {
                selected: null
            }
        }
    }
</script>

