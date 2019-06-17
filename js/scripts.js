//Business Logic for AddressBook --------
function AddressBook () {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

Add

//Business Logic for Contacts ------
function Contact(firstName, lastName, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}






$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

    // Collect name input.
    var name =
    $("#name").val();

    //Collect number input and convert to an integer.
    var number = parseInt(
    $("#number").val());

    //Display results.
    $("#result-section").show();
    $("#result-text").html(name+"<br>"+number);

  });
});
