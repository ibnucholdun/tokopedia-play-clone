import axios from "axios";

export const GET_VIDEO = "GET_VIDEO";
export const FETCH_START = "FETCH_START";
export const GET_VIDEO_SUCCESS = "GET_VIDEO_SUCCESS";
export const GET_DETAIL_VIDEO = "GET_DETAIL_VIDEO";
export const SEARCH_VIDEO = "SEARCH_VIDEO";
export const POST_COMMENT = "POST_COMMENT";

const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

const getVideoSuccess = (video) => {
  return {
    type: GET_VIDEO_SUCCESS,
    video,
  };
};

export const searchVideo = (search) => {
  return {
    type: SEARCH_VIDEO,
    search,
  };
};

const getDetailVideoSuccess = (detailVideo) => {
  return {
    type: GET_DETAIL_VIDEO,
    detailVideo,
  };
};

const postComment = (comment) => {
  return {
    type: POST_COMMENT,
    comment,
  };
};

export const getVideo = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const video = await axios.get(
      "https://final-project-backend.cyclic.app/api/video"
    );
    dispatch(getVideoSuccess(video.data.allVideos));
  };
};

export const getSearchedVideo = (search) => {
  return async (dispatch) => {
    const searchVideoData = await axios.get(
      `https://final-project-backend.cyclic.app/api/searchVideo?keyword=${search}`
    );
    dispatch(searchVideo(searchVideoData.data.video));
  };
};

export const getDetailVideo = (id) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const video = await axios.get(
      `https://final-project-backend.cyclic.app/api/video/${id}`
    );
    dispatch(getDetailVideoSuccess(video.data.video));
  };
};

export const postCommentAction = (username, comment, videoID) => {
  return async (dispatch) => {
    const commentData = await axios.post(
      `https://final-project-backend.cyclic.app/api/comment?videoID=${videoID}`,
      {
        username,
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    dispatch(postComment(commentData.data.video.comments));
  };
};
