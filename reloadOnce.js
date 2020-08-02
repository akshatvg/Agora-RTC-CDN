if (!localStorage.getItem("reload")) {
    localStorage.setItem("reload", "true");
    location.reload();
}
else {
    localStorage.removeItem("reload");
}
