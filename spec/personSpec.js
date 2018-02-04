describe('person', function() {
  var person;

  beforeEach(function() {
    person = new Person({
      gender: 'Female',
      age: 25,
    });
  });

  it('person should have gender', function() {
    expect(person.gender).toBe('Female');
  });

  it('should have age', function() {
    expect(person.age).toBe(25);
  });

  // it('should have distance', function() {
  //   expect(person.distance).toBe(2000);
  // });
});
