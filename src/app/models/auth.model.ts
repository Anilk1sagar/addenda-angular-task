export class ModelPostLogin {
    public email: string;
    public password: string;
    public returnSecureToken: boolean;
}

export class ModelResLogin {
    public displayName: string;
    public email: string;
    public expiresIn: string;
    public idToken: string;
    public kind: string;
    public localId: string;
    public refreshToken: string;
    public registered: boolean;
}

export class ModelToken {
    public idToken: string;
}
