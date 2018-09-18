Vue.component("tulisan", {
  template: "<b>Ini Implementasi tulisan dengan component</b>"
});
new Vue({
  el: "#app"
});

Vue.component("tulisan2", {
  template: "<b><slot></slot></b>"
});

new Vue({
  el: "#app2"
});

Vue.component(`tulisan3`, {
  template: `<div><siswa v-for="s in daftarsiswa"> {{ s.nama }} kelas {{ s.kelas }} </siswa></div>`,
  data: function() {
    return {
      daftarsiswa: [
        { nama: `Hasan`, kelas: `XII` },
        { nama: `Busro`, kelas: `XI` },
        { nama: `Sybil`, kelas: `X` }
      ]
    };
  }
});
Vue.component(`siswa`, {
  template: `<li><slot></slot></li>`
});
new Vue({
  el: `#app3`
});

Vue.component("tulisan4", {
  props: ["judul", "isi"],
  template: "<div><h2>{{judul}}</h2> <p>{{isi}}</p></div>"
});
new Vue({
  el: "#app4"
});
Vue.component("tulisan5", {
  template:
    "<input type='text' placeholder='masukan nama' @blur='validasi'></input>  ",
  methods: {
    validasi() {
      this.$emit("applay");
    }
  }
});
new Vue({
  el: "#app5",
  data: {
    valid: false
  },
  methods: {
    validasi() {
      this.valid = true;
    }
  }
});
