function Agechecker() {
    let Age = document.getElementById("age").value;

    if (Number(Age) >= 18) {
        document.getElementById("Ans").innerHTML="Status: You're eligible to vote"
    }

    else {
        document.getElementById("Ans").innerHTML="Status: You're still a minor"
    }

}