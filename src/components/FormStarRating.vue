<template>
    <b-row v-bind:class="name">
        <b-col sm="2">
            <label class="float-left" :for="name">{{name}}<small v-if="hasError" class="invalid-feedback">required</small></label>
        </b-col>

        <b-col sm="3">
            <div class="form-control" v-bind:class="{'is-invalid': hasError }">
                <star-rating
                        v-model="value"
                        v-bind:max-rating="5"
                        v-bind:star-size="30"
                        v-bind:show-rating="false"
                />
            </div>
        </b-col>

        <b-col v-if="isValid" sm="1" class="check-icon">
            <v-icon name="check" class="float-left"/>
        </b-col>
    </b-row>
</template>

<script>
    import StarRating from 'vue-star-rating';

    export default {
        name: 'FormStarRating',
        props: {
            name: String,
            isValid: Boolean,
            hasError: Boolean
        },
        components: {
            StarRating
        },
        computed: {
            value: {
                get: function () {
                    return 0;
                },
                set: function(value) {
                    this.$emit('input', value)
                }
            },
        }
    }
</script>

<style scoped>
    .form-control {
        padding: 2px;
        width: 154px;
    }
</style>
