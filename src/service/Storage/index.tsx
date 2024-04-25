const jraBank = {
    login: false
}

interface IJraBank {
    login: boolean
}

export const getAllStorage = (): string | null => {
    return localStorage.getItem('jrabank')
}

export const createStorage = (): void => {
     localStorage.setItem('jrabank', JSON.stringify(jraBank))
}

export const changeLocalStorage = (jraBank: IJraBank): void => {
    localStorage.setItem('jrabank', JSON.stringify(jraBank))
}