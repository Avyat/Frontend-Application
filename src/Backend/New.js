import axios from 'axios';

const NEW_API_BASE_URL="http://localhost:8080/blog";

class New{
    getNew(){
        return axios.get(NEW_API_BASE_URL)
    }
    creatNewBlog(blog){
        return axios.post(NEW_API_BASE_URL,blog)
    }
    deleteBlog(id){
        return axios.delete(NEW_API_BASE_URL + '/' +id)
    }
    getNewById(id){
        return axios.get(NEW_API_BASE_URL + '/' +id)
    }
    updateBlog(id,blog){
        return axios.put(NEW_API_BASE_URL+'/'+id,blog)
    }
}

export default new New()