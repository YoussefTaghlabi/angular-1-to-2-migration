
describe('userDetails', function() {
  var $ctrlCnst; 
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($componentController) {
    // Component Controller constructor
    $ctrlCnst = $componentController;
  }));
  
  it('should set the user on the controller to the matching user by id', function() {
    
    var ctrl = $ctrlCnst('userDetails',
      { '$routeParams': {id:3}}, // Controller Params
      { allUsers: [{id:1, name:'wrong'}, {id:3, name:'correct'}]} // Bindings
    )
      
    expect(ctrl.user.name).toBe('correct');
  })
})