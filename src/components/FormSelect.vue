<template>
    <b-row v-bind:class="name">
        <b-col sm="2">
            <label class="float-left" :for="name">{{name}}<small v-if="hasError" class="invalid-feedback">required</small></label>
        </b-col>

        <b-col v-bind:sm="length">
            <b-form-select :id="name" v-model="value" :options="options" v-bind:class="{'is-invalid': hasError }"></b-form-select>
        </b-col>

        <b-col v-if="isValid"  sm="1" class="check-icon">
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
            isValid: Boolean,
            hasError: Boolean
        },
        computed: {
            value: {
                get: function () {
                    return null;
                },
                set: function(value) {
                    this.$emit('input', value)
                }
            },
        }
    }
</script>

