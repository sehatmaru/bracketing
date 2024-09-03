export class CreateEditKeyRequestModel {
    public name = ''
    public note = ''
    public password = ''
    public secureId = ''
    public username = ''
    public category = ''
    public linkUrl = ''

    constructor() {
    }
}

export class CreateEditKeyResponseModel {
    public secureId = ''
    public name = ''
}

export class ListKeyRequestModel {
    public search = ''
    public category = ''
}

export class ListKeyResponseModel {
    public data : KeyResponseModel[] = [] 
    public totalData = 0
}

export class KeyResponseModel {
    public name = ''
    public note = ''
    public secureId = ''
    public username = ''
    public category = ''
    public linkUrl = ''
    public icon = ''
}

export class PasswordResponseModel {
    public password = ''
}

export class DeleteKeyRequestModel {
    public secureId = ''
    public password = ''
}

export class OpenDeleteKeyRequestModel {
    public secureId = ''
    public password = ''
}

export class OpenKeyResponseModel {
    public username = ''
    public password = ''
    public name = ''
    public note = ''
    public secureId = ''
    public category = ''
    public linkUrl = ''
    public lastEdited = new Date()
}

export class DetailKeyRequestModel {
    public secureId = ''
    public password = ''
}

export class BaseRequestModel {
    public secureId = ''
}