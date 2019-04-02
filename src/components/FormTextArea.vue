<template>
    <b-row v-bind:class="name">
        <b-col sm="2">
            <label class="float-left" :for="name">{{ displayName }}</label>
        </b-col>

        <b-col sm="6">
            <b-form-textarea
                    :id="name"
                    v-model="text"
                    :placeholder="placeholder"
                    rows="3"
                    max-rows="6"
            ></b-form-textarea>
        </b-col>

        <b-col sm="1" class="check-icon">
            <v-icon name="check" class="float-left"/>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'FormTextArea',
        props: {
            name: String,
            placeholder: String,
        },
        computed: {
            displayName: (component) => {
                return component.name.replace(/-/g, ' ');
            }
        }
    }
</script>
