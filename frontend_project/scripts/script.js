const pages = {}

pages.page_register = () => {

    let register_btn = document.getElementById("reg_btn");
    register_btn.addEventListener('click', function (e) {
        e.preventDefault()

        let first_name = document.getElementById("first_name").value;
        let last_name = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;


        let formdata = new FormData();
        formdata.append("first_name", first_name);
        formdata.append("last_name", last_name);
        formdata.append("email", email);
        formdata.append("password", password);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/mini-project/backend_project/register.php", requestOptions)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))

        window.location.replace('/index.html')

    })

}

pages.page_index = () => {
    let login_btn = document.getElementById("log_btn");
    login_btn.addEventListener('click', function (e) {
        e.preventDefault()

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        results_array = []
        fetch("http://localhost/mini-project/backend_project/login.php", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status == 'logged in'){
                    let full_name = data.first_name + " " + data.last_name
                    localStorage.setItem('name', full_name)
                    window.location.replace('/dashboard.html')
                }
            })
            .catch(error => console.log(error))
    })

}

pages.page_dash = () => {
    let name = localStorage.getItem('name')
    let title = document.getElementById('h1')
    title.innerText = `Hello ${name}`
}


pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}