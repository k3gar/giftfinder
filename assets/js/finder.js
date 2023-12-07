new Vue({
  data(){
    return{
      step:1,
      para_quien: '',
      edad: '',
      presupuesto: '',
      categoria: '',
      subcategoria: '',
      lists: null
      
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    async fetchdata() {
      const res = await fetch('assets/js/data.json');
      const data = await res.json();
      this.lists = data;
    }
 
  }, async created() {
    await this.fetchdata();
    console.log(this.lists);
  },
  computed:{
    filterList(){
      var vm = this, lists = vm.lists 
      return _.filter(lists, function(query){
        var para_quien = vm.para_quien ? (query.para_quien == vm.para_quien) : true,
            edad = vm.edad ? (query.edad == vm.edad) : true,
            presupuesto = vm.presupuesto ? (query.presupuesto == vm.presupuesto) : true,
            categoria = vm.categoria ? (query.categoria == vm.categoria) : true,
            subcategoria = vm.subcategoria ? (query.subcategoria == vm.subcategoria) : true;
        
        return para_quien && edad && presupuesto && categoria && subcategoria
      })
    }
  },
  mounted(){

  }
}).$mount('#app')
