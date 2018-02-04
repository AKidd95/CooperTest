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
    expect(person.cooperMessage).toEqual('Average');
  });
});
