import {
  FETCH_START,
  GET_VIDEO_SUCCESS,
  SEARCH_VIDEO,
  GET_DETAIL_VIDEO,
} from "../actions/videoActions";

const initialState = {
  video: [],
  isLoading: false,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        video: action.video,
        isLoading: false,
      };
    case GET_DETAIL_VIDEO:
      return {
        ...state,
        video: action.detailVideo,
        isLoading: false,
      };
    case SEARCH_VIDEO:
      return {
        ...state,
        video: action.search,
      };
    default:
      return state;
  }
};

export default videoReducer;
