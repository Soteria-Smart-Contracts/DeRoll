


async function DisplayEmployeePage(){
    document.getElementById('Proprietor').style.display = "none";
    document.getElementById('Employee').style.display = "inline-flex";
}

async function DisplayProprietorPage(){
    document.getElementById('Employee').style.display = "none";
    document.getElementById('Proprietor').style.display = "inline-flex";
}