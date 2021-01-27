exports.isPostBodyMissingField = (obj) => {
    if (
        obj.email == false ||
        obj.password == false ||
        obj.email == null ||
        obj.password == null
    ) {
        return true;
    } else {
        return false;
    }
};
