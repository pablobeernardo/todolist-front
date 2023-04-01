export default async function auth(authCode: string): Promise<any>{

    console.log(`http://localhost:3010/auth/code/${authCode}`);
    const response = await fetch(`http://localhost:3010/auth/code/${authCode}`,{
        method:'GET',
        headers:{
            "Acess-Control-Allow-Origin": "*"
        }


    });
    return response.json();

}