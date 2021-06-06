class SingletonSpinner {
    spinnerState
    
    constructor() {
      
      if (!SingletonSpinner.instance) {
        this.spinnerState = false;
        SingletonSpinner.instance = this
      }
      // Initialize object
      return SingletonSpinner.instance
        
    }
  
    getSpinnerState() {
      return this.spinnerState
    }
  
    setSpinnerState(state) {
      this.spinnerState = state;
    }
}
  
let singletonInstance = new SingletonSpinner();
  
//Object.freeze(singletonInstance);

export default singletonInstance;