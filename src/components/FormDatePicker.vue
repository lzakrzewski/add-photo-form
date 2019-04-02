<template>
    <b-row v-bind:class="name">
        <b-col sm="2">
            <label class="float-left" :for="name">{{ name | displayName }}</label>
        </b-col>

        <b-col sm="4">
            <datepicker
                    v-model="value"
                    v-bind:bootstrap-styling=true
                    format="yyyy-MM-dd"
                    :disabledDates="disabledDates"
            />
        </b-col>

        <b-col sm="1" class="check-icon">
            <v-icon name="check" class="float-left"/>
        </b-col>

    </b-row>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: 'FormDatePicker',
        components: {
            Datepicker
        },
        props: {
            name: String
        },
        filters: {
            displayName: (name) => {
                return name.replace(/-/g, ' ');
            }
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
        },
        data() {
            return {
                disabledDates: {
                    from: new Date()
                }
            }
        }
    }
</script>




