describe("Cooper", function() {
  var person;
  var cooper;

  beforeEach(function() {
    person = new Person({ gender: 'female', age: 25, distance: 2000 });
//    cooper = new Cooper();
  });

 it('Should be gender female', function() {
   expect(person.gender).toEqual('female');
 });

 it('Should have distance of 2000 meters', function() {
   expect(person.distance).toEqual(2000);
 });

  it('Should have age of 25', function() {
    expect(person.age).toEqual(25);
  });

//  it('Should return "average" result', function() {
//    expect(person).toEqual('average');
//  });
});
