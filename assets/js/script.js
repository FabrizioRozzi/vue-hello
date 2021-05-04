const app = new Vue({
  el:'#app',
  data : {
    messaggio : 'Mostare in un h1',
    myClass : '',
    myImg : 'assets/img/imge.jpg'
  },
  methods : {
    changeColor(color){
      //console.log(app);
      this.myClass = color;
      //console.log(color);
    },
    
    
  }


})