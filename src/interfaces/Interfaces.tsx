export interface Usuario {
    id: string;
    correo: string;
    password: string;
}

export interface LoginData {
    correo:   string;
    password: string;
}

export interface RegisterData {
    correo:   string;
    password: string;
    nombre:   string;
}

export interface LoginResponse {
    usuario: Usuario;
}

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    errorMessage: string;
    user: Usuario | null;
}