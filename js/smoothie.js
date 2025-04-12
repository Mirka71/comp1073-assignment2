// Make a class for order
class order {

    //specify attributes
    contact;
    size;
    flavour;

    // make constructor
    constructor(contact, size, flavour) {
        this.contact = contact;
        this.size = size;
        this.flavour = flavour;
    }


// Output order statement
orderDesc() {
    return `${this.contact} has ordered a ${this.size} ${this.flavour} smoothie.`;
}

}

const contact = document.querySelector("#name")

// target the form element and for when the form is submitted
document.getElementById('#form').addEventListener('submit', result);

function result(event) {
    event.preventDefault();
}

