let data = [
    {id: 1, course: "Databases", grade: 4},
    {id: 2, course: "Software Production", grade: 5}
]

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
            <td>${record.course}</td>
            <td>${record.grade}</td>
            <td>
                <button class="edit" onclick={edit(${record.id})}>Edit</button>
                <button class="delete" onclick={delet(${record.id})}>Delete</button>
            </td>
        </tr>`
    ))

    tabledata.innerHTML = elements;
}

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function add() {
    var course = document.querySelector(".course").value;
    var grade = document.querySelector(".grade").value;

    var newObj = {id: 3, course: course, grade: grade};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

function edit(id) {
    document.querySelector(".create_form").style.display = "none";
    document.querySelector('.update_form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.ucourse').value = obj.course;
    document.querySelector('.ugrade').value = obj.grade;
    document.querySelector('.id').value = obj.id;
}

function update() {
    var id = parseInt(document.querySelector('.id').value);
    var course = document.querySelector('.ucourse').value;
    var grade = document.querySelector('.ugrade').value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, course, grade};

    document.querySelector(".create_form").style.display = "block";
    document.querySelector('.update_form').style.display = "none";
    
    readAll();
}

function delet(id) {
    data = data.filter(rec => rec.id !== id)
    readAll();
}