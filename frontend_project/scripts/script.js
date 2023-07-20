const pages = {}

pages.base_url = "http://localhost/full-stack-mini-project/";


pages.page_register = () => {
    console.log("hello world")
}
pages.page_index = () => {
    console.log("hello world login")
}


pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}