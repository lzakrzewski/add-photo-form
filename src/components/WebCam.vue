<template>
    <b-row v-bind:class="name">
        <b-col sm="2">
            <label class="float-left" :for="name">{{ name }}<small v-if="hasError" class="invalid-feedback">required</small></label>
        </b-col>

        <b-col sm="5" class="image-container">
            <div id="my_camera"></div>
            <img v-if="image" :src="image" class="image-preview"/>
        </b-col>

        <b-col sm="1" >
            <b-button class="float-left" variant="success" v-on:click="takeSnapshot">Snap!</b-button>
        </b-col>

        <b-col sm="1">
            <b-button class="float-left" variant="danger" v-on:click="setUp()">Reset</b-button>
        </b-col>

        <b-col v-if="isValid" sm="1" class="check-icon">
            <v-icon name="check" class="float-left"/>
        </b-col>

    </b-row>
</template>

<script>
    import Webcam from 'webcamjs';

    export default {
        name: 'WebCam',
        props: {
            name: String,
            isValid: Boolean,
            hasError: Boolean
        },
        methods: {
            setUp: function () {
                this.image = null;
                this.value = null;

                Webcam.set({
                    width: 320,
                    height: 240,
                    image_format: 'jpeg',
                    jpeg_quality: 90
                });

                Webcam.attach('#my_camera');
            },
            takeSnapshot: function () {
                let self = this;

                Webcam.snap(function(image) {
                    self.image = image;
                    self.value = image;
                });
            }
        },
        mounted: function () {
            this.setUp();
        },
        computed: {
            value: {
                get: function () {
                    return '';
                },
                set: function(value) {
                    this.$emit('input', value)
                }
            },
        },
        data()  {
            return {
                image: null
            }
        }
    }
</script>
