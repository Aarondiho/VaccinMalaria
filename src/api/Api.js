import axios from "axios";

// endpoints
export const API_URL = 'https://seesternconsulting.com/apiMalaria/ajax.php?action=';


const apiCall = async (endpoint, Data)=>{

    try{

        const response = await axios.post(endpoint, Data);

        return(response.data);

    }catch (error) {
        if (error.response) {
           
          return([{Message :"Server error occurred"}]);

        } else if (error.request) {

            return([{Message :"Pas de connexion internet"}]);

        } else {
            return([{Message :'An unexpected error occurred.'}]);
        }
      }
}

//register
export const fetchRegister = (Datas)=>{
    return apiCall(`${API_URL}saveAppUser`,Datas);
}





