//main file

import axios from "axios";
import * as process from 'process';

type webName = 'https://www.google.com' | 'https://www.facebook.com' | 'https://ktng-3.github.io/api.json'

interface IUser {
    name: string;
    age: number;
}

function getUser(name?: string): IUser {
    return {
        name: name,
        age: Math.floor(Math.random() * 100)
    }
}

async function main(web: webName): Promise<any> {
    const axiosClient = await axios.create()
    console.log((await axiosClient.get(web)).data)

    if(web = 'https://www.facebook.com'){
        if(web = 'https://www.google.com'){
            return 'wtf how'
        }
    }
}

main('https://ktng-3.github.io/api.json');
console.log(process.cwd());

console.log(getUser('NAME ME PLEASE'));

export {getUser}
export {main as request}
export {webName, IUser as UserInterface}

export default webName

//second file
import { getUser as Getuser, UserInterface as USERi } from './example';

Getuser('NAME ME PLEASE');

function lmao(user: USERi): USERi{
    return user
}