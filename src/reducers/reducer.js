const reducer = (state, action) => {
    switch(action.type){
     case "PLUS_A":
       return  {...state, a: state.a +1 }
     case "MINUS_A":
       return {...state, a:state.a -1}
     case "PLUS_B":
       return  {...state, b: state.b +1 }
     case "MINUS_B":
       return {...state, b:state.b -1}
     case "PLUS_C":
       return  {...state, c: state.c +1 }
     case "MINUS_C":
       return {...state, c:state.c -1}
     default:
       return {...state}
    }  
 
  }

  export {reducer};