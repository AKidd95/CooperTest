describe("Cooper", function() {
  var person;

  beforeEach(function() {
  person = new Person({ gender: 'female', age: 25 });
  });

  it('Should be gender female', function() {
   expect(person.gender).toEqual('female');
  });

  it('Should have age of 25', function() {
    expect(person.age).toEqual(25);
  });

  it("returns the correct value", function(){
    person.calculateCooper(2000);
    expect(cooper.cooperMessage).toEqual('Average');
  });

  // it("returns the correct value", function(){
  //   person = new Person({age: 14, gender: 'male'});
  //   person.calculateCooper(100);
  //   expect(person.cooperMessage).toEqual('Poor');
  // });
  //
  // it("returns the correct value", function(){
  //   person = new Person({age: 50, gender: 'male'});
  //   person.calculateCooper(2400);
  //   expect(person.cooperMessage).toEqual('Excellent');
  // });

});
