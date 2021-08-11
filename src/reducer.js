var initialState = {
    contacts_list: [
    {name: "Jason", city: " Orlando", state: " Florida"},
    {name: "Paul", city: " Newark", state: " New Jersey"}
    ]
};

function contacts_reducer (state, action) {
    if (state === undefined) {
      return initialState;
    }
    
    return state;
  }
  
export default contacts_reducer;