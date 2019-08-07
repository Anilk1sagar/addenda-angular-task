export interface ModelPostLogin {
    email: string;
    password: string;
    returnSecureToken: boolean;
}

export interface ModelResLogin {
    displayName: string;
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
    registered: boolean;
}

export class ModelToken {
    public idToken: string;
}
