import { Account, Client, ID } from "appwrite";
import config from "../config/config";


export class AuthService {
    client  = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.projectId);

        this.account = new Account(this.client);
    }


    async createAccount({email, password , name}) {
        try {
            const userAccount = await this.account.create(
                ID.unique() , 
                email , 
                password , 
                name);

            if(userAccount){
                //call another method
                return this.login({email , password});
            }else{
                return userAccount;
            }

        } catch (error) {
            throw new Error("Error creating account");
        }
    }


    async login({email , password}){
        try {
            return await this.account.createEmailPasswordSession(email , password);
        } catch (error) {
            throw new Error("Error logging in");
            
        }

        // return null;
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: Error" , error);
            
        }
    }

    async logout(){
        try {
        await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: Error" , error);
            
        }
    }

    
}

const authService = new AuthService();

export default authService;