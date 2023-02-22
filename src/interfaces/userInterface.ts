export interface authInterface{
    name?: string | null,
    email?: string | null,
    uid?: string | null ,
    status: string 
    errorMessage? : null | string
} 

// export interface authState{
//     users: authInterface[]
// }

export const initialState : authInterface = {
    uid: null,
    email: null,
    name: null,
    errorMessage: null,
    status: "false"
}