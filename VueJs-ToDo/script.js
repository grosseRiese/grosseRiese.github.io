
let app = new Vue({
 el:'#app',
  data:{
    todo:'',
    todos:[]
   },
   mounted(){
    if(localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
   },
  methods:{
    addTodo(){
      if(!this.testTodo) return alert("Of course you cann't add an empty Todo !");
      let todo = {testTodo: this.testTodo, done:false}
       this.todos.push(todo);
       this.testTodo = '';
       this.saveLocalTodos();
    },
    removeTodo(index){
      this.todos.splice(index,1); 
      this.saveLocalTodos();
    },
    saveLocalTodos(){
      localStorage.setItem("todos",JSON.stringify(this.todos));
    },
   checkTodo(todo){
       if(!todo.done){
          todo.done = true;
          this.saveLocalTodos();
        }else{
          todo.done = false;
          this.saveLocalTodos();
        }
    },
    allTodo(){
      this.todos = JSON.parse(localStorage.getItem('todos'));
      console.log(this.todos);
    },
    workingOnTodo(){
      let Unchecked_Todo = JSON.parse(localStorage.getItem('todos')).filter(d=>d.done === false);

      this.todos = Unchecked_Todo;
      console.log(this.todos);
    },
    finishedTodo(){
      let checkedTodo = JSON.parse(localStorage.getItem('todos')).filter(d=>d.done === true);
      this.todos = checkedTodo;
      console.log(this.todos);
    }, 
    countCheckedToDosLength(){
      let checkedLength = JSON.parse(localStorage.getItem('todos')).filter(d=>d.done === true);
      return checkedLength.length;
    },
    countAllToDosLength(){
      let checkedAllLength = JSON.parse(localStorage.getItem('todos'));
      return checkedAllLength.length;
    },
    count_Un_CheckedToDosLength(){
      let unCheckedLength = JSON.parse(localStorage.getItem('todos')).filter(d=>d.done === false);
      return unCheckedLength.length;
    },
  }
});