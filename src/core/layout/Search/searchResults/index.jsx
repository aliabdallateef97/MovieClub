import React from "react";
import { MainStack } from "./style";
import { DarkTypography, GrayTypography } from "@/core/styles";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from '@/core/config/import/actions'

const SearchResults = ({ data, type }) => {
  const navigate = useNavigate();
  const dispatch =useDispatch()


  // const closeSearchBar=()=>{
  //   dispatch(actions.setShowSearch())
  // } 

  const onNavigateHandler = (id) => {
    if (type === "actors") {
      navigate(`/actor/${id}`);
      dispatch(actions.setShowSearch())
    } else {
      navigate(`/movie-detail/${id}`);
      dispatch(actions.setShowSearch())
    }
  };
  return (
    <MainStack>
      {!data?.length && (
        <GrayTypography sx={{ textAlign: "center" }}>
          {<FormattedMessage id="movie.results" />}
        </GrayTypography>
      )}
      {data?.map((el) => (
        <DarkTypography
          sx={{ cursor: "pointer" }}
          variant="h5"
          key={el?.id}
          onClick={() => onNavigateHandler(el?.id)}
        >
          {type === "movies" ? el?.title : el?.name}
        </DarkTypography>
      ))}
    </MainStack>
  );
};

export default SearchResults;
