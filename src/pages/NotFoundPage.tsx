import {useGoHome} from "../hooks";

const NotFoundPage = () => {
    const {goHome} = useGoHome();

    return <div><h1>404 - PAGE NOT FOUND</h1>
        <button onClick={goHome}>Home</button>
    </div>;
};

export default NotFoundPage;