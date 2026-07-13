import { setCategoriesMap } from "./categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const initializeCategoriesData = (dispatch) => {
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoryMap));
    }
    getCategoriesMap();
}