import { Navigate } from "react-router-dom";

const Protected = ({ children, isSignedIn }) => {
    if (!isSignedIn)
        return <Navigate to="/login" />;

    return children;

};

export default Protected;