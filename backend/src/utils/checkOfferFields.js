exports.isPostBodyMissingField = (obj) => {
    if (
        obj.name == false ||
        obj.description == false ||
        obj.link == false ||
        obj.imageName == false ||
        obj.name == null ||
        obj.description == null ||
        obj.link == null ||
        obj.imageName == null
    ) {
        return true;
    } else {
        return false;
    }
};
