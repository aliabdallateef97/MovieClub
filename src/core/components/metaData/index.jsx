import React from "react";

const MetaData = (props) => {
  return <>{props.loading ? <props.LoadingSkeleton />: props.children}</>;
};

export default MetaData;
