import axios from 'axios'

export default async function getData(id){
    let user_url = 'https://jsonplaceholder.typicode.com/users/'+id
    let post_url = 'https://jsonplaceholder.typicode.com/posts?userId='+id
    console.log(post_url);
    
    let {data : user_data} = await axios(user_url)
    let {data : post_data} = await axios(post_url)

    console.log(user_data,post_data)


}

getData(1)