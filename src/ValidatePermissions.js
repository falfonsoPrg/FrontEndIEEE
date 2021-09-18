const ValidatePermission = {}

ValidatePermission.canCreate = (roles) => {
    let rta = false
    roles.forEach(r => {
        if(r.canCreate) rta = true
    });
    return rta
}

ValidatePermission.canDelete = (roles) => {
    let rta = false
    roles.forEach(r => {
        if(r.canDelete) rta = true
    });
    return rta
}

ValidatePermission.canUpdate = (roles) => {
    let rta = false
    roles.forEach(r => {
        if(r.canUpdate) rta = true
    });
    return rta
}

ValidatePermission.isAdmin = (roles) => {
    let rta = false
    roles.forEach(r => {
        if(r.canUpdate && r.canDelete && r.canCreate) rta = true
    });
    return rta
}

export default ValidatePermission