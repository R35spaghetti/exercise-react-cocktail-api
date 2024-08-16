import {useNavigate} from "react-router-dom";

export const useGoFavorites = () => {
    const navigate = useNavigate();

    return {
        goFavorites: () => navigate("/favorites"),
    }

}