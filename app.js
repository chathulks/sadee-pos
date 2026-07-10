let CustomerArray = [];
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

    CustomerArray.push(Custmoer);
    CustomerTableLoad();
    console.log(CustomerArray);
}

function CustomerTableLoad() {
    let body = "";
    let cus_details_table = document.getElementById("cus_details_table");
    for (let i = 0; i < CustomerArray.length; i++) {
        body += `
            <tr>
                <td>${i + 1}</td>
                <td>${CustomerArray[i].fname}</td>
                <td>${CustomerArray[i].lname}</td>
                <td>${CustomerArray[i].mobile}</td>
                <td>${CustomerArray[i].email}</td>
                <td>${CustomerArray[i].city}</td>
                <td>${CustomerArray[i].add_line_1}</td>
                <td>${CustomerArray[i].add_line_2}</td>
                <td>${CustomerArray[i].gender}</td>
                <td>${CustomerArray[i].status}</td>
                <td>${CustomerArray[i].barcode}</td>
            </tr>
        `;
    }
    cus_details_table.innerHTML = body;
}