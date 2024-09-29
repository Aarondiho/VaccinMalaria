import axios from "axios";

// endpoints
export const API_URL = 'https://seesternconsulting.com/apiRoyale/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=';


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
    return apiCall(`${API_URL}saveCustomer`,Datas);
}

//login
export const fetchLogin = (Datas)=>{
    return apiCall(`${API_URL}login`,Datas);
}

//login
export const fetchLogout = (Datas)=>{
    return apiCall(logoutEndpoint,Datas);
}

//SEND OTP
export const sendOTP = (Datas)=>{
    return apiCall(`${API_URL}sendOTP`,Datas);
}

//Verify Phone number

export const fetchVerifyPhone = (Datas)=>{
    return apiCall(`${API_URL}verifyPhone`,Datas);
}

//Change Password

export const fetchChangePassword = (Datas)=>{
    return apiCall(`${API_URL}changePassword`,Datas);
}

//getPoints
export const fetchPoints = (Datas)=>{
    return apiCall(`${API_URL}getPoints`,Datas);
}

//get ReceivedPoints
export const fetchReceivedPoints = (Datas)=>{
    return apiCall(`${API_URL}receivedPoints`,Datas);
}
// getAds
export const fetchAds = (Datas)=>{
    return apiCall(`${API_URL}getAds`,Datas);
}
// get Rewards
export const fetchRewards = (Datas)=>{
    return apiCall(`${API_URL}getRewards`,Datas);
}

// get claimedRewards
export const fetchClaimedRewards = (Datas)=>{
    return apiCall(`${API_URL}getClaimedRewards`,Datas);
}

// get Name
export const fetchName = (Datas)=>{
    return apiCall(`${API_URL}getName`,Datas);
}

// send Points Customers
export const sendPoints = (Datas)=>{
    return apiCall(`${API_URL}sendPoints`,Datas);
}

// send Points Agents

export const sendPointsAgent = (Datas)=>{
    return apiCall(`${API_URL}sendPointsAgent`,Datas);
}

// get Bars

export const getBars = (Datas)=>{
    return apiCall(`${API_URL}getBar`,Datas);
}

// get History Points Last 5

export const getHistory1= (Datas)=>{
    return apiCall(`${API_URL}getPointHistory1`,Datas);
}


// get History Points All

export const getHistory= (Datas)=>{
    return apiCall(`${API_URL}getPointHistory`,Datas);
}

// get Notifications Number

export const fetchNotifications = (Datas)=>{
    return apiCall(`${API_URL}getNotifications`,Datas);
}
export const fetchNotNumber = (Datas)=>{
    return apiCall(`${API_URL}getNotificationsNumber`,Datas);
}


export const fetchPassword = (Datas)=>{
    return apiCall(`${API_URL}verifyPassword`,Datas);
}
export const fetchLevel = (Datas)=>{
    return apiCall(`${API_URL}getLevel`,Datas);
}

export const fetchLevelById = (Datas)=>{
    return apiCall(`${API_URL}getLevelById`,Datas);
}

export const claimMyReward = (Datas)=>{
    return apiCall(`${API_URL}claimReward`,Datas);
}

export const deleteMyAccount = (Datas)=>{
    return apiCall(`${API_URL}deleteCustomer`,Datas);
}








