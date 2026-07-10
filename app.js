function AddCustomer() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let add_line_1 = document.getElementById("add-line-1").value;
    let add_line_2 = document.getElementById("add-line-2").value;
    let gender = document.getElementById("gender").value;
    let status = document.getElementById("status").value;
    let barcode = document.getElementById("barcode").value;

    let Custmoer = {
        fname: fname,
        lname: lname,
        mobile: mobile,
        email: email,
        city: city,
        add_line_1: add_line_1,
        add_line_2: add_line_2,
        gender: gender,
        status: status,
        barcode: barcode
    }

    console.log(Custmoer);
}
