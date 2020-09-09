export interface LoginrespfrmDB{
    Data:Data1,
    status : String,
    error?: String,
}
export interface Data1 {
    username?:String,
    address?:String,
    mobile?:String,
    email?:String,
    usertype?:String,
}