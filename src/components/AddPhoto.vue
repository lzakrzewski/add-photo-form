<template>
  <div class="add-photo">
    <b-row class="venue">
      <b-col sm="2">
        <label for="input-small">Venue</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" placeholder="Venue"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="section">
      <b-col sm="2">
        <label for="input-small">Section</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" placeholder="Section"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="section">
      <b-col sm="2">
        <label for="input-small">Row</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" placeholder="Row"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AddPhoto',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-photo {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
